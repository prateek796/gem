# Kalpa

A private gemstone house. Quiet luxury, editorial storytelling, and honest disclosure.

## Develop

Requires Node 20+.

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4. Catalogue lives in `src/content/` so a CMS can replace it later.

Razorpay charges only when `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are set. Without keys, checkout is a reservation request — never a fake payment success.
