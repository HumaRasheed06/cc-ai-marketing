export const CONTACT_EMAIL = "humarasheed061@gmail.com";
export const CONTACT_HREF = "#contact";

export const site = {
  brand: {
    name: "CC AI",
    tagline:
      "AI-powered inventory, pricing, and listings for serious card resellers.",
  },

  nav: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "New · Identity-locked AI pricing",
    headlineLead: "Sell more cards.",
    headlineEmphasis: "Spend less time listing.",
    sub: "CC AI scans, grades, prices, and lists your collection across every marketplace you sell on. One dashboard. Zero spreadsheets.",
    primaryCta: { label: "Get in touch", href: CONTACT_HREF },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    note: "Talk to us — we’ll show you a live demo.",
    miniStats: [
      { value: "60s", label: "Avg scan-to-list" },
      { value: "5+", label: "Marketplaces" },
      { value: "24/7", label: "OMS automation" },
    ],
  },

  trustStrip: {
    caption: "Sell on every marketplace you already sell on.",
    marketplaces: ["eBay", "Amazon", "Walmart", "TikTok Shop", "Shopify"],
  },

  showcase: {
    eyebrow: "Built for resellers",
    title: "See what CC AI does, one card at a time.",
    subtitle:
      "From the moment you snap a photo to the moment it sells — every step in one place.",
    items: [
      {
        kicker: "Step 01 · Scan",
        title: "Snap. Identify. Grade.",
        body: "Take one photo from your phone. CC AI identifies year, set, parallel, and grades the condition before you put the card down.",
        bullets: [
          "Identity-locked card recognition",
          "Auto condition grade (Gem Mint → Poor)",
          "Bulk scan mode for stacks",
        ],
        preview: "scan",
      },
      {
        kicker: "Step 02 · Price",
        title: "Real comps. Right card.",
        body: "Every price is backed by verified sold comps that match the exact card, parallel, and grade — never a fuzzy average across the wrong cards.",
        bullets: [
          "30/60/90-day comp windows",
          "Outlier filtering",
          "Suggested floor & ceiling",
        ],
        preview: "price",
      },
      {
        kicker: "Step 03 · List & sync",
        title: "One push. Every channel.",
        body: "Push to eBay, Amazon, Walmart, TikTok Shop, and Shopify with one click. Inventory and orders stay in sync 24/7.",
        bullets: [
          "Cross-channel inventory sync",
          "Bulk repricing rules",
          "Unified order inbox",
        ],
        preview: "list",
      },
    ],
  },

  features: {
    eyebrow: "What CC AI does",
    title: "Everything a card reseller actually needs.",
    subtitle:
      "One platform for scanning, pricing, listing, and running the whole back office. No glue scripts, no spreadsheets.",
    items: [
      {
        icon: "ScanLine",
        title: "Scan & grade",
        body: "Snap a photo. Get an identity-locked match and condition grade in seconds.",
        accent: "indigo",
      },
      {
        icon: "Sparkles",
        title: "AI pricing",
        body: "Comparable-sold prices with tiered identity, condition, and recency gates.",
        accent: "violet",
      },
      {
        icon: "Boxes",
        title: "Cross-channel listings",
        body: "Push to eBay, Amazon, Walmart, and TikTok Shop from one place.",
        accent: "sky",
      },
      {
        icon: "Inbox",
        title: "Order OMS",
        body: "Orders, returns, cancellations, and disputes in a single inbox.",
        accent: "emerald",
      },
      {
        icon: "LineChart",
        title: "Real-time analytics",
        body: "Profit, sell-through, and aging inventory at a glance.",
        accent: "amber",
      },
      {
        icon: "Layers",
        title: "Built for scale",
        body: "Bulk actions, store integrations, and audit logs out of the box.",
        accent: "rose",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "From card to sold in three steps.",
    subtitle:
      "CC AI handles the work you don't want to do — so you can focus on sourcing and shipping.",
    steps: [
      {
        number: "01",
        title: "Scan",
        body: "Photograph or import your collection. CC AI identifies every card and grades its condition.",
      },
      {
        number: "02",
        title: "Price",
        body: "Each card is priced against verified sold comps — identity-first, never wrong-card matches.",
      },
      {
        number: "03",
        title: "List & sync",
        body: "Push to every marketplace, then let CC AI run the OMS — orders, returns, disputes.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Pricing that scales with you.",
    subtitle:
      "Talk to us to find the right plan. Annual billing saves about 20%.",
    tiers: [
      {
        name: "Starter",
        headline: "For new resellers",
        monthly: 29,
        annual: 23,
        cta: "Get in touch",
        href: CONTACT_HREF,
        highlighted: false,
        features: [
          "Up to 250 cards",
          "Scan, grade, and price",
          "1 marketplace integration",
          "Email support",
          "All core analytics",
        ],
      },
      {
        name: "Pro",
        headline: "For full-time resellers",
        monthly: 79,
        annual: 63,
        cta: "Get in touch",
        href: CONTACT_HREF,
        highlighted: true,
        features: [
          "Up to 5,000 cards",
          "Everything in Starter",
          "Unlimited marketplaces",
          "Bulk listing + repricing",
          "Priority support",
          "Returns & disputes",
        ],
      },
      {
        name: "Scale",
        headline: "For multi-channel operations",
        monthly: 199,
        annual: 159,
        cta: "Get in touch",
        href: CONTACT_HREF,
        highlighted: false,
        features: [
          "Unlimited cards",
          "Everything in Pro",
          "Team seats & roles",
          "Audit logs",
          "Dedicated success manager",
          "Custom integrations",
        ],
      },
    ],
    annualNote: "Annual billing saves about 20%",
  },

  testimonials: {
    eyebrow: "From the people who use it",
    title: "Resellers who can’t go back.",
    items: [
      {
        quote:
          "I used to spend three hours every Sunday listing. With CC AI I scan a stack of cards in 20 minutes and the listings are already live.",
        name: "Jordan M.",
        role: "Full-time reseller · 8 years",
      },
      {
        quote:
          "The pricing actually nails the right card. Other tools matched anything that looked similar — CC AI gets identity right first.",
        name: "Priya R.",
        role: "Sports card store owner",
      },
      {
        quote:
          "Orders, returns, disputes — all in one inbox. I finally stopped switching between four browser tabs.",
        name: "Marcus L.",
        role: "Vintage card reseller",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Frequently asked.",
    items: [
      {
        q: "How do I get started?",
        a: "Drop us a note via the contact form below. We’ll walk you through a live demo and set up your workspace.",
      },
      {
        q: "Which marketplaces does CC AI support?",
        a: "Out of the box: eBay, Amazon, Walmart, TikTok Shop, and Shopify. We add new channels regularly — if there’s one you need, let us know.",
      },
      {
        q: "How accurate is the AI pricing?",
        a: "CC AI uses an identity-first match (year, set, parallel, number) before any pricing math. We only suggest a price when comps cleanly match the exact card and condition — no fuzzy averages across the wrong card.",
      },
      {
        q: "How does the scan work?",
        a: "Take a photo from your phone or upload from a desktop scanner. CC AI identifies the card, grades the condition, and surfaces comparable sold prices in seconds.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. There are no annual lock-ins on monthly plans, and annual plans are pro-rated.",
      },
      {
        q: "Who owns my data?",
        a: "You do. Your collection, your pricing history, and your sales data are exportable at any time. We never resell aggregated user data.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Let’s talk about your collection.",
    subtitle:
      "We reply to every email within one business day. Tell us about your inventory size and which marketplaces you sell on.",
    email: CONTACT_EMAIL,
    cta: { label: "Email us", href: `mailto:${CONTACT_EMAIL}` },
    secondary: { label: "Copy email", href: "" },
  },

  ctaBand: {
    title: "Start selling smarter.",
    subtitle: "See CC AI in action. Get a live demo this week.",
    cta: { label: "Talk to us", href: CONTACT_HREF },
  },

  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "How it works", href: "#how-it-works" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
      
    ],
    copyright: `© ${new Date().getFullYear()} CC AI. All rights reserved.`,
    
  },
} as const;
