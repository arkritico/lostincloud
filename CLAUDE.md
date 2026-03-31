# lostincloud

Formal mycology research laboratory website — lostincloud.pt

## Stack
- **Framework**: Astro 6 (static output, zero JS by default)
- **Styling**: CSS custom properties from tokens.css
- **i18n**: PT (default) + EN, path-prefix routing
- **Design**: "The Light Table" — warm vellum, specimen cards, botanical dividers

## Design System
- Tokens defined in `src/styles/tokens.css`
- Global styles in `src/styles/global.css`
- Fonts: Newsreader (display), Inter (body), JetBrains Mono (specimen labels)
- Colors: forest green accent on warm off-white substrate
- Never hardcode hex values — use CSS custom properties

## Content
- All content sourced from Soilvitae Business Plan (64 pages)
- Bilingual data files in `src/data/` with `{ pt, en }` fields
- Legal entity: Lost in Cloud, Lda (successor to Soilvitae, Lda)

## Relationship to rhizologic.com
- lostincloud.pt = formal, compliance, partner-facing
- rhizologic.com = immersive, Awwwards-target, innovation showcase
- Same team, same company, different audiences

## Performance
- Zero JS on all pages
- Lighthouse target: 95+
- CSS-only interactions (hover, scroll animations)

## Deploy
- Static output to Vercel with lostincloud.pt custom domain
