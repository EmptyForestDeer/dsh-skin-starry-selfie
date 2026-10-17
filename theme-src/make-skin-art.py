#!/usr/bin/env python3
"""Regenerate the wallpaper assets for dsh-skin-starry-selfie.

The host's skin manager (deep-whale-manager, hashSkinAssets) validates that every
file in assets/runtime/manifest.json is named "<sha256-of-its-bytes>.webp". A
mismatch aborts skin loading with "Artwork content hash mismatch", so this script
derives the filename from the encoded bytes and prints every reference that must
be updated.

Usage:
    python make-skin-art.py [--source theme-src/star-rail.jpg] [--root .]

Requires Pillow.
"""
import argparse
import hashlib
import io
import json
import os
import sys

try:
    from PIL import Image
except ImportError:  # pragma: no cover - environment dependent
    sys.exit("Pillow is required: pip install Pillow")

PREVIEW_WIDTH = 1280


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        default=os.path.join("theme-src", "star-rail.jpg"),
        help="source wallpaper (jpg/png)",
    )
    parser.add_argument("--root", default=".", help="plugin package root")
    parser.add_argument("--quality", type=int, default=84, help="webp quality")
    args = parser.parse_args()

    root = os.path.abspath(args.root)
    source = args.source if os.path.isabs(args.source) else os.path.join(root, args.source)
    if not os.path.isfile(source):
        sys.exit(f"source image not found: {source}")

    runtime_dir = os.path.join(root, "assets", "runtime")
    preview_dir = os.path.join(root, "preview")
    os.makedirs(runtime_dir, exist_ok=True)
    os.makedirs(preview_dir, exist_ok=True)

    with Image.open(source) as image:
        image = image.convert("RGB")
        size = image.size

        # main wallpaper: name it after the digest of the bytes we actually ship
        buf = io.BytesIO()
        image.save(buf, "WEBP", quality=args.quality, method=6)
        data = buf.getvalue()
        digest = hashlib.sha256(data).hexdigest()
        art_name = f"{digest}.webp"

        # remove stale artwork so the allowlist never references a missing file
        for name in os.listdir(runtime_dir):
            if name.endswith((".webp", ".png")) and name != art_name:
                os.remove(os.path.join(runtime_dir, name))

        with open(os.path.join(runtime_dir, art_name), "wb") as fh:
            fh.write(data)
        with open(os.path.join(runtime_dir, "manifest.json"), "w", encoding="utf-8") as fh:
            json.dump([art_name], fh, indent=2)
            fh.write("\n")

        # previews for the README / skin catalog
        width = min(PREVIEW_WIDTH, size[0])
        small = image.resize((width, round(size[1] * width / size[0])), Image.LANCZOS)
        small.save(os.path.join(preview_dir, "light.webp"), "WEBP", quality=80)
        dim = Image.new("RGB", small.size, (8, 6, 20))
        Image.blend(small, dim, 0.45).save(os.path.join(preview_dir, "dark.webp"), "WEBP", quality=80)

    print(f"source      : {source} ({size[0]}x{size[1]})")
    print(f"artwork     : assets/runtime/{art_name} ({len(data)} bytes)")
    print("")
    print("Now update these three references to the new filename:")
    print(f"  1. assets/runtime/manifest.json  -> already written ({art_name})")
    print(f'  2. lib/index.js   manifest array -> "{art_name}"')
    print(f'  3. lib/client.js  ART_FILE       -> "{art_name}"')
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
