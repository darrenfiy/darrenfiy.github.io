# Image sources for the client-first homepage and services page

Added 2026-09-29 (CR-PROP-2026-019). Every file below is a resized web derivative; the original bytes stay in
the company's source custody and are not stored here. Hashes are SHA-256 of the **original** file, so a reader
can match each derivative back to its source record.

## `fozone/` — FoZone images (company-owned AI persona; all AI-generated)

Published desk images. Source set: FoZone media library index `ASSETS.json`
(Three-Quarters-International publication receipts point to the same hashes).

| File | Original | Original SHA-256 |
|---|---|---|
| `open-door.webp` | `2026-09-26-desk-2000.jpg` | `b0c6f2fe6908f3a9fd378379a6e069ca77276e8fae44dd4a9f3ae285ffa149bd` |
| `gardener.webp` | `2026-09-29-desk-0800.jpg` | `44da068451a0cfab70099f94bb083f2c76023b2cdee8dfd87c3483bc02c9bc82` |
| `ramen.webp` | `2026-09-28-desk-2000.jpg` | `7e2c1389d4ff22fbb93bd7d3dca784412062fe42a2ab6e5fb6120f588840b208` |
| `voice.webp` | `2026-09-24-when-a-voice-becomes-a-post.jpg` | `77ad7a27febd541623d2f964682441320ad894b1134501dd484290341329c4fc` |
| `tower.webp` | `2026-09-23-separation-beats-seniority.jpg` | `f69d3ef6eafd978c107fe43f18dc672308c763574c2a4d0fea11e86ff7aa8133` |
| `calligraphy.webp` | `2026-09-17-first-company-post.jpg` | `beb56bd42a588fc9740a1414ad536df874dc7fbdd41413994d7a6d7b2a46e854` |
| `red-thread.webp` | `2026-09-27-desk-0800.jpg` | `ccb007d8379f093650ecd3b492a9e1ad4e73f891e7e028fe594a0219a58a0b98` |

Legacy lineage images. Source set `fozone-visual-lineage-legacy-2026-09-17`
(manifest: Three-Quarters-International `PUBLISHING/SOCIAL_MEDIA/ASSET_PROFILES/fozone/VISUAL/SOURCE-MANIFEST.json`).
Per-file generator is unknown; the set came from Grok, Gemini and GPT-era tools. The manifest `rightsStatus`
requires normal channel approval; Darren approved publishing all three images on the public company website on
2026-09-29.

| File | Original | Original SHA-256 |
|---|---|---|
| `lineage-flame.webp` | `FB_IMG_1743675136191.jpg` (primary recognition anchor) | `3a235485ef08f32a761d5325c19ca63734a6ddad905b788867a3663974e4dd09` |
| `lineage-faces.webp` | `photo_6150052130748830137_y.jpg` | `883b4fbdb07b248328f12dd325b9e23b3e4bbc5d26d6d83b6fbf63cd38c1c97a` |
| `lineage-hands.webp` | `photo_6150052130748830121_y.jpg` | `8ac9d1725c76276ecfbb3150403603c66d5e0e6be092258e2d59071bc786dc61` |

## `cases/` — client work screenshots

Screenshots of the live public page `https://hopebox.com.tw/candles`, taken 2026-09-29 with headless Chrome
(desktop 1440×900; mobile 390×844 at 2×). The page belongs to the Hope Light brand; showing it as a case
follows the "published pages only" rule on the services page, and the brand owner should know before launch.

## `line/line-495farza-qr.svg`

Added 2026-09-30. Not a derivative: a QR code generated locally with `segno` 1.6.6 (error level Q, 2-module border,
dark `#1f1b18`) for the Three-Quarters LINE Official Account add-friend URL `https://line.me/R/ti/p/@495farza`
(basic ID from Three-Quarters-International `PUBLISHING/SOCIAL_MEDIA/ASSET_PROFILES/fozone/channels/line-threequarters.json`).
SHA-256 of this file: `5beb464e2f2764ea5c8d4fe4c31e63a741d8ea0d9f6687953e9cf1779211fae2`. Verified by decoding a
headless-Chrome screenshot of the rendered homepage with `zxing-cpp`, which returned exactly that URL. If the
account ever gets a Premium ID, regenerate this file and change the links in `index.html` and `services/index.html`.

## `og/og-home.jpg`

Share card composed 2026-09-29 from `lineage-flame` and the homepage headline (Noto Serif TC / Noto Sans TC).
