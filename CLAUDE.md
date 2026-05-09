# Claude.md — Traffic Arbitrage News Site (Canada Market)

## Project Overview

Build a Next.js traffic arbitrage news website targeting **Canadian English-speaking audience**.
Monetization: Google AdSense (primary) + Media.net (secondary).
Traffic source: Facebook Ads.
Goal: Buy traffic cheap (CPC $0.05–0.20) → monetize at higher RPM ($20–40+).

---

## Tech Stack

- **Framework**: Next.js 14+ App Router, TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Content**: Static data in `lib/posts.ts` (no CMS needed initially)
- **Images**: Unsplash (free, no attribution required for commercial use)
- **Analytics**: Google Analytics 4
- **Ads**: Google AdSense

---


### Content Mix
- 60% **evergreen** (timeless topics, long-tail SEO)
- 40% **trending/seasonal** (holiday tips, news hooks)

### Publishing Frequency
- Minimum: 1–2 articles/day
- Launch with 30+ articles before running ads
- Target: 100+ articles within 3 months

---

## Article Requirements

### Length
- Minimum **1500 words** per article (AdSense requirement)
- Target **2000–2500 words** for best performance

### Structure (every article must follow this)
1. **Hook headline** (see formulas below)
2. **Opening paragraph** — compelling statement or question, 2–3 sentences
3. **Subheadings every 300 words** (H2/H3)
4. **Image every 300–400 words**
5. **Numbered or bulleted lists** where possible
6. **Strong closing** with call to action or summary

### Headline Formulas (use these)
- `[Number] [Adjective] Ways To [Desired Outcome] (Without [Common Pain])`
- `Why [Common Belief] Is Wrong — And What Actually Works`
- `Doctors/Vets/Experts Are Warning [Target Audience] About This`
- `[Number] Signs You Might Have [Problem] (And What To Do)`
- `The [Number]-Minute [Solution] That [Benefit]`
- `What Happens To Your [Body/Pet/Money] When You [Action]`

### Content Writing Style
- Conversational, easy to read (Grade 8 level)
- Address reader directly: "you", "your"
- No medical/legal/financial advice — always add disclaimer
- Emotionally engaging: use storytelling, statistics, curiosity gaps
- Canadian spelling where relevant (colour, behaviour, etc.)

---

## Site Structure

```
/                          → Homepage (article grid, featured posts)
/[slug]                    → Article detail page
/category/[category]       → Category archive
/about                     → About page (required for AdSense)
/privacy                   → Privacy Policy (required for AdSense)
/disclaimer                → Disclaimer (required for AdSense)
```

### Required Pages Before AdSense Submission
- About page
- Privacy Policy (mention Google Analytics + AdSense)
- Disclaimer (especially if health/finance niche)

---

## Ad Placement Strategy

Place ads in these positions for maximum RPM:

1. **Below header** — leaderboard 728x90 (desktop) or 320x50 (mobile)
2. **After 1st paragraph** — rectangle 300x250 or 336x280 (highest CTR)
3. **Mid-content** — rectangle 300x250 between sections
4. **Sidebar sticky** — 300x250 or 300x600 (desktop only)
5. **Below article** — rectangle or leaderboard before related posts

**Rules:**
- Never place ads so they cover content
- Mobile: max 3 ads visible at once
- All ad units must be responsive
- Do NOT use auto-ads initially — place manually for better control

---

## Facebook Ads Strategy

### Campaign Setup
- Campaign objective: **Traffic** (not conversions)
- Budget: Start $20–50/day per ad set
- Targeting: **Canada only**, broad audience (let Meta algorithm optimize)
- Use **Advantage+ placements**
- Schedule: Run 24/7 unless testing time slots

### Ad Creative Requirements
- **Image size**: 1200x628px (feed) or 1080x1080px (square)
- **Headline**: Use curiosity-gap formulas (same as article headline)
- **Primary text**: 1–2 sentences, emotional hook
- **CTA button**: "Learn More" or "Read More"
- No stock-photo-looking images — use real, authentic images
- Images of people outperform product/object images

### What To Test
- 3–5 different headlines per article
- 2–3 different images per article
- Kill ads with CTR below 1.5% after 3 days
- Scale ads with CTR above 3% and positive ROAS

### Profitability Calculation
```
Daily spend: $50
CPC: $0.10 → 500 visitors
Pages per visit: 3 avg → 1500 pageviews
RPM: $25 → Revenue = $37.50
ROI: Negative (-$12.50) — need to improve
```
Target: RPM $30+ and CPC below $0.08 to be profitable.

---

## Technical Setup Checklist

### Before Launch
- [ ] `public/ads.txt` with correct AdSense publisher ID
- [ ] Google Analytics 4 script in `layout.tsx`
- [ ] AdSense script in `<head>` of `layout.tsx`
- [ ] Facebook Pixel in `layout.tsx`
- [ ] Favicon (`app/icon.svg` or `app/icon.png`)
- [ ] Open Graph meta tags on every page (for Facebook share preview)
- [ ] `next/image` configured with Unsplash domain in `next.config.js`
- [ ] Sitemap (`/sitemap.xml`) for Google Search Console
- [ ] `robots.txt`

### Performance Requirements
- Lighthouse score: 90+ on mobile
- Page load: under 3 seconds on mobile
- All images lazy-loaded via `next/image`
- No layout shift (CLS < 0.1)

---

## Content File Structure

All articles stored in `lib/posts.ts` as TypeScript array:

```ts
export type Post = {
  slug: string           // URL-friendly, lowercase, hyphens
  title: string          // Headline, 60-70 chars ideal
  excerpt: string        // 150-160 chars for meta description
  content: string        // Full HTML content, 1500+ words
  category: string       // One of the defined categories
  image: string          // Unsplash URL
  date: string           // YYYY-MM-DD format
  readTime: string       // "X min read"
}
```

---

## AdSense Compliance Rules

- Every article must have genuine, original value
- No clickbait that misleads users about the content
- No adult content, violence, hate speech
- No copyright images (use Unsplash only)
- Health articles must include disclaimer: "This article is for informational purposes only. Consult a healthcare professional."
- Finance articles must include disclaimer about not being financial advice

---

## Launch Sequence

1. Build site with 30 articles
2. Deploy to Vercel + connect domain
3. Submit to Google Search Console
4. Apply for Google AdSense
5. Wait for AdSense approval (1–2 weeks)
6. After approval: set up ad units + place in site
7. Start Facebook Ads ($20–50/day)
8. Monitor ROAS daily, kill losing ads, scale winners
9. Publish 1–2 new articles daily
10. After 30 days: apply for Media.net as secondary ad network

---

## Important Notes for Claude

- Write all articles targeting **Canadian English** readers
- Avoid US-only references (say "across North America" or use Canadian examples)
- All monetary amounts in **CAD** unless otherwise specified
- Include Canadian cities/regions when relevant (Toronto, Vancouver, Montreal)
- Health articles: reference Canadian health guidelines where applicable
- Tone: trustworthy, informative, slightly informal — like a knowledgeable friend
- Never recommend specific products by brand name without disclosure
