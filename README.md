# 3Ts Consulting

Production website for Shareef Khatib and 3Ts Consulting.

## Development

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Deployment

The production branch is `main`. Import this repository into Vercel using the
detected Next.js defaults.

Set:

```text
NEXT_PUBLIC_SITE_URL=https://3ts-inc.com
```
