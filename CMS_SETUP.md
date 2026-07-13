# Shareef CMS setup

The two websites are ready to read published content from one Shareef-owned
Sanity project. Until the project is connected, both sites use the checked-in
content and images, so ordinary deployments remain unchanged.

## What Shareef will be able to edit

The first CMS release covers the content that changes most often:

- 3Ts homepage hero copy, service summary, services, selected engagements, and
  bottom image.
- 3Ts About quotation and image.
- 3Ts Approach image and methodology services.
- 3Ts Services-page image and service cards.
- 3Ts Contact introduction, email, locations, and image.
- Mawzun homepage, Services, and Contact images.
- Mawzun Contact heading, copy, email, locations, and confidentiality notes.

Layout, navigation, styling, animation, and component structure remain in code
so an ordinary content edit cannot break the site.

## One-time account setup

These steps should be performed while Shareef is signed into his own accounts.
He should not send passwords, API tokens, or verification codes.

1. Create or sign into a Sanity account at `sanity.io`.
2. Create a project named `Shareef websites` under Shareef's organization.
3. Create two public datasets in that project:
   - `three-ts`
   - `mawzun`
4. Invite Hashem as an Administrator while setup is in progress. Access can be
   reduced later.
5. Copy the project ID from Sanity's project settings.

Public datasets are appropriate here because both websites publish this
material publicly. Do not put private client information, unpublished personal
details, or secrets in either dataset.

## Run the editing Studio locally

From the 3Ts repository:

```bash
cd cms-studio
cp .env.example .env.local
```

Set the project ID in `.env.local`:

```text
SANITY_STUDIO_PROJECT_ID=the_project_id_from_sanity
```

Then:

```bash
npm ci
npx sanity login
npm run dev
```

Open the local URL shown by Sanity. Choose either the 3Ts or Mawzun workspace,
and confirm both workspaces load.

## Import the approved site content and images

In Sanity project settings, create a temporary API token with Editor access.
Add it to `cms-studio/.env.local`:

```text
SANITY_API_WRITE_TOKEN=the_temporary_editor_token
```

Run:

```bash
npm run seed
```

The seed command uploads the optimized website images and creates the complete
3Ts and Mawzun site-content documents from the reviewed content in Git. It is
safe to rerun during initial setup because it replaces those two known
documents rather than creating duplicates. Do not rerun it after Shareef begins
editing in Sanity, because it would replace his CMS changes with the checked-in
defaults.

After the import succeeds, remove `SANITY_API_WRITE_TOKEN` from `.env.local`
and revoke the temporary token in Sanity. The deployed Studio uses Shareef's
Sanity login and does not need that token.

## Deploy the editing Studio

From `cms-studio`:

```bash
npm run deploy
```

Choose a Shareef-owned Studio hostname when prompted, for example
`shareef-sites.sanity.studio`. Bookmark that address; it is Shareef's editing
dashboard.

## Connect the 3Ts Vercel project

Add these variables to Production, Preview, and Development:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=the_project_id_from_sanity
NEXT_PUBLIC_SANITY_DATASET=three-ts
```

Redeploy after saving them.

## Connect the Mawzun Vercel project

Add these variables to Production, Preview, and Development:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=the_project_id_from_sanity
NEXT_PUBLIC_SANITY_DATASET=mawzun
```

Redeploy after saving them.

Published reads use Sanity's public CDN and do not require a read token.

## Rebuild each site after publishing

Both sites are intentionally static exports. A CMS publish must therefore
trigger a fresh Vercel build.

For each Vercel project:

1. Open **Settings → Git → Deploy Hooks**.
2. Create a hook named `Sanity publish` for `main`.
3. Copy the generated hook URL and treat it like a secret.

Then, in Sanity project settings, create two document webhooks:

### 3Ts webhook

- Dataset: `three-ts`
- Trigger: create, update, delete
- Filter: `_type == "threeTsSite"`
- URL: the 3Ts Vercel deploy hook

### Mawzun webhook

- Dataset: `mawzun`
- Trigger: create, update, delete
- Filter: `_type == "mawzunSite"`
- URL: the Mawzun Vercel deploy hook

After publishing, allow the Vercel build to finish before checking the live
site. If a deploy-hook URL is ever exposed, revoke it in Vercel and create a new
one.

## Shareef's normal editing workflow

1. Open the hosted Sanity Studio.
2. Choose 3Ts or Mawzun.
3. Open the site-content document.
4. Edit copy, reorder list items, or upload/crop an image.
5. Add meaningful alternative text to every image.
6. Click **Publish**.
7. Wait for the relevant Vercel deployment to complete.
8. Check the changed page on desktop and mobile.

If a CMS document is deleted or Sanity is temporarily unavailable during a
build, the website falls back to the reviewed content stored in Git.
