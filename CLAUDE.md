# Claude.md — UFO & Sci-Fi Traffic Arbitrage Site (US Market)

## Project Overview

Build a Next.js traffic arbitrage news website in the **UFO, alien, paranormal, and science fiction niche** targeting **American English-speaking audience**.
Monetization: Google AdSense → Ezoic → Mediavine (scale up).
Traffic source: Facebook Ads.
Goal: Buy traffic cheap (CPC < $0.10) → monetize at RPM $10–20+.

---

## Top Competitor Sites (Study These)

- **The Debrief** (thedebrief.org) — credible journalism, government sources, high DA
- **The Black Vault** (theblackvault.com) — FOIA documents archive, DA 69
- **Latest UFO Sightings** (latest-ufo-sightings.net) — 31K+ monthly visits
- **Open Minds** (openminds.tv) — established UFO news
- **MUFON** (mufon.com) — sighting reports database, DA 60

**Gap to exploit**: Most sites are poorly designed and slow. A fast, modern Next.js site can outrank them easily.

---

## Tech Stack

- **Framework**: Next.js 14+ App Router, TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Content**: Static data in `lib/posts.ts`
- **Images**: Unsplash (free, commercial use)
- **Analytics**: Google Analytics 4
- **Ads**: Google AdSense (launch) → Ezoic (growth) → Mediavine (50K sessions)

---

## Content Categories (in order of viral potential)

1. **Government & Pentagon Disclosure** — highest engagement, shares, comments
2. **UFO Sightings with Video/Photo** — real footage hooks
3. **Whistleblower & Alien Contact Stories** — curiosity-gap content
4. **Ancient Aliens & Historical Mysteries** — evergreen, high search volume
5. **NASA & Space Anomalies** — mainstream-friendly entry point
6. **US Local Sightings** — geo-targeted, very effective for FB ads (Area 51, Roswell, Phoenix Lights...)
7. **Sci-Fi Entertainment + Real Science** — crossover content, broad appeal
8. **Conspiracy & Declassified Documents** — FOIA hooks

---

## Article Requirements

### Length
- Minimum **1500 words** per article
- Target **2000–2500 words**

### Structure
1. **Hook headline** using formulas below
2. **Opening paragraph** — shock fact or question, 2–3 sentences
3. **Subheadings every 300 words** (H2/H3)
4. **Image every 300–400 words**
5. **"Evidence" sections** — quotes, documents, dates, locations make it feel credible
6. **Lists and numbered points** where possible
7. **Strong closing** — "What do YOU think?" style to encourage comments

### Headline Formulas (use these)
- `[Military/NASA/Pentagon] Just Confirmed Something That Changes Everything`
- `Declassified Documents Reveal What Really Happened At [Location]`
- `A [US State] Resident Filmed This — Nobody Has an Explanation`
- `[Number] Things The Government Doesn't Want You To Know About UFOs`
- `Scientists Are Baffled By This [Object/Signal/Discovery]`
- `Before It Gets Deleted: The Video That Has Everyone Talking`
- `What Happened Over [US City] Last [Month] Has Officials Scrambling`
- `The [Year] Incident That Changed How Experts Think About [Topic]`
- `Why Millions of Americans Are Convinced [Claim]`
- `[Number] UFO Sightings In America That Were Never Explained`
- `This [Government/Military] Document Was Hidden For [X] Years`
- `Ex-[NASA/Military/Government] Official Finally Tells The Truth About [Topic]`

### Content Writing Style
- Conversational, easy to read (Grade 8 level)
- Address reader directly: "you", "your"
- Use specific details: dates, locations, names, document numbers = credibility
- Include US locations: Nevada, New Mexico, Arizona, Texas, Florida, Roswell, Area 51, Pentagon
- Emotionally engaging: wonder, curiosity, mild fear, excitement
- Always hedge claims: "allegedly", "reportedly", "witnesses claim", "according to documents"
- Add disclaimer on conspiracy articles: "This article presents reported claims and is for entertainment purposes."
- American spelling: color, behavior, neighbor, center

---

## Site Structure

```
/                          → Homepage (article grid, featured posts)
/[slug]                    → Article detail page
/category/[category]       → Category archive
/about                     → About page (required for AdSense)
/privacy                   → Privacy Policy
/disclaimer                → Disclaimer
```

### Categories
- UFO Sightings
- Government Secrets
- Alien Theories
- Ancient Mysteries
- Space & NASA
- American Encounters
- Sci-Fi & Science

---

## Ad Placement Strategy

1. **Below header** — leaderboard 728x90 (desktop) / 320x50 (mobile)
2. **After 1st paragraph** — rectangle 300x250 (highest CTR)
3. **Mid-content** — rectangle 300x250 between sections
4. **Sidebar sticky** — 300x600 (desktop only)
5. **Below article** — leaderboard before related posts

**Rules:**
- Never cover content with ads
- Mobile: max 3 ads visible at once
- All ad units responsive
- Do NOT use auto-ads initially — place manually

---

## Facebook Ads Strategy

### Campaign Setup
- Objective: **Traffic** → Maximize Landing Page Views
- Budget: Start $10–20/day per ad set
- Targeting: **United States only**, ages 25–65
- Interests: UFO, Paranormal, Ancient Aliens, History Channel, NASA, Conspiracy theories, Area 51, Roswell, X-Files
- Use **Advantage+ placements**
- Install **Meta Pixel** for retargeting (retarget past visitors at $0.03–0.06 CPC)

### Ad Creative Requirements
- **Image size**: 1200x628px (feed) or 1080x1080px (square)
- **Best performing visuals**: Shaky-cam UFO footage stills, redacted document screenshots, night sky with lights
- **Headline**: Curiosity-gap + authority shock (same formulas as articles)
- **Primary text**: 1–2 sentences with FOMO hook
- **CTA**: "Learn More" or "See What They Found"
- Avoid overly polished stock photos — raw/authentic images outperform

### What Goes Viral
- Real government/military video screenshots
- "Before it's deleted" framing
- Local US sighting stories with specific states/cities
- Redacted document images
- Side-by-side comparison images (then vs now, real vs fake)

### Scaling Rules
- Kill ads with CPC above $0.30 after 3 days
- Scale winners 20% every 3 days
- Refresh creatives every 10–14 days (niche fatigues fast)

### Profitability Calculation
```
Daily spend: $20
CPC: $0.08 → 250 visitors
Pages per visit: 3 avg → 750 pageviews
RPM: $8 (Ezoic) → Revenue = $6
Margin: Negative at start — need RPM $10+ or CPC $0.06 to profit
```
Target: RPM $10+ (Ezoic optimized) and CPC below $0.08.

---

## Monetization Roadmap

| Stage | Traffic | Platform | Expected RPM |
|-------|---------|----------|-------------|
| Launch | 0–10K sessions/mo | Google AdSense | $2–4 |
| Growth | 10–50K sessions/mo | Ezoic | $4–8 |
| Scale | 50K+ sessions/mo | Mediavine | $8–15 |

Apply to Ezoic after 1 month with any traffic. Apply to Mediavine at 50K sessions/month.

---

## Technical Setup Checklist

### Before Launch
- [ ] `public/ads.txt` with correct AdSense publisher ID
- [ ] Google Analytics 4 script in `layout.tsx`
- [ ] AdSense script in `<head>` of `layout.tsx`
- [ ] Facebook Pixel in `layout.tsx`
- [ ] Favicon (`app/icon.svg`)
- [ ] Open Graph meta tags on every page (critical for Facebook share preview)
- [ ] `next/image` configured with Unsplash domain in `next.config.js`
- [ ] Sitemap (`/sitemap.xml`)
- [ ] `robots.txt`

### Performance
- Page load under 3 seconds on mobile
- All images lazy-loaded via `next/image`
- Lighthouse mobile score 90+

---

## Content File Structure

```ts
export type Post = {
  slug: string        // URL-friendly, lowercase, hyphens
  title: string       // Headline, 60-70 chars
  excerpt: string     // 150-160 chars for meta description
  content: string     // Full HTML, 1500+ words
  category: string    // One of defined categories
  image: string       // Unsplash URL
  date: string        // YYYY-MM-DD
  readTime: string    // "X min read"
}
```

---

## AdSense Compliance

- Articles must be informational/entertainment — not present conspiracy as fact
- Always use hedge words: "allegedly", "reportedly", "according to witnesses"
- Include disclaimer: "For entertainment purposes only"
- No violent or graphic content
- No copyright images — Unsplash only
- About + Privacy + Disclaimer pages required before applying

---

## Launch Sequence

1. Build site with 30+ articles across all categories
2. Deploy to Vercel + connect domain (.com preferred)
3. Submit to Google Search Console
4. Apply Google AdSense
5. Wait approval (1–2 weeks)
6. Set up ad units manually
7. Install Meta Pixel
8. Start Facebook Ads ($10–20/day)
9. Monitor CPC daily — kill above $0.30, scale below $0.10
10. After 30 days: apply Ezoic for better RPM

---

## Important Notes for Claude

- Write all articles targeting **American English** readers
- Include US locations and context where possible (states, cities, federal agencies: Pentagon, NASA, FBI, CIA)
- All monetary amounts in **USD**
- Tone: curious, slightly conspiratorial, trustworthy — like a well-researched podcast
- Always hedge claims with "reportedly", "allegedly", "witnesses say"
- Never state conspiracy theories as confirmed fact
- Each article needs a **hook in first 2 sentences** strong enough to use as Facebook ad copy
- Categories to prioritize: Government Secrets, American Encounters, UFO Sightings (highest FB engagement)
- US market = 8x larger audience than Canada = higher volume, RPM $15–25+
