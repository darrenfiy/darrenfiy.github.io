# darrenfiy.github.io

This repository serves as the official website for Three-Quarters International Ltd. (`three-quarters.net`).

Its current public role is no longer just a protocol landing page. It is now the outward-facing home for the publisher, the mission and vision layer, the book pages, and the public orientation entry into the Three Realms Protocol field.

Since the 2026-09 redesign (Control-Room `CR-PROP-2026-019`), the Chinese homepage speaks to clients first: the brand
"四分之三" takes service work (one-page service sites, AI content operations, small local systems), and the publisher,
books, protocol, research and products follow as the roots of that work. The company registration is suspended
(歇業); services are taken and invoiced personally by the founder, Darren, with no uniform invoice (統一發票) for now.
The site states this on the homepage and the services page. `/services/` is the single public place for service
scope and reference prices.

## Core positioning

- Official website for `three-quarters.net`
- Client-facing entrance for 四分之三's services
- Public-facing home for Three-Quarters International Ltd.
- Publisher and imprint page
- Book landing pages and direct EPUB downloads
- Protocol orientation layer for new readers
- Research publication index for externally citable artifacts
- Product layer for public app / tool entrances

## Site structure

- `/` - official homepage (client-first, Chinese). Since 2026-11-04 it also shows "我們自己每天在蓋的" (Three Realms
  Online and FoZone) and a band linking the Co Me Time joint package
- `/about/` - who we are (added 2026-11-04): one person and a team of AIs building things that run; the one rule ("AI 說的不算，
  做出來、留下紀錄的才算"); the three of us (Darren as founder/engineer/author, Alisha, FoZone), each linking to their
  `/card/`; what we build; company / association / personal work. The definitions and why they read this way are in
  Control-Room `PM/DECISIONS/2026-11-04-who-we-are-site-refresh.md`. Every page's main nav carries 關於／About
- `/services/` - services, reference prices and who takes the work; the only public copy of service prices.
  Prices were reset on 2026-11-03 against real delivered work (Control-Room `PM/DECISIONS/2026-11-03-ai-era-pricing-reset.md`).
  The one-page section also names the Co Me Time × Three-Quarters joint package, which has its own page:
- `/services/cometime/` - Co Me Time × Three-Quarters joint package (brand positioning session with Alisha + a one-page
  site), moved here from `mamasan.three-quarters.net/cometime/onepage/` on 2026-11-04 so the joint service sits on the
  company site in its style (that old URL is now a redirect). Its own `cometime.css` layers misotone-style sections on
  `styles.css`; `cometime.js` draws the three little robots from the FoZone page posts (eyes follow the pointer, tap to
  talk) and turns the hero's three-quarter arcs toward the pointer. Photos are AI-generated service stills
  (`assets/images/SOURCES.md`). When a joint or one-page price changes, change this page, both `/services/` pages and
  `mamasan.three-quarters.net/cometime/` together; the list lives in darrenfiy-studio
  `OFFERINGS/mamasan-partner-menu/cometime-joint-packages.md`
- `/faq/` - "what is it, where is it" for the books, the Hub and its works, the protocol, research and open events; each answer
  points to that thing's own page instead of restating it. It is also the second source LINE FoZone reads
  (`data-fozone-corpus="faq-v1"`); the markup contract is Control-Room
  `PM/PROPOSALS/26021-fozone-line-knowledge-layer/D7-FAQ-CONSUMER-CONTRACT-2026-10-05.md`
- `/en/` - English homepage, translated from the current client-first Chinese homepage
- `/en/services/` - English services and reference-pricing page
- `/en/about/`, `/en/products/three-realms-online/`, `/en/products/fozone/` - English versions of the pages above
- `/en/faq/` - English FAQ and public orientation page
- `/en/books/*/` - English book pages with links to the shared EPUB editions
- `/books/` - public books index
- `/books/trp-ai-first/` - nonfiction book page and EPUB download
- `/books/breathing/` - fiction book page and EPUB download
- `/books/protocol-body-autobiography/` - fiction book page and EPUB download
- `/research/` - research publication index and DOI entry
- `/products/` - product and app index
- `/products/three-realms-online/` - Three Realms Online (三界 Online), the text MUD at `https://three-realms.com/`
  (open beta; Darren decided on 2026-11-04 to show it publicly with its entrance). Scene and portrait images are the
  game's own bound assets (`assets/images/realms/`, see `SOURCES.md`). Its data handling is in `/privacy/#three-realms`
- `/products/fozone/` - FoZone (佛佐之間): FoZone's home and the council room / reply desk; described publicly, no
  sign-in entrance (only Darren uses it)
- `/products/dialogue-trainer/` - 言途 Dialogue Trainer product landing page
- `/products/fathom/` - Fathom closed beta product landing page
- `/support/` - support doorway for users, collaborators, and personal support
- `/privacy/` - public privacy policy
- `/terms/` - public terms of service
- `/publisher/` - publisher, mission, and vision page
- `/protocol/` - the door to the Three Realms Protocol: one text for three readers (the protocol site at
  `wiki.three-quarters.net` for people, GitHub as the source, MCP for AI). Since the 2026-10-01 decision the wiki *is*
  the protocol, so the site no longer lists a separate "knowledge base" / "Wiki" in navigation or footers
- `/fozone-manager/` - restricted, read-only Facebook OAuth connection for authorized administrators and Meta App Review
- `/card/alisha/`, `/card/darren/`, `/card/fozone/` - e-cards (added 2026-10-07): one phone page per person with a
  flippable card, a "save to contacts" `.vcf`, a QR code and a share button. They carry `noindex` and are not in
  the sitemap or navigation; they are handed out person to person. Shared styles and script are
  `assets/css/card.css` and `assets/js/card.js`; images and their sources are under `assets/images/card/`. The card
  says "四分之三 Three-Quarters" (the brand), not the registered company name, for the same reason as the homepage:
  the company is suspended. When a card's text changes, change its `.vcf` and regenerate its `og-*.jpg` too

Images added for the homepage and services page are web derivatives; their originals and hashes are listed in
[`assets/images/SOURCES.md`](./assets/images/SOURCES.md).

`sitemap.xml` lists every public page except `/fozone-manager/` and `/card/` (both carry `noindex`) and `/archive/`; `robots.txt`
points search engines to it. When a page is added or its content changes, add or update its `<url>` entry;
`lastmod` follows real content changes, not header or navigation edits.

## Editorial stance

The current website direction centers on a simple mission and vision:

- Mission: let love flow
- Vision: a civilization in which love can flow

This site exists to give that stance a public form through books, protocol framing, and a stable publisher-facing surface.
