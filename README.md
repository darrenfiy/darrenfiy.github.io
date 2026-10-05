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

- `/` - official homepage (client-first, Chinese)
- `/services/` - services, reference prices and who takes the work; the only public copy of service prices
- `/faq/` - "what is it, where is it" for the books, the Hub and its works, the protocol, research and open events; each answer
  points to that thing's own page instead of restating it. It is also the second source LINE FoZone reads
  (`data-fozone-corpus="faq-v1"`); the markup contract is Control-Room
  `PM/PROPOSALS/26021-fozone-line-knowledge-layer/D7-FAQ-CONSUMER-CONTRACT-2026-10-05.md`
- `/en/` - English homepage (still the publisher-first version)
- `/books/` - public books index
- `/books/trp-ai-first/` - nonfiction book page and EPUB download
- `/books/breathing/` - fiction book page and EPUB download
- `/books/protocol-body-autobiography/` - fiction book page and EPUB download
- `/research/` - research publication index and DOI entry
- `/products/` - product and app index
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

Images added for the homepage and services page are web derivatives; their originals and hashes are listed in
[`assets/images/SOURCES.md`](./assets/images/SOURCES.md).

`sitemap.xml` lists every public page except `/fozone-manager/` (it carries `noindex`) and `/archive/`; `robots.txt`
points search engines to it. When a page is added or its content changes, add or update its `<url>` entry;
`lastmod` follows real content changes, not header or navigation edits.

## Editorial stance

The current website direction centers on a simple mission and vision:

- Mission: let love flow
- Vision: a civilization in which love can flow

This site exists to give that stance a public form through books, protocol framing, and a stable publisher-facing surface.
