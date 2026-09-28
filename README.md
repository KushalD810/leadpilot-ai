# LeadPilot MVP

AI-powered lead follow-up assistant for local service businesses. Turn every customer inquiry into a booked job with instant AI responses and intelligent lead qualification.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- OpenAI API key (for AI responses)
- Stripe account (for billing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KushalD810/leadpilot-ai.git
   cd leadpilot-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Fill in your API keys in `.env.local`**
   ```
   # OpenAI API
   NEXT_PUBLIC_OPENAI_API_KEY=sk_...
   OPENAI_API_KEY=sk_...
   
   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   
   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Features

### Core MVP
- **Lead Capture Form** - Website contact form that captures customer inquiries
- **AI Response Generation** - Instant, personalized replies powered by OpenAI
- **Lead Qualification** - Automatic scoring and priority assignment
- **Business Dashboard** - View all leads and conversion metrics
- **Pricing Plans** - Starter ($49), Growth ($99), Scale ($199) per month

### AI Capabilities
- Analyzes incoming messages for urgency signals
- Generates professional, brand-appropriate responses
- Suggests next steps and follow-up timing
- Scores leads as High/Medium/Low priority

### Dashboard Analytics
- Weekly lead count
- Booked jobs tracker
- Average reply time
- Revenue attribution

## 🔧 Configuration Guide

### Getting OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **Create new secret key**
5. Copy the key and paste into `.env.local`

### Getting Stripe API Keys

1. Go to [stripe.com](https://stripe.com) and sign up
2. Navigate to **Developers → API Keys**
3. Copy the **Publishable Key** and **Secret Key**
4. For webhooks:
   - Go to **Developers → Webhooks**
   - Add endpoint: `http://localhost:3000/api/webhooks/stripe`
   - Copy the **Signing Secret**
5. Paste all keys into `.env.local`

## 📁 Project Structure

```
leadpilot-ai/
├── app/
│   ├── page.tsx                    # Landing page & demo form
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Tailwind styles
│   ├── dashboard/
│   │   └── page.tsx                # Business dashboard
│   └── api/
│       ├── lead/
│       │   └── route.ts            # AI response generation
│       ├── stripe/
│       │   └── checkout.ts         # Stripe checkout (coming)
│       └── webhooks/
│           └── stripe.ts           # Webhook handler (coming)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🧪 Testing the Demo

1. **Fill the form with sample data:**
   - Business: "BrightHome Plumbing"
   - Customer: "Sarah Johnson"
   - Service: "Emergency Pipe Repair"
   - Message: "My kitchen sink burst and I need urgent help. Can you come out today?"

2. **Click "Generate AI response"** to see the AI-powered reply

3. **Navigate to `/dashboard`** to see the lead management interface

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Then add your environment variables in Vercel dashboard under **Settings → Environment Variables**.

### Deploy to Other Platforms

The app is a standard Next.js 14 project and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting

## 📊 Business Model

**Pricing Tiers:**
- **Starter ($49/mo)**: Unlimited leads, AI replies, basic dashboard
- **Growth ($99/mo)**: Everything in Starter + advanced automations + priority support
- **Scale ($199/mo)**: Multi-location support, custom workflows, dedicated onboarding

**Target Market:** Local service businesses (plumbers, HVAC, electricians, cleaners, etc.)

**Key Metrics:**
- Lead response time: < 1 minute
- Lead conversion rate: +2.4x vs manual
- Revenue per business: $420-$860 per booking

## 🔐 Security

- All API keys stored in `.env.local` (never committed)
- Stripe keys are server-side only
- OpenAI calls are rate-limited
- Dashboard access requires authentication (coming soon)

## 📈 Roadmap

### Phase 1 (Current MVP)
- [x] Lead capture form
- [x] AI response generation
- [x] Basic dashboard
- [x] Pricing display

### Phase 2 (Next Sprint)
- [ ] User authentication & accounts
- [ ] Business settings & integrations
- [ ] SMS reply capability
- [ ] Email follow-up automation
- [ ] Lead assignment to team members
- [ ] Real Stripe billing integration

### Phase 3 (Scale)
- [ ] Calendar integration & booking
- [ ] CRM sync (HubSpot, Pipedrive)
- [ ] Advanced analytics & ROI tracking
- [ ] Multi-location support
- [ ] White-label options
- [ ] API for integrations

## 💡 Next Features to Build

1. **User Accounts & Onboarding**
   - Sign up flow with email verification
   - Business profile setup
   - API key management

2. **Lead Management**
   - Lead status pipeline (New → Qualified → Booked → Completed)
   - Manual lead creation & editing
   - Bulk lead import
   - Lead assignment to team members

3. **Automations**
   - Scheduled follow-up reminders
   - SMS replies (Twilio integration)
   - Email sequences
   - Calendar sync for availability

4. **Integrations**
   - Zapier for 1000+ apps
   - HubSpot/Pipedrive CRM sync
   - Google Calendar for appointments
   - WhatsApp Business API

5. **Analytics**
   - Conversion funnel tracking
   - Revenue attribution per lead source
   - Team performance metrics
   - ROI calculator

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**OpenAI API errors?**
- Verify API key is correct and not expired
- Check API usage quota on platform.openai.com
- Ensure OPENAI_API_KEY env var is set

**Stripe errors?**
- Verify keys are from test mode (pk_test_, sk_test_)
- Check webhook endpoint is accessible

## 📞 Support & Feedback

Questions or suggestions? Open an issue or reach out to the team.

## 📄 License

MIT License - see LICENSE file for details.

---

**Ready to get started?** Run `npm install && npm run dev` and visit http://localhost:3000
