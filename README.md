# LUX Commercial Capital — website

Marketing site for LUX Commercial Capital, a commercial real estate capital advisory and debt
placement firm. Built from the design handoff in `design_handoff_lux_website`.

The design is deliberately photo-free: type, thin rules, whitespace and two brand colours carry the
whole site. **Do not add stock photography, icon sets, gradients, or rounded cards.**

## Stack

- **Next.js 16** (App Router) with `output: 'export'` — every page is prerendered to static HTML.
- **React 19**, TypeScript.
- **Plain CSS** with custom properties in `src/app/globals.css`. No CSS framework: the design's
  values are literal (`clamp()` type scale, exact hexes, per-cell 1px rules), so tokens plus
  semantic classes reproduce them more faithfully and readably than utility classes would.
- **next/font** self-hosts Cormorant Garamond and Jost — no request ever leaves for Google Fonts.
- **Netlify Forms** takes both form submissions. There is no server and no API key to manage.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000. `npm run build` writes the static site to `out/`.

## Routes

| Route | Page |
|---|---|
| `/` | Home — 11 sections |
| `/capital-solutions` | 15 financing products in 4 families |
| `/property-types` | 15 asset classes |
| `/our-approach` | The 4-step process |
| `/about` | Firm positioning, leadership |
| `/insights` | Article index |
| `/contact` | Full transaction submission (with document upload) |
| `/submit-your-deal` | Short intake form — **this is the URL for social bios and paid traffic** |
| `/thank-you` | Where a submission lands if JavaScript is off |
| `/privacy-policy`, `/terms-of-use` | Placeholders, see below |

## Deploying to Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing
   project** → **GitHub** → pick `jcordeira/luxcommercialcapital`.
2. Netlify reads `netlify.toml`, so the build command (`npm run build`) and publish directory
   (`out`) are already filled in. Click **Deploy**.
3. The first deploy gives you a `random-name.netlify.app` URL. Check it works, then point the
   domain at it.

## Pointing luxcommercialcapital.com at the site (Porkbun)

In Netlify: **Domain management** → **Add a domain** → enter `luxcommercialcapital.com`. Netlify
will show you the records it wants. Then in Porkbun, open the domain → **DNS**:

1. Delete Porkbun's default parking records for `@` and `www` (the ALIAS and CNAME pointing at
   `pixie.porkbun.com`). Leave any MX or TXT records alone — those are your email.
2. Add these two:

| Type | Host | Answer |
|---|---|---|
| `ALIAS` | *(leave blank — this is the root)* | `apex-loadbalancer.netlify.com` |
| `CNAME` | `www` | *your Netlify subdomain, e.g.* `luxcommercial.netlify.app` |

Porkbun supports `ALIAS` at the root, which is what you want — do not use an `A` record with a
hard-coded IP.

3. **Add the domain in Netlify as well.** DNS alone is not enough: Netlify's apex load balancer
   routes by hostname, so until `luxcommercialcapital.com` is registered against this project it
   answers with a 404 and the default `*.netlify.app` certificate. Go to **Domain management** →
   **Add a domain**, enter `luxcommercialcapital.com`, and add `www.luxcommercialcapital.com` too.
4. Wait for the domain to verify (usually minutes, up to a few hours) and confirm **HTTPS** shows a
   provisioned Let's Encrypt certificate covering both names. Set `luxcommercialcapital.com` as the
   primary domain so `www` redirects to it.

To check from the outside: `https://luxcommercialcapital.com` should return the site, not a 404,
and the certificate should name the domain rather than `*.netlify.app`.

## Form submissions — set this up or you will not see leads

Both forms post to Netlify Forms. This takes **three** steps, in order, and the first one is easy
to miss.

### 1. Turn on form detection

Netlify does **not** scan for forms by default — this is opt-in per project, and until it is on,
the Forms page shows an "Enable form detection" button instead of your forms.

Go to <https://app.netlify.com/projects/luxcommercialcapital/forms> and select
**Enable form detection**.

### 2. Redeploy

Detection happens at build time, by parsing the HTML Netlify publishes. Turning it on does not
retroactively scan the deploy you already have — you have to build again.

**Deploys** → **Trigger deploy** → **Deploy site**.

When that build finishes, `transaction` and `deal-intake` appear on the Forms page. If they don't,
the forms were not found and nothing below will work — stop and check that.

### 3. Add the email notification

Go to **Project configuration** → **Notifications** → **Emails and webhooks** → **Form submission
notifications** → **Add notification** → **Email notification**, and send to
`contact@luxcommercialcapital.com`. Direct link:

<https://app.netlify.com/projects/luxcommercialcapital/configuration/notifications#form-submission-notifications>

You can point one notification at a specific form or at every verified submission on the project.
One catch-all covers both forms. Without this, submissions land in the dashboard silently and
nobody is told.

Then send a real test submission through both forms and confirm the email arrives.

Notes:

- The free tier covers **100 submissions per month** and 10MB of uploads. Watch this as traffic
  grows; the next tier up is inexpensive.
- Document uploads on `/contact` are capped at **8MB per file** by Netlify. The form tells the
  sender when a file is over that.
- Submissions contain confidential deal information. There is no third-party analytics on this
  site, and none should be added to the form pages.
- Send a test submission through both forms after the first deploy and confirm the email arrives.

## Still to supply

These are marked as placeholders in the design and remain placeholders in the build:

- **Leadership** (`/about`) — names, titles, bios. Card shells are in
  `src/app/about/page.tsx`; the section is tagged "Awaiting bios and credentials".
- **Insights** (`/insights`) — three article slots, tagged "Article slots — copy to be supplied".
- **Selected Transactions** (home, section 10) — the four amounts in
  `selectedTransactions` in `src/data/site.ts` are layout placeholders. When real closed deals
  replace them, **delete the "Layout placeholders" tag** in `src/app/page.tsx`.
- **Privacy Policy and Terms of Use** — shells only, tagged "Awaiting copy from counsel". These
  need real text from a lawyer; do not draft them yourself. Both are `noindex` until then.

## Content

Copy lives in `src/data/site.ts` — phone, email, the 15 property types, the 15 products, the four
approach steps. Editing it there updates every page that uses it.

All copy is final and client-approved unless listed above. Note the em-dash-free, declarative
voice; keep it if you add pages.

## Where the build departs from the prototype

Three deliberate changes, all noted in the code:

1. **Focus rings.** The prototype signalled focus with colour alone, which is not enough for
   keyboard users. Every interactive element gets a visible gold ring.
2. **The 1:2 splits use flexbox, not grid.** The prototype draws them as an auto-fit grid with
   `grid-column: span 2`. Below the column minimum, that span forces a track the container has no
   room for and the wide side overflows its parent. Flex basis gives the same ratio when wide and
   stacks cleanly when narrow, with no extra breakpoint. See `.split` in `globals.css`.
3. **The intake chips are real checkboxes.** The prototype's chips were presentational; here they
   submit as a `capital-need` multi-select, and a selected chip fills aubergine.

The header breakpoint is a media query at 1040px rather than the prototype's resize listener.

## Brand assets

`public/brand/` is the approved logo pack, copied from the handoff. The keystone is the site mark;
the LC seal is secondary.

One thing to know: the supplied lockup SVGs (`brand/svg/lockup-*.svg`) reference `class="word"` and
`class="sub"` on their `<text>` elements, but carry no stylesheet, so the wordmark renders unstyled
if you open them on their own. The site does not use those files — the header and footer draw the
keystone inline and set the wordmark in HTML. Before any print or merch use, a designer needs to
convert the wordmark type to outlines and add CMYK/Pantone builds; see `public/brand/README.md`.
