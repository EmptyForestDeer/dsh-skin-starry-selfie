window.__ModuleLoader__.load({
	id: "dsh-skin-starry-selfie",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region src/client/art.ts
		const SKIN_ID = "starry-selfie";
		const BODY_ATTR = "data-dsh-starry-selfie";
		const ART_FILE = "4b3fb3cafb7fb0f0250936e8a08f48b631f15f499f203ca31d264c9a59251709.webp";
		/** Resolve against the host base, including reverse-proxy mounts and dsh-app desktop forwarding. */
		function skinAssetUrl(file) {
			return new URL(`skin-assets/${SKIN_ID}/${file}`, document.baseURI).href;
		}
		const STARRY_ART = skinAssetUrl(ART_FILE);
		//#endregion
		//#region src/client/theme.css
		const CSS = [
			/* ---- scope: the host branches panel fills on body[data-ds-dark-theme] and the static ---- */
			/* ---- palette (dsh-client-ui-theme/lib/index.js:158), so this skin forces that attribute ---- */
			/* ---- on (installForcedDarkTheme) and only declares its own dusk-violet glass below. ---- */
			/* ---- html prefix beats the host theme's body-level token blocks in any load order ---- */
			"html body[data-dsh-starry-selfie]{",
			/* ---- approved text colors (the white-on-dusk set), re-asserted over the dark base ---- */
			"color:#ece9f6;",
			"color-scheme:dark;",
			"--dsw-alias-label-primary:#f2eeff!important;",
			"--dsw-alias-label-primary-bluish:#ded6ff!important;",
			"--dsw-alias-label-secondary:#c3bade!important;",
			"--dsw-alias-label-tertiary:#9d94bd!important;",
			"--dsw-alias-label-caption:#837aa3!important;",
			"--dsw-alias-label-deep-diving:#b7a6ff!important;",
			"--dsw-alias-label-primary-inverted:#2b2340!important;",
			/* ---- starry violet/gold accents and translucent glass faces ---- */
			"--starry-violet:#b7a6ff;--starry-gold:#e8c07d;--starry-ink:#171226;",
			"--starry-glass:rgba(24,18,42,.72);--starry-glass-strong:rgba(18,13,34,.86);",
			"--starry-reading:rgba(12,9,26,.42);",
			"--starry-shadow:0 18px 54px rgba(5,3,16,.45), 0 2px 8px rgba(5,3,16,.35);",
			"--dsw-alias-bg-layer-1:rgba(30,23,54,.78)!important;",
			"--dsw-alias-bg-layer-2:rgba(38,29,66,.82)!important;",
			"--dsw-alias-bg-layer-3:rgba(46,36,78,.86)!important;",
			"--dsw-alias-bg-overlay:rgba(24,18,42,.94)!important;",
			"--dsw-alias-border-l1:rgba(183,166,255,.22)!important;",
			"--dsw-alias-border-l2:rgba(183,166,255,.32)!important;",
			"--dsw-alias-border-l2-darkmode-thin:rgba(183,166,255,.28)!important;",
			"--dsw-alias-border-l3:rgba(232,192,125,.55)!important;",
			"--dsw-alias-brand-primary:#b7a6ff!important;",
			"--dsw-alias-brand-text:#f2eeff!important;",
			"--dsw-alias-button-elevated-fill:rgba(46,36,78,.9)!important;",
			"--dsw-alias-button-floating-fill:rgba(46,36,78,.92)!important;",
			"--dsw-alias-button-floating-hover:rgba(58,46,96,.95)!important;",
			"--dsw-alias-button-info-fill:#7a68c9!important;",
			"--dsw-alias-button-info-hover:#8d7bd8!important;",
			"--dsw-alias-interactive-bg-active:rgba(183,166,255,.28)!important;",
			"--dsw-alias-interactive-bg-hover:rgba(183,166,255,.14)!important;",
			"--dsw-alias-interactive-bg-hover-solid:rgba(52,41,88,.9)!important;",
			"--dsw-alias-menu-group-header-fill:rgba(46,36,78,.85)!important;",
			"--dsw-alias-state-business-primary:#8d7bd8!important;",
			"--dsw-alias-state-business-tertiary:rgba(141,123,216,.25)!important;",
			"--dsw-alias-markdown-inline-code:rgba(18,13,34,.85)!important;",
			"--dsw-alias-markdown-code-block:rgba(18,13,34,.85)!important;",
			"--dsw-alias-markdown-code-block-banner:rgba(30,23,54,.9)!important;",
			"--dsw-alias-markdown-citation:rgba(38,29,66,.85)!important;",
			"--dsw-alias-markdown-tag:rgba(38,29,66,.8)!important;",
			"--dsw-alias-markdown-placeholder:#837aa3!important;",
			"--dsw-shadow-lv2:var(--starry-shadow)!important;",
			"--dsw-specific-input-major:rgba(30,23,54,.82)!important;",
			"--dsw-specific-input-minor:rgba(24,18,42,.8)!important;",
			"--dsw-specific-selector:rgba(38,29,66,.88)!important;",
			"--dsw-specific-sidebar-fill:rgba(16,12,30,.45)!important;",
			"--dsw-specific-bubble:rgba(38,29,66,.85)!important;",
			"--dsw-alias-button-contrast-fill:#2a2145!important;",
			"--dsw-alias-button-primary-fill:#7a68c9!important;",
			"--dsw-alias-button-primary-hover:#8d7bd8!important;",
			"--dsw-alias-label-primary-dimmed:#cfc7e8!important;",
			"--dsw-alias-menu-icon:#c3bade!important;",
			"--dsw-specific-menu:rgba(24,18,42,.94)!important;",
			"--dsw-specific-sidebar-nav-item-hover:rgba(183,166,255,.14)!important;",
			"--dsw-specific-sidebar-nav-item-active:rgba(183,166,255,.24)!important;",
			"--dsw-alias-turn-trigger-bg:rgba(38,29,66,.85)!important;",
			"--dsw-alias-turn-trigger-bg-hover:rgba(58,46,96,.9)!important;",
			"--dsw-alias-tooltip-bg:rgba(18,13,34,.95)!important;",
			"--dsw-alias-bg-layer-4:rgba(52,41,88,.9)!important;",
			"--dsw-alias-bg-mask-1:rgba(10,7,22,.6)!important;",
			"background-color:#141021;",
			"}",
			/* ---- only when the wallpaper is shown do panels go transparent; with the wallpaper ---- */
			/* ---- off they must stay opaque dark, otherwise nothing sits behind the text ---- */
			"html[data-starry-background=visible] body[data-dsh-starry-selfie]{--dsw-alias-bg-base:transparent!important;}",
			/* ---- full-bleed wallpaper behind everything ---- */
			"html[data-starry-background=visible] body[data-dsh-starry-selfie]::before{",
			"content:\"\";position:fixed;inset:0;z-index:-2;pointer-events:none;",
			"background:var(--starry-art) center 34%/cover no-repeat fixed;",
			"filter:brightness(1.22) saturate(1.12) contrast(1.02);",
			"}",
			"html[data-starry-background=visible] body[data-dsh-starry-selfie]::after{",
			"content:\"\";position:fixed;inset:0;z-index:-1;pointer-events:none;",
			"background:linear-gradient(180deg,rgba(12,8,26,.12),rgba(12,8,26,.28) 55%,rgba(10,7,22,.48));",
			"}",
			"html[data-starry-background=visible][data-starry-veil=light] body[data-dsh-starry-selfie]::after{",
			"background:linear-gradient(180deg,rgba(12,8,26,.05),rgba(12,8,26,.15) 55%,rgba(10,7,22,.3));",
			"}",
			"html[data-starry-background=visible][data-starry-veil=strong] body[data-dsh-starry-selfie]::after{",
			"background:linear-gradient(180deg,rgba(12,8,26,.32),rgba(12,8,26,.5) 55%,rgba(10,7,22,.68));",
			"}",
			/* ---- frosted glass only on small floating surfaces; large columns stay sharp ---- */
			"html:not([data-starry-blur=off]) body[data-dsh-starry-selfie] :is([data-composer-card],[data-cordis-panel]){",
			"backdrop-filter:blur(14px) saturate(1.15);-webkit-backdrop-filter:blur(14px) saturate(1.15);",
			"}",
			/* ---- sidebar column: translucent so the art shows through ---- */
			"body[data-dsh-starry-selfie] [class*=sidebarCol]{",
			"background:rgba(14,10,28,.5);",
			"--dsw-specific-sidebar-fill:transparent!important;",
			"--dsw-alias-bg-layer-1:rgba(26,20,46,.42)!important;",
			"--dsw-alias-bg-layer-2:rgba(34,26,58,.5)!important;",
			"--dsw-alias-interactive-bg-hover:rgba(183,166,255,.16)!important;",
			"--dsw-alias-interactive-bg-active:rgba(183,166,255,.3)!important;",
			"}",
			"body[data-dsh-starry-selfie] [class*=sidebarCol]>div{background:transparent;}",
			/* ---- conversation column: translucent reading veil (no blur, art stays sharp) ---- */
			"body[data-dsh-starry-selfie] [class*=centerCol]{",
			"background:var(--starry-reading);",
			"}",
			/* ---- warm-gold focus rings and selection ---- */
			"body[data-dsh-starry-selfie] ::selection{background:rgba(232,192,125,.35);color:#fff8ec;}",
			"body[data-dsh-starry-selfie] :focus-visible{outline-color:var(--starry-gold);}",
			/* ---- element fixes for surfaces the host paints with label/contrast tokens ---- */
			"body[data-dsh-starry-selfie] [class*=buildVersion]{background:rgba(18,13,34,.85);color:#f2eeff;}",
			"body[data-dsh-starry-selfie] [data-composer-card] :where(textarea,[contenteditable],[data-composer-input]){background:transparent;}"
		].join("");
		//#endregion
		//#region src/client/forced-dark.ts
		const DARK_ATTR = "data-ds-dark-theme";
		/**
		* This skin is a dark dusk theme. The host decides most panel fills from
		* `body[data-ds-dark-theme]` (@deepseek-ai/dsh-client-ui-theme/lib/index.js:158
		* `document.body.toggleAttribute('data-ds-dark-theme', dark)`); when the user's
		* host preference is light, every component that branches on that attribute keeps
		* its white variant and no alias override can reach it. Asserting the attribute
		* makes the whole host adopt its own dark palette. The original state is restored
		* on dispose; a competing host theme change is simply re-asserted once.
		*/
		function installForcedDarkTheme(body) {
			const doc = body.ownerDocument;
			const hadAttribute = body.hasAttribute(DARK_ATTR);
			const previousValue = body.getAttribute(DARK_ATTR);
			const root = doc.documentElement;
			const previousColorScheme = root.style.getPropertyValue("color-scheme");
			const previousPriority = root.style.getPropertyPriority("color-scheme");
			const assert = () => {
				if (!body.hasAttribute(DARK_ATTR)) body.setAttribute(DARK_ATTR, "");
			};
			assert();
			root.style.setProperty("color-scheme", "dark");
			const observer = new MutationObserver((records) => {
				for (const record of records) {
					if (record.target === body && record.attributeName === DARK_ATTR && !body.hasAttribute(DARK_ATTR)) assert();
				}
			});
			observer.observe(body, { attributes: true, attributeFilter: [DARK_ATTR] });
			return () => {
				observer.disconnect();
				/* restore only the value this skin actually owns: if the host changed the
				   attribute meanwhile, leave its newer choice alone. */
				if (hadAttribute) {
					if (previousValue !== null && body.getAttribute(DARK_ATTR) === "") body.setAttribute(DARK_ATTR, previousValue);
				} else if (body.getAttribute(DARK_ATTR) === "") {
					body.removeAttribute(DARK_ATTR);
				}
				if (previousColorScheme === "") root.style.removeProperty("color-scheme");
				else root.style.setProperty("color-scheme", previousColorScheme, previousPriority);
			};
		}
		//#endregion
		//#region src/client/customization.ts
		const SKIN_CUSTOMIZATION_EVENTS = {
			register: "dsh:skin-customization-register-v2",
			unregister: "dsh:skin-customization-unregister-v2",
			ready: "dsh:skin-customization-ready-v2"
		};
		/** Expose one skin definition without a runtime dependency on the manager. */
		function exposeSkinCustomization(definition, target = window) {
			const token = {};
			const register = () => {
				target.dispatchEvent(new CustomEvent(SKIN_CUSTOMIZATION_EVENTS.register, { detail: { token, definition } }));
			};
			target.addEventListener(SKIN_CUSTOMIZATION_EVENTS.ready, register);
			register();
			return () => {
				target.removeEventListener(SKIN_CUSTOMIZATION_EVENTS.ready, register);
				target.dispatchEvent(new CustomEvent(SKIN_CUSTOMIZATION_EVENTS.unregister, { detail: { token, definition } }));
				definition.apply(null);
			};
		}
		const BG_ATTR = "data-starry-background";
		const VEIL_ATTR = "data-starry-veil";
		const BLUR_ATTR = "data-starry-blur";
		function installStarryCustomization(root = document.documentElement) {
			const apply = (state) => {
				if (state === null) {
					root.removeAttribute(BG_ATTR);
					root.removeAttribute(VEIL_ATTR);
					root.removeAttribute(BLUR_ATTR);
					return;
				}
				const scheduled = state.visibility.sfwMode !== false;
				const visible = state.values.background !== false && scheduled;
				root.setAttribute(BG_ATTR, visible ? "visible" : "hidden");
				root.setAttribute(VEIL_ATTR, state.values.veil === "light" || state.values.veil === "strong" ? state.values.veil : "medium");
				root.setAttribute(BLUR_ATTR, state.values.blur === false ? "off" : "on");
			};
			return exposeSkinCustomization({
				protocol: 2,
				skinId: SKIN_ID,
				title: "星穹自拍 / Starry Selfie",
				settings: [
					{
						key: "background",
						type: "boolean",
						label: "显示壁纸背景",
						labelEn: "Show the wallpaper background",
						defaultValue: true
					},
					{
						key: "veil",
						type: "select",
						label: "背景遮罩深度",
						labelEn: "Background veil depth",
						description: "遮罩越重，前景文字越清晰、壁纸越朦胧。",
						descriptionEn: "A heavier veil trades wallpaper visibility for text contrast.",
						defaultValue: "medium",
						options: [
							{ value: "light", label: "轻遮罩", labelEn: "Light veil" },
							{ value: "medium", label: "标准遮罩", labelEn: "Standard veil" },
							{ value: "strong", label: "重遮罩", labelEn: "Heavy veil" }
						]
					},
					{
						key: "blur",
						type: "boolean",
						label: "面板毛玻璃",
						labelEn: "Frosted glass panels",
						defaultValue: true
					},
					{
						key: "sfwMode",
						type: "visibility-schedule",
						label: "不那么二次元模式",
						labelEn: "Not-so-anime mode",
						description: "按本机时间控制壁纸背景的显示与隐藏。",
						descriptionEn: "Control the wallpaper background by local time.",
						defaultValue: { enabled: false, outside: "visible", ranges: [] }
					}
				],
				apply
			});
		}
		//#endregion
		//#region src/client.ts
		function apply(ctx) {
			const body = document.body;
			const existing = document.getElementById("dsh-skin-starry-selfie-css");
			const style = existing ?? document.createElement("style");
			style.id = "dsh-skin-starry-selfie-css";
			style.textContent = CSS;
			if (existing === null) document.head.append(style);
			body.setAttribute(BODY_ATTR, "");
			body.style.setProperty("--starry-art", `url("${STARRY_ART}")`);
			const disposeCustomization = installStarryCustomization();
			const disposeForcedDark = installForcedDarkTheme(body);
			ctx.effect(() => () => {
				disposeCustomization();
				disposeForcedDark();
				style.remove();
				body.removeAttribute(BODY_ATTR);
				body.style.removeProperty("--starry-art");
			}, "ui-skin-starry-selfie: starry dusk theme");
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});
