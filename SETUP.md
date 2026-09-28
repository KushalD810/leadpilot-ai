# LeadPilot Local Development Setup

## Prerequisites Checklist

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm 9+ installed (`npm --version`)
- [ ] Git installed
- [ ] Text editor (VS Code recommended)
- [ ] OpenAI account & API key
- [ ] Stripe test account & API keys

## Step-by-Step Setup

### 1. Clone & Install (5 min)

```bash
# Clone the repo
git clone https://github.com/KushalD810/leadpilot-ai.git
cd leadpilot-ai

# Install dependencies
npm install

# Verify installation
npm list next react
```

### 2. Get API Keys (10 min)

**OpenAI:**
1. Go to https://platform.openai.com/account/api-keys
2. Create new secret key
3. Copy it (you won't see it again)

**Stripe (Test Mode):**
1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy **Publishable key** (starts with `pk_test_`)
3. Copy **Secret key** (starts with `sk_test_`)
4. For webhooks: https://dashboard.stripe.com/test/webhooks → Add endpoint
   - URL: `http://localhost:3000/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `customer.subscription.updated`
   - Copy signing secret

### 3. Configure Environment (5 min)

```bash
# Copy the example env file
cp .env.local.example .env.local

# Open .env.local in your editor and fill in:
NEXT_PUBLIC_OPENAI_API_KEY=sk_...
OPENAI_API_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server (2 min)

```bash
# Start the app
npm run dev

# You should see:
# ▲ Next.js 14.0.0
# - Local: http://localhost:3000
# - Environments: .env.local
```

### 5. Verify It Works (5 min)

- [ ] Open http://localhost:3000 in browser
- [ ] See the LeadPilot landing page
- [ ] Form is visible and inputs work
- [ ] Click "Generate AI response" (should work if OpenAI key is set)
- [ ] Navigate to /dashboard (should show demo data)
- [ ] Check browser console for errors (F12)

### 6. Test API Calls

```bash
# In another terminal, test the API
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d '{"businessName":"Test Co","customerName":"John","service":"Demo","message":"Need urgent help"}'

# Should return AI response JSON
```

## Common Issues & Fixes

### "Port 3000 already in use"
```bash
# Use a different port
npm run dev -- -p 3001
# Then visit http://localhost:3001
```

### "Cannot find module 'next'"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### "OpenAI API Error"
- Check API key is correct: https://platform.openai.com/account/api-keys
- Verify it has credits: https://platform.openai.com/account/billing/overview
- Check `.env.local` has `OPENAI_API_KEY=sk_...`

### "Stripe key errors"
- Make sure you're using TEST keys (pk_test_, sk_test_)
- Don't use live keys (pk_live_, sk_live_)
- Webhook signing secret is different from API keys

### "Page loads but form doesn't work"
- Open browser DevTools (F12)
- Check Console tab for red errors
- Check Network tab to see if API calls are succeeding

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npx prettier --write .
```

## Project Structure for Devs

```
app/
  ├── page.tsx              ← Main landing page & demo form
  ├── layout.tsx            ← Root layout wrapper
  ├── globals.css           ← Tailwind styles
  ├── dashboard/
  │   └── page.tsx          ← Lead dashboard (static for now)
  └── api/
      ├── lead/
      │   └── route.ts      ← AI response endpoint
      ├── stripe/
      │   └── checkout.ts   ← Stripe checkout (stub)
      └── webhooks/
          └── stripe.ts     ← Webhook handler (stub)
```

## Next Steps After Setup

1. **Test the demo form** - Try the AI response generator
2. **Review the code** - Look at `app/page.tsx` and `app/api/lead/route.ts`
3. **Customize** - Add your branding, adjust the prompt, add features
4. **Deploy** - Push to Vercel/hosting when ready

## Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables configured in hosting platform
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in browser
- [ ] Forms submit and APIs respond
- [ ] Analytics/tracking configured
- [ ] Custom domain set up (optional)

## Support

Stuck? Check:
1. [Next.js docs](https://nextjs.org/docs)
2. [OpenAI API docs](https://platform.openai.com/docs)
3. [Stripe docs](https://stripe.com/docs)
4. Open an issue on GitHub

---

**Everything working?** Great! You're ready to start building. 🚀
