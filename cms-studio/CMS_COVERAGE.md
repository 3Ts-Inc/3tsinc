# CMS coverage contract

The `threeTsSite` and `mawzunSite` singleton documents own all editorial copy, links, contact details, testimonials, cases, statistics, and replaceable content photography rendered by the two public sites.

Code continues to own presentation-only details: automatic numbering, arrows and quotation marks, menu accessibility labels, decorative map geometry, motion settings, styling, and the 3Ts logo/hero artwork descriptions.

Run `npm run audit:cms` in this directory after changing either site. The audit fails when literal editorial JSX text, image alternative text, titles, or placeholders are introduced outside the approved structural allowlist. Then run the production builds for both sites and `npm run build` here to validate the content contracts and Studio schemas.

Run `npm run verify:cms:live` while authenticated with the Sanity CLI to confirm that both live singleton documents contain every modeled content section.

Content migrations use `mergeMissing` and retain every existing Sanity value. They only populate fields that do not yet exist; the original seed script is not used for ongoing migrations because it intentionally replaces the singleton documents.
