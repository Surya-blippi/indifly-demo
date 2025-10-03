// Navigation items
export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'vision', label: 'Our Why' },
    { id: 'incore', label: 'Our Core' },
    { id: 'contact', label: 'Contact' }
  ];
  
// Ventures data structure
export const venturesData = [
  {
    id: 'payments',
    title: 'Payments',
    icon: '💳',
    color: 'blue',
    ventures: [
      {
        id: 'indipe',
        title: 'Indipe',  // ✅ Just the name
        subtitle: 'Wealth Management',  // ✅ Just the category
        tagline: 'Seamless wealth creation and digital payments for all',  // ✅ Added tagline
        description: 'Empowering individuals and partners with secure, user-friendly financial tools. From UPI transactions to personalized wealth management, we make financial growth accessible to everyone.',
        icon: '💰',
        color: 'blue',
        features: [
          'User-friendly mutual fund investments',
          'Secure UPI transactions',
          'Seamless digital gold investments',
          'Advanced portfolio tracking tools',
          'Partner program for mutual fund distribution'
        ],
        primaryCTA: 'Install App',
        secondaryCTA: 'Explore more'
      },
      {
        id: 'indiconnect',
        title: 'Indiconnect',  // ✅ Just the name
        subtitle: 'B2B Payments',  // ✅ Just the category
        tagline: 'One-stop platform for payments, banking, and compliance — designed for SMEs and co-operatives',  // ✅ Added tagline
        description: 'Indiconnect unifies essential financial services into one seamless stack.',
        icon: '🏢',
        color: 'blue',
        features: [
          'UPI, Cards, Wallets, Netbanking',
          'Virtual accounts & payouts',
          'Automated reconciliation',
          'KYC, KYB & credit rating tools',
          'Tailored for businesses & co-operatives'
        ],
        primaryCTA: 'Install App',
        secondaryCTA: 'Explore more'
      },
      {
        id: 'indinxt',
        title: 'IndiNXT',  // ✅ Just the name
        subtitle: 'UPI Infrastructure',  // ✅ Just the category
        tagline: 'UPI infrastructure built for Bharat, ready for the world',  // ✅ Added tagline
        description: 'IndiNXT powers banks, fintechs, and enterprises with secure, scalable, and intelligent payment switching solutions.',
        icon: '⚡',
        color: 'blue',
        features: [
          'UPI Acquiring & Issuing Switch',
          'T-OTP Solutions',
          'Fraud & risk management',
          'Merchant management platform',
          'Intelligent routing & high availability'
        ],
        primaryCTA: 'Partner with us',
        secondaryCTA: 'Explore more'
      }
    ]
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    icon: '🏦',
    color: 'orange',
    ventures: [
      {
        id: 'sec2pay',
        title: 'Sec2Pay',  // ✅ Just the name
        subtitle: 'Whitelabel Fintech Infrastructure',  // ✅ Category
        tagline: 'Empowering institutions to launch fintech services under their own brand',  // ✅ Added tagline
        description: 'Sec2Pay empowers institutions to launch fintech services under their own brand — from prepaid cards to payments, lending, and more. A compliant, modular platform to scale financial inclusion.',
        icon: '🔧',
        color: 'orange',
        features: [
          'White-label payment solutions',
          'Prepaid cards & wallets',
          'Micro-ATM & AePS',
          'Lending & credit enablement',
          'Enterprise-grade compliance & security'
        ],
        primaryCTA: 'Partner with us',
        secondaryCTA: 'Explore more'
      },
      {
        id: 'indikendra',
        title: 'Indikendra',  // ✅ Just the name
        subtitle: 'Last Mile Digital Banking',  // ✅ Category
        tagline: 'Bridging financial access with last-mile digital and assisted services',  // ✅ Added tagline
        description: 'IndiKendra bridges financial access by offering last-mile digital and assisted services, ensuring inclusion across towns and villages.',
        icon: '🏪',
        color: 'orange',
        features: [
          'Banking & cash transfers in your shop',
          'Utility & bill payments made simple',
          'Train, bus & flight bookings at your doorstep',
          'Insurance services (health, vehicle, life)',
          'eGovernance support: Aadhaar, PAN, other govt services'
        ],
        primaryCTA: 'Install App',
        secondaryCTA: 'Explore more'
      }
    ]
  },
  {
    id: 'ondc-logistics',
    title: 'ONDC Logistics',
    icon: '🚚',
    color: 'green',
    ventures: [
      {
        id: 'indispeed',
        title: 'IndiSpeed',  // ✅ Just the name
        subtitle: 'Smarter Logistics for Bharat',  // ✅ Category
        tagline: 'ONDC-powered courier and delivery orchestration platform',  // ✅ Added tagline
        description: 'IndiSpeed enables D2C brands, enterprises, and sellers to ship faster, smarter, and at scale.',
        icon: '📦',
        color: 'green',
        features: [
          'API-first logistics integration',
          'Bulk dispatch via enterprise dashboard',
          'ONDC-ready multi-channel plugins',
          'Intercity & hyperlocal delivery',
          'Transparent pricing & SLA tracking'
        ],
        primaryCTA: 'Partner with us',
        secondaryCTA: 'Explore more'
      }
    ]
  }
];
  

  // Solutions data
  export const solutions = [
    {
      id: 'upi',
      title: 'UPI & Digital Payments',
      subtitle: 'Seamless Transaction Platform',
      description: 'Next-generation UPI infrastructure enabling instant, secure, and seamless digital payments across India. Built for scale with advanced fraud detection and real-time settlement.',
      icon: '💳',
      color: 'blue',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '100M+', label: 'Transactions/Month' },
        { number: '0.1s', label: 'Transaction Time' },
        { number: '99.9%', label: 'Success Rate' },
        { number: '24/7', label: 'Availability' }
      ],
      features: [
        'Multi-bank UPI integration with seamless switching',
        'Advanced fraud detection and prevention systems',
        'Real-time transaction monitoring and analytics',
        'QR code generation and scanning capabilities',
        'Merchant payment gateway solutions',
        'International payment processing support'
      ]
    },
    {
      id: 'bapa',
      title: 'BAPA Integration',
      subtitle: 'Bharat Account Aggregator',
      description: 'Comprehensive Account Aggregator platform enabling secure financial data sharing and consent management. Empowering users with control over their financial information.',
      icon: '🔗',
      color: 'green',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '50+', label: 'FIP Integrations' },
        { number: '10M+', label: 'Consents Managed' },
        { number: '100%', label: 'RBI Compliant' },
        { number: '256-bit', label: 'Encryption' }
      ],
      features: [
        'Secure consent management system',
        'Real-time financial data aggregation',
        'Multi-bank account linking capabilities',
        'Advanced data analytics and insights',
        'Regulatory compliance automation',
        'API-first architecture for easy integration'
      ]
    },
    {
      id: 'ondc',
      title: 'ONDC E-Commerce',
      subtitle: 'Open Network Commerce',
      description: 'Revolutionary e-commerce platform built on ONDC protocol. Democratizing digital commerce by connecting buyers and sellers in an open, interoperable network.',
      icon: '🛍️',
      color: 'orange',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '1000+', label: 'Active Sellers' },
        { number: '50K+', label: 'Products Listed' },
        { number: '15+', label: 'Categories' },
        { number: '500+', label: 'Pin Codes' }
      ],
      features: [
        'ONDC protocol native implementation',
        'Multi-seller marketplace capabilities',
        'Integrated logistics and fulfillment',
        'Smart recommendation algorithms',
        'Seller onboarding and management tools',
        'Customer support automation'
      ]
    },
    {
      id: 'wealth',
      title: 'Wealth Management',
      subtitle: 'Intelligent Investment Platform',
      description: 'AI-powered wealth management platform offering personalized investment strategies, portfolio management, and financial planning for the Indian market.',
      icon: '📈',
      color: 'purple',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '₹500Cr+', label: 'AUM' },
        { number: '10K+', label: 'Active Investors' },
        { number: '15%+', label: 'Avg Returns' },
        { number: '50+', label: 'Investment Options' }
      ],
      features: [
        'AI-driven portfolio optimization',
        'Goal-based investment planning',
        'Risk assessment and management',
        'Real-time market insights and alerts',
        'Tax optimization strategies',
        'Multi-asset class investments'
      ]
    }
  ];
  
  // Core products data
  // Updated Core products data - Replace the existing coreProducts in your constants.js
export const coreProducts = [
    {
      id: 'instack',
      title: 'inSTACK',
      subtitle: 'Product & Technology',
      description: 'Build, scale, and secure your tech with agile product engineering, cloud, and compliance support tailored for startups.',
      icon: '🏗️',
      color: 'purple',
      position: 'top-left'
    },
    {
      id: 'insurge',
      title: 'inSURGE',
      subtitle: 'Marketing & Growth',
      description: 'From brand positioning to performance campaigns, fuel your visibility and demand to drive sustainable growth.',
      icon: '📈',
      color: 'orange',
      position: 'top-right'
    },
    {
      id: 'insure',
      title: 'inSURE',
      subtitle: 'Legal & Compliance',
      description: 'Simplify the complex. Robust legal frameworks and compliance services to safeguard your venture at every stage.',
      icon: '🛡️',
      color: 'green',
      position: 'bottom-left'
    },
    {
      id: 'involve',
      title: 'inVOLVE',
      subtitle: 'People & Culture',
      description: 'HR that goes beyond hiring—helping you attract, nurture, and retain talent while shaping resilient company culture.',
      icon: '🤝',
      color: 'blue',
      position: 'bottom-right'
    }
  ];