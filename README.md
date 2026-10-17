# dsh-skin-starry-selfie（星穹自拍）

把一张星穹铁道黄昏自拍壁纸做成 DSH（DeepSeek Harness）的全局主题皮肤：紫暮玻璃面板、暖金强调、整幅壁纸透在界面之后。

![preview/light](preview/light.webp)

## 效果

- 壁纸以 `position: fixed` 铺满视口（`body::before`），上方叠一层**可调深度**的紫暮渐变遮罩（`body::after`）保证文字对比度；
- 全部 `--dsw-alias-*` 设计令牌改写为紫暮玻璃 + 暖金强调；
- 侧栏与对话列半透明，壁纸主体从界面后清晰透出（不做大面积模糊）；
- 输入卡片、Cordis 面板等小浮面用毛玻璃，大块壁纸保持锐利；
- 壁纸经服务端 `/skin-assets/starry-selfie/<sha256>.webp` 提供，内容哈希命名、不可变缓存。

## 为什么它需要"强制深色"

DSH 宿主的配色分支开关是 `<body>` 上的 `data-ds-dark-theme` 属性（`@deepseek-ai/dsh-client-ui-theme/lib/index.js` 的 boot 脚本按用户主题偏好写入）。关键点是：**大量宿主面板的底色并不经过设计令牌**，而是组件自己按该属性选分支，例如：

```css
/* @deepseek-ai/dsh-client-ui-plan */
.card { --plan-card-fill: var(--dsw-static-neutral-50); background: var(--plan-card-fill); }
body[data-ds-dark-theme] .card { --plan-card-fill: var(--dsw-static-neutral-850); }
```

这类写法声明在**组件自己的元素**上，元素自声明恒胜过从 `body` 继承的值——所以在浅色宿主偏好下，无论皮肤往 `body` 上覆盖多少令牌，这些面板都保持白色，结果是"白底浅字看不清"。

本皮肤因此**强制断言 `data-ds-dark-theme`**（`installForcedDarkTheme`）：壁纸是暗色的，整套界面就该走宿主自己的深色变体。这是相对"硬压几十条元素规则"更干净、也更完整（覆盖全部面板）的做法。卸载时按"只回写自己仍持有的值"精确还原，不破坏宿主的主题切换。

## 安装

### 方式一：link 到 profile（开发/本地）

1. 在 `profiles/<你的 profile>/package.json` 的 `dependencies` 加：

   ```json
   "dsh-skin-starry-selfie": "link:/绝对路径/dsh-skin-starry-selfie"
   ```

   并把 `dsh-skin-starry-selfie` 加进 `dsh.profile.bundles` 数组。

2. 建 node_modules 链接（junction 或目录符号链接）：

   ```powershell
   New-Item -ItemType Junction -Path "<profile>\node_modules\dsh-skin-starry-selfie" -Target "<本目录绝对路径>"
   ```

3. 重启 DSH，在「设置 → 皮肤管理」里启用「星穹自拍」。

### 方式二：作为 bundle 插件

本包含 `cordis.patch.yml`，把 `ui-skin-starry-selfie` 条目插入插件 roster（id 与 `skin.json` 的 `wiring.id` 一致）。用 DSH 的插件安装命令指向本目录/仓库即可。

### 皮肤互斥

皮肤之间互斥由 `@smalltailqwq/dsh-client-ui-skin-deep-whale-manager` 管理：home 层与 profile 层 `cordis.patch.yml` 的 `dsh-skin managed` 区段中，本皮肤 `disabled: false`、其余皮肤 `disabled: true`。**同一时间只启用一套皮肤**，否则管理器启动兜底会原子回退到官方默认。

## 设置项

皮肤通过管理器的 v2 自定义协议暴露（「设置 → 皮肤管理」中可调，保存在浏览器 localStorage）：

| 设置 | 类型 | 默认 | 说明 |
|---|---|---|---|
| 显示壁纸背景 | boolean | 开 | 关闭后壁纸层完全不渲染，界面回到纯深色 |
| 背景遮罩深度 | select | 标准 | 轻 / 标准 / 重；越重文字越清晰、壁纸越朦胧 |
| 面板毛玻璃 | boolean | 开 | 输入卡片与 Cordis 面板的 `backdrop-filter` |
| 不那么二次元模式 | visibility-schedule | 关 | 按本机时间隐藏壁纸（例如工作时间用纯深色） |

## 换图 / 重新生成资产

1. 把新图放到 `theme-src/star-rail.jpg`；
2. 跑 `theme-src/make-skin-art.py`（需要 Pillow；它会输出 webp、按内容 sha256 命名、并生成预览图与 manifest）；
3. 同步更新三处引用：
   - `assets/runtime/manifest.json`（服务端白名单）
   - `lib/index.js` 的 `manifest` 数组
   - `lib/client.js` 的 `ART_FILE` 常量

> ⚠️ 文件名前缀必须等于该 webp 内容的 sha256。管理器 `hashSkinAssets` 会在启动时校验，不匹配就直接抛 `Artwork content hash mismatch` 并拒绝加载。

## 目录结构

```
skin.json                 皮肤身份：管理器据此发现皮肤（id / bodyAttr / wiring.id / package）
package.json              dsh.bundle.patch + dsh.client platform=web
cordis.patch.yml          bundle patch：插入 ui-skin-starry-selfie
lib/index.js              服务端：把 assets/runtime 下的图挂到 /skin-assets/starry-selfie/
lib/client.js             客户端：注入主题 CSS、强制深色、暴露设置项
assets/runtime/           壁纸 webp + manifest.json（白名单）
preview/                  预览图
theme-src/                源图与资产生成脚本（不随包必需）
```

## 兼容性

- `skin.json` 的 `dshCompatibility` 按宿主 `0.2.0-rc.2` 填写（管理器规范化后为 `0.2.0rc2`）。
- 本包**未声明** `@deepseek-ai/dsh` peerDependencies，因此宿主的版本准入检查返回"无条件放行"；该字段仅作展示。
- 皮肤需要 `@smalltailqwq/dsh-client-ui-skin-deep-whale-manager` 才能被"皮肤管理"页面发现与切换（设置项依赖它的 v2 协议）。
- 未提供 `desktopIcon`，Windows 桌面端「图标跟随皮肤」对本皮肤退化为官方图标。

## 许可与素材

代码 MIT（见 [LICENSE](LICENSE)）。`theme-src/star-rail.jpg` 为个人自用壁纸素材，**不在 MIT 授权范围内**，版权归原作者/权利方所有；若要公开再分发，请自行确认素材授权。

## 卸载

从 profile 的 `dependencies` 与 `dsh.profile.bundles` 中移除、删掉 node_modules 链接、在皮肤管理里切回官方默认，然后重启 DSH。皮肤卸载时会自动清理注入的 `<style>`、body 属性、`--starry-art` 变量并还原 `data-ds-dark-theme`。
