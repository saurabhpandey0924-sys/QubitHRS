/**
 * QUBITHRS SERVICE SPECIFICATION ENGINE
 * 10-Section Master Architecture:
 * 1. Hero - Large heading + description + CTA
 * 2. Overview - Short introduction + key metrics
 * 3. What's Included - Exactly 10 comprehensive service cards
 * 4. Technologies - Technology logo & stack grid
 * 5. Capabilities - Technical feature grid
 * 6. Why Choose Us - Enterprise client benefits section
 * 7. Development Process - 7-step chronological timeline
 * 8. Industries / Clients - Target client categories & verticals
 * 9. FAQs - Interactive accordion
 * 10. CTA - Final high-impact contact & project kickoff section
 *
 * Theme: QUBITHRS Monochromatic Obsidian Luxury (#000000, #FFFFFF, Slate #94A3B8)
 */

(function () {
  'use strict';

  // Master Service Specification Data Dictionary (All 6 Divisions)
  const SERVICES_SPEC_DATA = {
    'software-web': {
      id: 'software-web',
      divisionNumber: '01',
      badge: 'DIVISION 01 • ENTERPRISE ENGINEERING',
      title: 'Software & Custom Web Development',
      subtitle: 'We engineer high-performance web applications, enterprise portals, ERP systems, CRM solutions, and modern digital platforms tailored to your exact business operations.',
      overview: 'Our software engineering division builds enterprise-grade web applications, corporate portals, and complex business management platforms. We engineer every project with sub-second page performance, zero technical debt, rock-solid security, and scalable cloud architectures designed for rapid business growth.',
      metrics: [
        { label: 'Sprint Delivery', value: '2 - 4 Weeks' },
        { label: 'Code & IP Ownership', value: '100% Transfer' },
        { label: 'Google Lighthouse', value: '95+ Score' },
        { label: 'Post-Launch Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        {
          num: '01',
          title: 'Custom Web Applications & Client Portals',
          desc: 'Bespoke full-stack web platforms tailored to complex workflows, high-traffic operations, and seamless user experiences.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          num: '02',
          title: 'Enterprise ERP & Resource Planning',
          desc: 'Centralized institutional management software with departmental modules, inventory tracking, role-based workflows, and reporting.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
        },
        {
          num: '03',
          title: 'Custom CRM & Automated Sales Pipelines',
          desc: 'Complete lead capture systems, customer interaction history, automated sales follow-up pipelines, and deal forecasting.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
        },
        {
          num: '04',
          title: 'Headless E-Commerce Storefronts',
          desc: 'Ultra-fast storefronts with instant catalog search, 1-click checkouts, multi-currency support, and inventory sync across warehouses.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
        },
        {
          num: '05',
          title: 'Progressive Web Apps (PWA) & Offline Shell',
          desc: 'Offline-capable web applications with service workers, instant load caching, and app-like installation across desktop and mobile.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>'
        },
        {
          num: '06',
          title: 'Billing, Invoicing & Automated Payments',
          desc: 'Multi-currency Stripe, Razorpay, and PayPal gateways, automated recurring invoices, tax calculations, and payment receipts.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'
        },
        {
          num: '07',
          title: 'Role-Based Access Control (RBAC) & SSO',
          desc: 'Granular permissions, OAuth2 / SAML Single Sign-On, multi-tenant security isolation, and enterprise audit logging.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
        },
        {
          num: '08',
          title: 'Interactive Dashboards & Live Analytics',
          desc: 'High-speed business data visualizations, custom KPI metrics, real-time activity feeds, and exportable PDF/Excel reports.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>'
        },
        {
          num: '09',
          title: 'Custom REST & GraphQL API Integration',
          desc: 'Secure, high-throughput backend APIs connecting your web application to third-party services, ERPs, and mobile applications.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/></svg>'
        },
        {
          num: '10',
          title: 'Website Maintenance & Cloud Support',
          desc: 'Routine security patches, database optimizations, server performance monitoring, automated daily backups, and SLA uptime.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        }
      ],
      technologies: [
        { name: 'React 19', category: 'Frontend', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>' },
        { name: 'Next.js 15', category: 'Full-Stack', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 16.5V7.5l7 9V7.5"/></svg>' },
        { name: 'TypeScript', category: 'Language', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/><path d="M8 8h5M10.5 8v8M14 16c1 0 2-.5 2-1.5s-1-1.5-2-1.5-2-.5-2-1.5 1-1.5 2-1.5 2 .5 2 1.5"/></svg>' },
        { name: 'Node.js', category: 'Runtime', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="M12 12v10"/><path d="m12 12 9-5"/><path d="m12 12-9-5"/></svg>' },
        { name: 'Tailwind CSS', category: 'Styling', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 12c.5-2.5 2.5-4 5.5-4 4 0 5 3 7.5 3 2 0 3-1 3.5-2.5-.5 2.5-2.5 4-5.5 4-4 0-5-3-7.5-3-2 0-3 1-3.5 2.5z"/><path d="M2 18c.5-2.5 2.5-4 5.5-4 4 0 5 3 7.5 3 2 0 3-1 3.5-2.5-.5 2.5-2.5 4-5.5 4-4 0-5-3-7.5-3-2 0-3 1-3.5 2.5z"/></svg>' },
        { name: 'PostgreSQL', category: 'Database', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>' },
        { name: 'Redis', category: 'Caching', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="12 12 2 17 12 22 22 17 12 12"/></svg>' },
        { name: 'Docker', category: 'DevOps', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><rect width="4" height="3" x="16" y="9"/><rect width="4" height="3" x="7" y="5"/><rect width="4" height="3" x="13" y="5"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' },
        { name: 'AWS Cloud', category: 'Infrastructure', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'GraphQL', category: 'API Protocol', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2"/><circle cx="12" cy="2" r="1.5" fill="currentColor"/><circle cx="21" cy="7" r="1.5" fill="currentColor"/><circle cx="21" cy="17" r="1.5" fill="currentColor"/><circle cx="12" cy="22" r="1.5" fill="currentColor"/><circle cx="3" cy="17" r="1.5" fill="currentColor"/><circle cx="3" cy="7" r="1.5" fill="currentColor"/></svg>' },
        { name: 'Python', category: 'Backend/AI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c4 0 4 2 4 4v2h-4v1h6c2 0 4 2 4 4s-2 4-4 4h-2v-2h-4v-1h4V8H6C4 8 2 6 2 4s2-2 4-2h6z"/></svg>' },
        { name: 'Prisma ORM', category: 'Data Modeling', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="4 20 12 4 20 20 4 20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>' }
      ],
      capabilities: [
        {
          title: 'Sub-Second Edge Performance (95+ Core Web Vitals)',
          desc: 'Hyper-optimized bundle tree-shaking, Server-Side Rendering (SSR), and global CDN distribution guaranteeing 95+ Google Lighthouse scores.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
        },
        {
          title: 'Zero Technical Debt Architecture',
          desc: 'Clean, strictly typed TypeScript codebases with modular component boundaries and enterprise maintainability standards.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
        },
        {
          title: 'Enterprise Zero-Trust Security (OWASP Top 10)',
          desc: '100% Parameterized queries, CSRF/XSS protection, strict Content Security Policies (CSP), and secure HttpOnly cookie session management.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        },
        {
          title: 'Elastic Cloud Scalability & Microservices',
          desc: 'Containerized Docker microservices engineered to handle sudden viral traffic spikes and massive concurrent user activity without latency.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>'
        },
        {
          title: 'Real-Time Data Sync & WebSockets',
          desc: 'Instant bi-directional communication for live notifications, collaborative edits, order tracking, and live chat engines.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        },
        {
          title: 'Fluid Motion Interfaces & Museum-Grade Polish',
          desc: 'Award-winning minimalist design, effortless mobile responsiveness, tactile micro-interactions, and pristine typography.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
        }
      ],
      whyChooseUs: [
        {
          title: '100% Full IP & Source Code Ownership',
          desc: 'All source code, database architectures, repositories, and design assets are transferred entirely to your organization upon final sign-off. Zero vendor lock-in.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Direct Senior Systems Engineers',
          desc: 'You collaborate directly with senior full-stack architects who write production code daily. No junior intermediaries or outsourced account managers.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: '30-Day Post-Launch Bugfix Warranty',
          desc: 'Every project includes a comprehensive 30-day post-launch warranty covering any bugs, edge-case fixes, and server stability monitoring.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: '95+ Google Lighthouse Speed Guarantee',
          desc: 'Engineered from line one for maximum search engine indexability, rapid mobile render speeds, and stellar user conversion rates.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Daily Async Video Progress Walkthroughs',
          desc: 'Receive transparent Loom video demos and Git commit summaries at every sprint milestone, ensuring complete visibility into engineering progress.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Transparent Milestone Pricing',
          desc: 'Fixed-scope, milestone-based contracts with clearly defined acceptance criteria. No hidden billable hours or unexpected scope creep.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        }
      ],
      processSteps: [
        {
          step: '01',
          title: 'Discovery & Strategic Scoping',
          duration: 'Days 1 - 3',
          desc: 'Technical requirements intake, stakeholder alignment, user flow mapping, and architectural scoping.'
        },
        {
          step: '02',
          title: 'Architecture Blueprint & Database Design',
          duration: 'Days 4 - 6',
          desc: 'Relational database schema modeling, API contract definitions, cloud infrastructure topology, and security plan.'
        },
        {
          step: '03',
          title: 'High-Fidelity UI/UX & Design System',
          duration: 'Week 2',
          desc: 'Interactive Figma design systems, component wireframes, responsive mobile layouts, and design sign-off.'
        },
        {
          step: '04',
          title: 'Agile Full-Stack Engineering',
          duration: 'Weeks 2 - 3',
          desc: 'Sprint implementation of frontend, backend services, database migrations, third-party APIs, and daily Git commits.'
        },
        {
          step: '05',
          title: 'QA, Security & Lighthouse 95+ Audit',
          duration: 'Week 4',
          desc: 'Automated end-to-end testing, OWASP security scanning, cross-browser validation, and speed optimization.'
        },
        {
          step: '06',
          title: 'Zero-Downtime Production Deployment',
          duration: 'Week 4',
          desc: 'Production cloud provisioning, automated CI/CD pipeline setup, SSL verification, and domain mapping.'
        },
        {
          step: '07',
          title: 'Handover, 100% IP Transfer & 30-Day Warranty',
          duration: 'Post-Launch',
          desc: 'Full repository transfer, admin walkthrough session, comprehensive documentation, and 30-day active warranty.'
        }
      ],
      industries: [
        {
          title: 'FinTech & Banking',
          desc: 'Secure payment portals, automated invoice workflows, ledger synchronizations, and compliance audit logging.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'
        },
        {
          title: 'HealthTech & MedTech',
          desc: 'HIPAA-compliant patient portals, doctor appointment scheduling, telemedicine video engines, and medical record sync.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'
        },
        {
          title: 'E-Commerce & Omnichannel',
          desc: 'High-volume storefronts, multi-warehouse inventory management, 1-click checkout, and shipping carrier integrations.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
        },
        {
          title: 'B2B SaaS & Tech Startups',
          desc: 'Multi-tenant cloud applications, automated recurring billing, organization workspaces, and developer API portals.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>'
        },
        {
          title: 'Logistics & Supply Chain',
          desc: 'Real-time fleet tracking, automated warehouse dispatch dashboards, driver apps, and freight invoice management.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'
        },
        {
          title: 'Real Estate & PropTech',
          desc: 'Interactive property catalogs, map-based search filters, virtual tour embeds, and CRM lead capture.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
        },
        {
          title: 'Education & EdTech',
          desc: 'Scalable learning management systems (LMS), student portals, quiz engines, video streaming, and verifiable certificates.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'
        },
        {
          title: 'Professional Services & Legal',
          desc: 'Encrypted document vaults, e-signature integrations, client collaboration portals, and automated retainer billing.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10M7 12h10M7 17h6"/></svg>'
        }
      ],
      faqs: [
        {
          q: 'What is the typical turnaround time for a custom web development project?',
          a: 'Most web applications, portals, and MVPs take between 2 to 4 weeks depending on the complexity of features and integrations. We provide a detailed weekly sprint calendar with milestones before kickoff so you always know what to expect.'
        },
        {
          q: 'Do we receive 100% ownership of the source code and intellectual property?',
          a: 'Yes, 100%. Upon final sign-off and milestone completion, all source code, database architectures, design systems, and GitHub repositories are fully transferred to your company with zero vendor lock-in.'
        },
        {
          q: 'What modern technologies and frameworks do you use?',
          a: 'We engineer using modern, enterprise-proven stacks including React 19, Next.js 15, TypeScript, Node.js, Python, PostgreSQL, Redis, and Tailwind CSS, hosted on AWS, Cloudflare, or Vercel with zero technical debt.'
        },
        {
          q: 'How is payment and project contracting structured?',
          a: 'We work on transparent, milestone-based terms: typically 50% upfront to reserve the dedicated sprint team and 50% upon final sign-off and deployment (or 33% / 33% / 34% for larger projects). Formal contracts and GST/international invoices are provided.'
        },
        {
          q: 'Can you integrate with our existing database, ERP, or legacy backend?',
          a: 'Yes, absolutely. Our engineering squad routinely audits and integrates with existing SQL/NoSQL databases, legacy ERP systems (SAP, Odoo, custom), internal microservices, and third-party APIs with zero operational disruption.'
        },
        {
          q: 'What warranty and maintenance support is provided after launch?',
          a: 'Every project includes 30 days of complimentary post-launch support and warranty covering bug fixes and server monitoring. We also provide flexible monthly retainer packages for continuous feature development and DevOps maintenance.'
        }
      ]
    },

    'saas-cloud': {
      id: 'saas-cloud',
      divisionNumber: '02',
      badge: 'DIVISION 02 • MULTI-TENANT CLOUD SYSTEMS',
      title: 'Custom SaaS & Cloud Architecture',
      subtitle: 'Transform your software vision into an investor-ready SaaS product powered by resilient cloud microservices, multi-tenancy, and automated recurring billing.',
      overview: 'Our SaaS engineering division builds high-scale subscription platforms from initial architecture to multi-tenant production launch. We handle isolated tenant databases, automated Stripe billing, user role permissions, and resilient cloud infrastructure with 99.9% uptime SLAs.',
      metrics: [
        { label: 'MVP Sprint Delivery', value: '3 - 5 Weeks' },
        { label: 'Tenant Isolation', value: '100% RBAC' },
        { label: 'Uptime SLA Target', value: '99.99%' },
        { label: 'Warranty Coverage', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Multi-Tenant SaaS Web Applications', desc: 'Secure workspace isolation per organization with shared or dedicated tenant databases.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>' },
        { num: '02', title: 'Automated Subscription Billing (Stripe / Paddle)', desc: 'Tiered pricing, monthly/annual plans, trial periods, metered usage, and invoice webhooks.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>' },
        { num: '03', title: 'User Roles & Team Permissions (RBAC)', desc: 'Owner, Admin, Member, and Viewer permission matrices with invitation links and audit logs.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
        { num: '04', title: 'Cloud Database Modeling & Redis Caching', desc: 'PostgreSQL relational schemas with connection pooling, migrations, and sub-millisecond caching.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { num: '05', title: 'Real-Time Analytics & Admin Dashboards', desc: 'MRR tracking, churn analytics, active user telemetry, and operational system health metrics.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>' },
        { num: '06', title: 'Self-Serve Onboarding & SSO Authentication', desc: 'Frictionless signup flows, passwordless magic links, Google/GitHub OAuth, and enterprise SAML.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
        { num: '07', title: 'High-Throughput REST & GraphQL APIs', desc: 'Versioned API contracts with rate limiting, API key generation, and developer documentation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/></svg>' },
        { num: '08', title: 'Distributed Asynchronous Task Queues', desc: 'BullMQ and Redis background workers for heavy media processing, email bursts, and report exports.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>' },
        { num: '09', title: 'Automated CI/CD & Infrastructure as Code', desc: 'Zero-downtime rolling deploys via Docker, GitHub Actions, AWS ECS/Fargate, and Cloudflare.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { num: '10', title: 'Cloud Security, Daily Backups & 99.9% SLA', desc: 'Automated point-in-time database backups, firewall protection, and round-the-clock uptime monitoring.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
      ],
      technologies: [
        { name: 'Next.js 15', category: 'Full-Stack', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 16.5V7.5l7 9V7.5"/></svg>' },
        { name: 'TypeScript', category: 'Language', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/><path d="M8 8h5M10.5 8v8M14 16c1 0 2-.5 2-1.5s-1-1.5-2-1.5-2-.5-2-1.5 1-1.5 2-1.5 2 .5 2 1.5"/></svg>' },
        { name: 'Node.js', category: 'Runtime', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5v10l-9 5-9-5V7z"/></svg>' },
        { name: 'Stripe Billing', category: 'Payments', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>' },
        { name: 'PostgreSQL', category: 'Database', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { name: 'Redis', category: 'Caching', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="12 12 2 17 12 22 22 17 12 12"/></svg>' },
        { name: 'Docker', category: 'Containers', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' },
        { name: 'AWS Cloud', category: 'Cloud Host', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'BullMQ', category: 'Queue Engine', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'Tailwind CSS', category: 'Styling', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 12c.5-2.5 2.5-4 5.5-4 4 0 5 3 7.5 3 2 0 3-1 3.5-2.5z"/></svg>' },
        { name: 'Prisma ORM', category: 'Data Modeling', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="4 20 12 4 20 20 4 20"/></svg>' },
        { name: 'GitHub CI/CD', category: 'DevOps', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' }
      ],
      capabilities: [
        { title: 'Strict Multi-Tenant Workspace Isolation', desc: 'Indexed organization queries ensuring zero cross-tenant data leaks and enterprise compliance.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { title: 'Resilient Idempotent Financial Billing', desc: 'Stripe webhook signature validation, idempotency keys, and automated dunning workflows.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>' },
        { title: 'Zero N+1 Database Query Performance', desc: 'Prisma and Drizzle query batching with PgBouncer connection pooling for sub-50ms API responses.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { title: 'Elastic Horizontal Cloud Scaling', desc: 'Auto-scaling AWS Fargate containers that automatically expand and shrink based on traffic load.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'High-Volume Async Worker Pipelines', desc: 'Redis-backed distributed background workers handling emails, webhooks, and complex computations.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { title: 'Enterprise SSO & Audit Logging', desc: 'SAML 2.0, Okta, and Google Workspace integrations with tamper-proof administrative audit logs.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' }
      ],
      whyChooseUs: [
        { title: '100% Source Code & Database Ownership', desc: 'All GitHub repos, infrastructure definitions, and database schemas belong to you. Zero vendor lock-in.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Direct Senior SaaS Architects', desc: 'Work directly with builders who have launched venture-backed SaaS platforms and scaled to millions of ARR.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: '30-Day Post-Launch Bugfix Warranty', desc: 'Full warranty coverage after production release to guarantee your early subscribers encounter zero issues.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Investor-Ready Technical Foundation', desc: 'Clean architecture and documented code that passes institutional due diligence and security audits effortlessly.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Daily Async Loom Demos & Git Commits', desc: 'Watch working software emerge every 48 hours with direct Loom walkthroughs from the engineering team.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Fixed-Price Milestones with Zero Hidden Fees', desc: 'Strict milestone scopes with defined deliverable acceptance so your budget remains completely predictable.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' }
      ],
      processSteps: [
        { step: '01', title: 'Product & SaaS Architecture Scoping', duration: 'Week 1', desc: 'Tenant isolation strategy, billing tier definition, core user workflows, and tech stack blueprint.' },
        { step: '02', title: 'Data Schema & Multi-Tenant Blueprint', duration: 'Week 1', desc: 'PostgreSQL database modeling, indexing strategy, Stripe product mapping, and security rules.' },
        { step: '03', title: 'UI/UX Design & Dashboard Prototype', duration: 'Week 2', desc: 'Clean obsidian user dashboard, admin portal, billing management, and interactive prototype.' },
        { step: '04', title: 'Agile Full-Stack SaaS Sprint', duration: 'Weeks 2 - 4', desc: 'Core product features, Stripe webhooks, user auth, team management, and background queues.' },
        { step: '05', title: 'Security QA, Pen-Testing & Billing Audit', duration: 'Week 5', desc: 'Comprehensive testing of payment edge-cases, tenant boundary checks, and load stress testing.' },
        { step: '06', title: 'Production Cloud Launch & Custom Domains', duration: 'Week 5', desc: 'Zero-downtime AWS/Vercel deployment, custom tenant subdomains, and automated backups.' },
        { step: '07', title: 'Handover & 30-Day Active Warranty', duration: 'Post-Launch', desc: '100% IP transfer, admin training walkthrough, documentation handover, and active bugfix support.' }
      ],
      industries: [
        { title: 'B2B Workflow & Productivity SaaS', desc: 'Project collaboration, task management, and automated organizational reporting platforms.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'FinTech & Billing Platforms', desc: 'Subscription analytics, invoice factoring, expense tracking, and payroll platforms.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'HealthTech & Telemedicine', desc: 'HIPAA-compliant EHR platforms, clinic management, and doctor subscription portals.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'EdTech & Learning Portals', desc: 'Cohort-based course software, automated grading, and subscription video academies.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>' },
        { title: 'Real Estate & Property SaaS', desc: 'Tenant management, rent collection, digital lease signing, and maintenance ticketing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5z"/></svg>' },
        { title: 'E-Commerce Analytics Tools', desc: 'Amazon/Shopify store optimization, ad spend tracking, and automated inventory alerts.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'Legal & Compliance Software', desc: 'Contract analysis, automated NDA generators, and secure client document portals.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'HR & Recruitment Portals', desc: 'Applicant tracking systems (ATS), employee onboarding workflows, and performance reviews.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' }
      ],
      faqs: [
        { q: 'How long does it take to launch a complete SaaS MVP?', a: 'A full-featured SaaS MVP with multi-tenancy, Stripe billing, and user auth typically takes between 3 to 5 weeks from kickoff to production.' },
        { q: 'How do you prevent data leaks between different organization tenants?', a: 'Every query is enforced with strict tenant ID scoping at the database and ORM level, backed by foreign key constraints and automated security regression tests.' },
        { q: 'Which payment processors do you support for SaaS billing?', a: 'We primarily implement Stripe Billing (Checkout, Customer Portal, Webhooks), but also support Paddle, LemonSqueezy, and Razorpay for global multi-currency compliance.' },
        { q: 'Can this architecture scale to thousands of paying subscribers?', a: 'Yes. Our architectures use containerized microservices, connection-pooled databases, Redis caching, and edge CDN distribution capable of handling tens of thousands of concurrent active users.' },
        { q: 'Do we own the full source code and cloud infrastructure setup?', a: '100% yes. All code repositories, AWS/Vercel configurations, Dockerfiles, and database schemas are transferred directly to your organization.' },
        { q: 'What happens if we need new features or DevOps support after launch?', a: 'We provide 30 days of warranty support post-launch and offer flexible monthly engineering retainer packages for ongoing sprint features and 24/7 cloud management.' }
      ]
    },

    'ai-automation': {
      id: 'ai-automation',
      divisionNumber: '03',
      badge: 'DIVISION 03 • INTELLIGENT AUTOMATION',
      title: 'AI Agents & Workflow Automation',
      subtitle: 'Deploy intelligent autonomous AI agents, enterprise RAG pipelines, and automated business workflows that eliminate manual friction and multiply team output.',
      overview: 'Our AI engineering division designs and deploys custom AI copilots, autonomous multi-step agents, and enterprise document extraction pipelines. We integrate Large Language Models (LLMs) securely with your proprietary business data, eliminating repetitive work and delivering measurable ROI.',
      metrics: [
        { label: 'Sprint Deployment', value: '2 - 3 Weeks' },
        { label: 'Automation Accuracy', value: '99.5%+' },
        { label: 'Data Privacy', value: '100% Zero-Leak' },
        { label: 'Active Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Custom Autonomous AI Agents & Copilots', desc: 'Goal-driven AI agents capable of multi-step reasoning, external tool execution, and self-correction.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { num: '02', title: 'Enterprise RAG & Internal Knowledge Bots', desc: 'Semantic search over your proprietary documents, PDFs, manuals, and databases with verifiable citations.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' },
        { num: '03', title: 'Intelligent PDF & Invoice Extraction', desc: 'Automated document OCR, structured data parsing, and zero-error accounting software synchronization.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { num: '04', title: 'WhatsApp, Telegram & Web Auto-Responders', desc: '24/7 conversational customer service bots that qualify leads, answer FAQs, and book calendar appointments.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
        { num: '05', title: 'Automated Lead Qualification & CRM Sync', desc: 'Instant enrichment of incoming website leads, scoring by buyer intent, and real-time HubSpot/Salesforce routing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' },
        { num: '06', title: 'Real-Time Streaming Conversational Interfaces', desc: 'Server-Sent Events (SSE) and WebSocket chat engines with ultra-low latency and markdown rendering.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { num: '07', title: 'Custom LLM Fine-Tuning & Prompt Hardening', desc: 'Tailored system prompts, anti-jailbreak guardrails, and Zod schema runtime output validation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { num: '08', title: 'Multi-Tool Orchestration & Webhooks', desc: 'Connecting AI agents directly to Gmail, Slack, Stripe, Google Sheets, databases, and custom REST endpoints.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/></svg>' },
        { num: '09', title: 'Voice AI & Real-Time Audio Transcription', desc: 'Whisper speech-to-text, ultra-realistic voice synthesis (ElevenLabs), and conversational phone agents.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/></svg>' },
        { num: '10', title: 'AI Observability, Guardrails & Cost Control', desc: 'Token usage tracking, automated retry fallbacks, latency optimization, and strict content safety filtering.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/></svg>' }
      ],
      technologies: [
        { name: 'Python', category: 'AI Core', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c4 0 4 2 4 4v2h-4v1h6c2 0 4 2 4 4s-2 4-4 4h-2v-2h-4v-1h4V8H6C4 8 2 6 2 4s2-2 4-2h6z"/></svg>' },
        { name: 'LangChain', category: 'Agent Framework', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><line x1="6" x2="18" y1="9" y2="15"/></svg>' },
        { name: 'OpenAI / Claude', category: 'Foundation LLM', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { name: 'Pinecone / PgVector', category: 'Vector DB', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { name: 'FastAPI', category: 'High-Speed API', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { name: 'Next.js 15', category: 'Chat UI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 16.5V7.5l7 9V7.5"/></svg>' },
        { name: 'Redis', category: 'Memory Cache', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'Docker', category: 'Deployment', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' },
        { name: 'TypeScript', category: 'Validation', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/></svg>' },
        { name: 'Celery', category: 'Async Tasks', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'PostgreSQL', category: 'Relational Store', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' },
        { name: 'WebSockets', category: 'Streaming', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' }
      ],
      capabilities: [
        { title: 'Zero Data Training Leakage', desc: 'Enterprise zero-retention API contracts ensuring your internal company data is never used to train public models.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { title: 'Hybrid RAG (Vector + BM25 Lexical)', desc: 'Dense vector search combined with keyword matching and Reciprocal Rank Fusion for high-accuracy retrieval.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>' },
        { title: 'Strict Schema Guardrails & Zod Validation', desc: 'Runtime validation ensuring LLM outputs conform 100% to JSON specifications without hallucinated keys.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
        { title: 'Sliding-Window Conversational Memory', desc: 'Intelligent rolling context compaction that preserves conversation history without blowing token limits.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
        { title: 'Asynchronous Backpressure Streaming', desc: 'Server-Sent Events streaming with automatic token backpressure handling and client abort controllers.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { title: 'Multi-Tool Execution Security', desc: 'Sandboxed execution environments for external function calling with strict permission verification.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' }
      ],
      whyChooseUs: [
        { title: '100% IP & Custom Code Ownership', desc: 'All prompt pipelines, agent code, custom models, and database vector tables belong exclusively to you.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Enterprise Data Privacy & Security', desc: 'We build with SOC2-compliant enterprise endpoints and zero-data retention agreements.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: '30-Day Post-Launch Warranty', desc: 'Comprehensive post-deployment warranty ensuring high uptime, prompt tuning, and zero hallucinations.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'High Token Efficiency & Cost Optimization', desc: 'Engineered with intelligent caching and model routing to slash recurring API costs by up to 70%.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Daily Video Progress Updates', desc: 'Loom walkthroughs demonstrating live prompt test results, latency benchmarks, and feature progress.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Fixed Milestone Pricing', desc: 'Clear deliverables and fixed fees so you can implement advanced AI without open-ended hourly billing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' }
      ],
      processSteps: [
        { step: '01', title: 'AI Feasibility & Data Audit', duration: 'Days 1 - 3', desc: 'Analyzing internal business workflows, document formats, and identifying high-ROI automation targets.' },
        { step: '02', title: 'Architecture Blueprint & Model Selection', duration: 'Days 4 - 6', desc: 'Choosing optimal LLM models, vector database schemas, RAG retrieval strategies, and guardrails.' },
        { step: '03', title: 'Prompt Hardening & Prototype Testing', duration: 'Week 2', desc: 'Engineering robust prompts, few-shot examples, JSON output constraints, and accuracy benchmarks.' },
        { step: '04', title: 'Agent Integration & Tool Connectors', duration: 'Weeks 2 - 3', desc: 'Connecting agents to CRM systems, databases, WhatsApp/email APIs, and building streaming UIs.' },
        { step: '05', title: 'Safety, Hallucination & Pen-Testing Audit', duration: 'Week 3', desc: 'Stress-testing edge cases, prompt injection defense, and verifying 99.5%+ extraction accuracy.' },
        { step: '06', title: 'Production Cloud Deployment & Monitoring', duration: 'Week 4', desc: 'Deploying containerized microservices with token observability, error fallbacks, and alerts.' },
        { step: '07', title: 'Handover & 30-Day Active Warranty', duration: 'Post-Launch', desc: 'Complete code and prompt repository transfer, staff training, and 30-day active warranty support.' }
      ],
      industries: [
        { title: 'Customer Support & Helpdesks', desc: 'Resolving 80%+ of incoming tier-1 support queries instantly with verified knowledge citations.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14z"/></svg>' },
        { title: 'Legal & Compliance Teams', desc: 'Automated contract review, discrepancy detection, NDA analysis, and regulatory cross-checks.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'Real Estate & Brokerages', desc: '24/7 WhatsApp lead qualification, property matching, and automated showing bookings.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5z"/></svg>' },
        { title: 'Finance & Accounting Firms', desc: 'Automated invoice data extraction, receipt OCR, expense reconciliation, and audit logs.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'Healthcare & Clinical Admin', desc: 'Patient intake note summarization, clinical document sorting, and automated appointment reminders.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'E-Commerce & Retail Brands', desc: 'Personalized product recommendation copilots, dynamic FAQ bots, and review sentiment analytics.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'Sales & Business Development', desc: 'Automated outbound lead enrichment, hyper-personalized email drafts, and CRM pipeline updates.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' },
        { title: 'Logistics & Dispatch Centers', desc: 'Automated driver check-ins, bill of lading parsing, and freight update notifications.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'Will our proprietary company data be used to train public AI models?', a: 'No, absolutely not. We use enterprise zero-data-retention APIs and self-hosted vector databases where your data remains strictly confidential and encrypted.' },
        { q: 'How do you prevent the AI agent from hallucinating false information?', a: 'We employ rigorous RAG (Retrieval-Augmented Generation) pipelines with citation verification, system prompt hardening, and temperature clamping to ensure outputs only draw from verified source data.' },
        { q: 'Can the AI agent take real actions in our CRM or database?', a: 'Yes. Through secure function calling and webhooks, our agents can create CRM records, send calendar invites, trigger emails, or update database records with human-in-the-loop safeguards.' },
        { q: 'How long does an AI workflow deployment take?', a: 'Most custom AI assistants, document pipelines, and workflow automations take between 2 to 3 weeks from kickoff to live deployment.' },
        { q: 'What recurring costs are involved after deployment?', a: 'You only pay for your own direct LLM API usage (e.g. OpenAI or Anthropic tokens) and standard cloud hosting. We optimize prompts to keep token costs minimal.' },
        { q: 'Do you offer ongoing prompt maintenance and tuning?', a: 'Yes. Every project includes a 30-day post-launch warranty, and we offer monthly retainer packages for continuous accuracy monitoring and new tool integrations.' }
      ]
    },

    'mobile-apps': {
      id: 'mobile-apps',
      divisionNumber: '04',
      badge: 'DIVISION 04 • CROSS-PLATFORM MOBILE',
      title: 'Mobile App Development (iOS & Android)',
      subtitle: 'Deliver buttery-smooth 60/120 FPS mobile experiences on iOS and Android with modern React Native and Flutter architectures built to scale.',
      overview: 'Our mobile engineering division develops high-performance native and cross-platform applications for iPhone, iPad, and Android devices. We craft fluid touch gestures, offline-first data synchronization, biometric authentication, and handle complete publishing to the Apple App Store and Google Play Store.',
      metrics: [
        { label: 'Sprint Delivery', value: '3 - 6 Weeks' },
        { label: 'FPS Performance', value: '60/120 FPS' },
        { label: 'Store Publishing', value: '100% Guaranteed' },
        { label: 'Post-Launch Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Cross-Platform iOS & Android Apps', desc: 'Single unified codebase built with React Native or Flutter delivering native platform speeds.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>' },
        { num: '02', title: 'Offline-First Data Storage & Sync', desc: 'SQLite and WatermelonDB local caching ensuring seamless app functionality without internet connectivity.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { num: '03', title: 'Biometric Login (FaceID & Fingerprint)', desc: 'Secure hardware-level biometric authentication via iOS Keychain and Android KeyStore.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
        { num: '04', title: 'Push Notifications & In-App Alerts', desc: 'Targeted push notifications via Firebase Cloud Messaging (FCM) and Apple APNs with deep linking.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>' },
        { num: '05', title: 'In-App Purchases & Subscriptions', desc: 'RevenueCat, Apple StoreKit 2, and Google Play Billing integration with receipt validation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>' },
        { num: '06', title: 'Camera, GPS & Hardware Device Integration', desc: 'Native access to camera barcode scanning, real-time GPS geolocation, accelerometer, and bluetooth.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>' },
        { num: '07', title: 'Fluid 120 FPS UI Gestures & Motion', desc: 'Reanimated 3 worklets running directly on the UI thread for buttery-smooth scrolling and transitions.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { num: '08', title: 'Real-Time Chat & Media Messaging', desc: 'In-app chat, media uploads, typing indicators, read receipts, and WebRTC live calling capabilities.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
        { num: '09', title: 'App Store & Google Play Publishing', desc: 'End-to-end management of Apple review guidelines, Google Play policies, screenshots, and release tracks.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
        { num: '10', title: 'Crash Analytics & Performance Monitoring', desc: 'Sentry crash reporting, performance tracing, user session replays, and OTA updates.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
      ],
      technologies: [
        { name: 'React Native', category: 'Cross-Platform', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>' },
        { name: 'Flutter', category: 'Cross-Platform', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="14 2 2 14 6 18 22 2 14 2"/><polygon points="14 14 9 19 14 24 22 16 14 14"/></svg>' },
        { name: 'TypeScript', category: 'Language', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/></svg>' },
        { name: 'Expo SDK', category: 'Toolchain', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { name: 'iOS Swift', category: 'Native Bridge', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/></svg>' },
        { name: 'Kotlin', category: 'Native Bridge', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="2 2 12 2 2 12 2 2"/><polygon points="2 12 12 2 22 2 2 22 2 12"/></svg>' },
        { name: 'SQLite', category: 'Local Storage', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' },
        { name: 'Firebase', category: 'Push & Auth', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m4 15 8-12 3 6-4 3 6 4-13-1z"/></svg>' },
        { name: 'RevenueCat', category: 'In-App Billing', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { name: 'Reanimated 3', category: 'Gestures', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { name: 'Node.js', category: 'Backend API', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5v10l-9 5-9-5V7z"/></svg>' },
        { name: 'Sentry', category: 'Monitoring', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' }
      ],
      capabilities: [
        { title: 'Zero Frame Drop 60/120 FPS UI Threading', desc: 'UI worklets executed directly on native threads preventing UI freezes during heavy data loading.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { title: 'Flawless Offline Operation & Sync', desc: 'Local database writes immediately queued and synchronized in the background upon network reconnection.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' },
        { title: 'Hardware-Level Biometric Protection', desc: 'FaceID, TouchID, and Android Biometrics integrated via encrypted device hardware security enclaves.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' },
        { title: '100% App Store Acceptance Track Record', desc: 'Strict compliance with Apple App Store Review Guidelines and Google Play developer policies.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
        { title: 'Over-The-Air (OTA) Instant Bug Fixes', desc: 'Deploy urgent bug fixes and copy updates directly to user devices without waiting for App Store approval.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>' },
        { title: 'Deep Linking & Universal Link Routing', desc: 'Seamlessly transition users from marketing emails and web links directly into targeted in-app screens.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/></svg>' }
      ],
      whyChooseUs: [
        { title: '100% Source Code & Build Ownership', desc: 'Complete ownership of all native repositories, signing certificates, and App Store Connect listings.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Guaranteed Store Approval', desc: 'We take full responsibility for resolving any Apple or Google review feedback until your app is live.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: '30-Day Post-Launch Warranty', desc: 'Full warranty covering any edge-case device crashes, screen resolution bugs, or OS update compatibility.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Single Codebase, Native Speed', desc: 'React Native / Flutter reduces your engineering costs and delivery timeline by 50% without sacrificing speed.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Weekly TestFlight & APK Builds', desc: 'Install and test live builds directly on your own iPhone or Android phone every week during development.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Transparent Milestone Contracts', desc: 'Clear deliverables per sprint with no surprise fees or open-ended billable hours.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' }
      ],
      processSteps: [
        { step: '01', title: 'Mobile Strategy & User Flows', duration: 'Week 1', desc: 'Screen journey mapping, offline architecture requirements, and backend API integration plan.' },
        { step: '02', title: 'Interactive Figma Mobile Prototype', duration: 'Week 1', desc: 'Native iOS and Android UI design tokens, navigation stacks, gesture models, and client approval.' },
        { step: '03', title: 'Core Navigation & Offline Store Setup', duration: 'Week 2', desc: 'Project scaffolding, navigation state machines, and SQLite offline synchronization setup.' },
        { step: '04', title: 'Feature Engineering & Hardware Bridge', duration: 'Weeks 2 - 4', desc: 'Camera, push notifications, biometric auth, in-app purchases, and backend API integration.' },
        { step: '05', title: 'Cross-Device QA & Battery/Memory Audit', duration: 'Week 5', desc: 'Testing across various iPhone, iPad, Samsung, and Pixel screens for zero frame drops and low battery drain.' },
        { step: '06', title: 'App Store & Google Play Publishing', duration: 'Week 5', desc: 'Preparing App Store listings, metadata, privacy disclosures, and managing store review submissions.' },
        { step: '07', title: 'Handover & 30-Day Active Warranty', duration: 'Post-Launch', desc: '100% code and certificate handover, crash telemetry setup, and 30-day post-launch warranty support.' }
      ],
      industries: [
        { title: 'FinTech & Mobile Wallets', desc: 'Biometric authorization, instant peer-to-peer transfers, and secure bank card tokenization.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'E-Commerce & Quick Delivery', desc: '1-click Apple Pay/Google Pay checkout, live courier tracking, and push notification re-engagement.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'Fitness, Health & Wellness', desc: 'Apple HealthKit and Google Fit synchronization, workout timers, and offline routine tracking.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'Field Service & Logistics', desc: 'Offline technician dispatch, digital signature capture, photo verification, and barcode scanning.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' },
        { title: 'Real Estate & Field Agents', desc: 'On-the-go property CRM, dynamic mapping, client calling integration, and document viewing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5z"/></svg>' },
        { title: 'Social & Community Platforms', desc: 'Real-time media feeds, live messaging, photo filters, and custom profile curation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { title: 'EdTech & Student Learning', desc: 'Bite-sized mobile quizzes, offline lesson video playback, and streak gamification.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>' },
        { title: 'Enterprise Internal Tools', desc: 'Employee attendance geofencing, expense claim submissions, and executive approval dashboards.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'Should we build with React Native, Flutter, or native Swift/Kotlin?', a: 'For 95% of businesses, React Native or Flutter is the optimal choice: you get native 60/120 FPS performance, single codebase maintenance for both iOS and Android, and 50% faster time-to-market.' },
        { q: 'Do you manage the entire Apple App Store and Google Play Store submission?', a: 'Yes, absolutely. We handle all developer portal provisioning, app certificates, screenshot preparations, privacy disclosures, and resolve any review notes until your app is approved.' },
        { q: 'Can the app function without an active internet connection?', a: 'Yes. We architect with offline-first local databases (SQLite / MMKV) so users can browse data, submit forms, or perform actions offline, which automatically sync upon reconnection.' },
        { q: 'How long does a cross-platform mobile app take to build?', a: 'A complete production mobile application typically takes between 3 to 6 weeks depending on hardware integrations, backend API readiness, and store approval.' },
        { q: 'Do we own the source code, App Store accounts, and signing keys?', a: 'Yes, 100%. All source repositories, signing keys, and App Store / Google Play listings belong entirely to your company.' },
        { q: 'What post-launch support and warranty is included?', a: 'We include a 30-day post-launch warranty covering any unforeseen bugs or device OS updates, along with ongoing monthly maintenance packages.' }
      ]
    },

    'api-integration': {
      id: 'api-integration',
      divisionNumber: '05',
      badge: 'DIVISION 05 • DISTRIBUTED DATA FLOWS',
      title: 'API Engineering & System Integration',
      subtitle: 'Connect disparate enterprise software, payment gateways, ERPs, and third-party webhooks with rock-solid, high-throughput API architectures.',
      overview: 'Our API and systems integration division architects resilient backend gateways, microservice fabrics, and real-time webhook pipelines. We eliminate manual data entry between your sales, inventory, and accounting platforms while guaranteeing sub-millisecond response times.',
      metrics: [
        { label: 'Integration Sprint', value: '2 - 3 Weeks' },
        { label: 'API Uptime Target', value: '99.99%' },
        { label: 'Idempotency Guarantee', value: '100% Zero-Duplicate' },
        { label: 'Active Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Custom REST & GraphQL API Architecture', desc: 'Contract-first OpenAPI 3.1 specifications with runtime schema validation and sub-50ms latency.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/></svg>' },
        { num: '02', title: 'Payment Gateway Integrations (Stripe & Razorpay)', desc: 'Secure payment intent flows, multi-currency processing, refund automation, and webhook handlers.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { num: '03', title: 'Enterprise ERP & CRM Connectors', desc: 'Real-time synchronization between Salesforce, HubSpot, SAP, Odoo, Zoho, and custom databases.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' },
        { num: '04', title: 'Resilient Webhook Processing & Queues', desc: 'HMAC-SHA256 signature verification, exponential retry backoff, and dead-letter queues.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { num: '05', title: 'Real-Time WebSockets & Event Streaming', desc: 'Kafka, RabbitMQ, and Redis pub/sub pipelines delivering instant updates to thousands of clients.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { num: '06', title: 'Third-Party Logistics & Shipping Integrations', desc: 'FedEx, DHL, Shiprocket, and custom freight tracking APIs with automated label generation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' },
        { num: '07', title: 'Distributed Locking & Idempotent Transactions', desc: 'Redis SETNX distributed locks preventing duplicate transactions, billing overcharges, or inventory race conditions.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' },
        { num: '08', title: 'OpenAPI 3.1 & Interactive Swagger Portals', desc: 'Auto-generated interactive API documentation, SDKs, and Postman collections for your developer partners.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' },
        { num: '09', title: 'API Gateway Rate Limiting & Threat Shield', desc: 'Sliding-window IP rate limiting, DDoS mitigation, API key rotation, and automated abuse blocking.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { num: '10', title: 'Legacy Database Modernization & ETL Migration', desc: 'Automated extract, transform, and load (ETL) pipelines migrating legacy SQL/Oracle data without downtime.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' }
      ],
      technologies: [
        { name: 'Node.js', category: 'Backend Engine', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5v10l-9 5-9-5V7z"/></svg>' },
        { name: 'TypeScript', category: 'Contracts', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/></svg>' },
        { name: 'FastAPI / Python', category: 'Microservices', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { name: 'GraphQL', category: 'Query Protocol', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2"/></svg>' },
        { name: 'PostgreSQL', category: 'Database', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' },
        { name: 'Redis', category: 'Pub/Sub & Locks', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'Docker', category: 'Containers', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/></svg>' },
        { name: 'RabbitMQ / Kafka', category: 'Event Bus', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'AWS Lambda / ECS', category: 'Serverless', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'Zod Validation', category: 'Runtime Schemas', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/></svg>' },
        { name: 'Stripe API', category: 'Payments', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { name: 'Postman / OpenAPI', category: 'Documentation', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' }
      ],
      capabilities: [
        { title: 'Strict Idempotency Key Processing', desc: 'Guarantees that network retries never trigger duplicate billing, payments, or ledger writes.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' },
        { title: 'Sub-50ms Median API Latency', desc: 'Asynchronous event loops, connection pooling, and multi-tier Redis caching for blazing performance.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { title: 'Circuit Breaker Fault Tolerance', desc: 'Automatic degradation and fallback handlers preventing third-party vendor outages from halting your system.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { title: 'HMAC-SHA256 Webhook Verification', desc: 'Cryptographically validating payload origins to eliminate replay attacks and spoofed webhook triggers.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'Cursor-Based Keyset Pagination', desc: 'High-speed pagination for millions of records that never degrades in performance like legacy OFFSET.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/></svg>' },
        { title: 'Complete OpenAPI 3.1 & SDK Exports', desc: 'Standardized contracts with client code generation in TypeScript, Python, and Go.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' }
      ],
      whyChooseUs: [
        { title: '100% Full IP & Code Ownership', desc: 'All API middleware, integration scripts, database schemas, and documentation are transferred to you.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Zero Data Loss Guarantee', desc: 'We implement transactional writes and dead-letter queues to guarantee that not a single record or event is ever lost.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: '30-Day Post-Launch Warranty', desc: 'Complimentary warranty covering API maintenance, third-party provider updates, and webhook monitoring.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Eliminate Manual Data Entry', desc: 'Seamless synchronization between your sales, logistics, and billing systems saving hundreds of employee hours.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Daily Video Walkthroughs', desc: 'Direct Loom screen recordings explaining API test suites, Postman mock responses, and integration milestones.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Predictable Fixed-Price Sprints', desc: 'Scope-defined contracts so you know exactly what is delivered without unexpected cost overruns.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' }
      ],
      processSteps: [
        { step: '01', title: 'Data Flow Audit & Endpoint Mapping', duration: 'Days 1 - 3', desc: 'Auditing source systems, target schemas, third-party API rate limits, and authentication flows.' },
        { step: '02', title: 'OpenAPI Contract Specification', duration: 'Days 4 - 6', desc: 'Drafting strict Zod schemas, HTTP status codes, error envelopes, and data transformation maps.' },
        { step: '03', title: 'Mock Server & Test Sandbox Setup', duration: 'Week 2', desc: 'Spinning up mock endpoints in Postman/Prism allowing frontend teams to build in parallel.' },
        { step: '04', title: 'High-Throughput Gateway Implementation', duration: 'Weeks 2 - 3', desc: 'Coding custom connectors, queue workers, Redis locks, and idempotency middlewares.' },
        { step: '05', title: 'Security QA, Rate Limit & Stress Audit', duration: 'Week 3', desc: 'Simulating high-concurrency payloads, testing circuit breakers, and validating signature security.' },
        { step: '06', title: 'Production Deployment & Monitoring', duration: 'Week 4', desc: 'Deploying containerized microservices to cloud, setting up Datadog/Sentry alerts, and live sync.' },
        { step: '07', title: 'Handover & 30-Day Active Warranty', duration: 'Post-Launch', desc: 'Complete repository handover, Swagger documentation export, and 30-day active warranty support.' }
      ],
      industries: [
        { title: 'E-Commerce & Omnichannel', desc: 'Inventory sync between Shopify, Amazon, ERP warehouses, and shipping carriers.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'FinTech & Payment Gateways', desc: 'Multi-gateway reconciliation, automated payout webhooks, and ledger synchronization.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'B2B SaaS Ecosystems', desc: 'Public developer APIs, Zapier integrations, and partner marketplace apps.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'Logistics & Dispatch', desc: 'GPS telematics ingestion, warehouse ERP integration, and electronic proof of delivery.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' },
        { title: 'Healthcare & EHR Systems', desc: 'HL7 and FHIR API connectors linking patient registration with laboratory databases.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'Real Estate Multi-Listing (MLS)', desc: 'Automated RETS/RESO web API sync for live property listings, prices, and status changes.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5z"/></svg>' },
        { title: 'Hospitality & Booking Portals', desc: 'Real-time reservation sync between booking engines, channel managers, and local hotel PMS.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { title: 'Manufacturing & Supply Chain', desc: 'Automated purchase order creation, supplier catalog integrations, and factory telemetry.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'How do you guarantee that webhooks or payment events are never duplicated?', a: 'We implement an Idempotency-Key pattern using Redis distributed locks (SETNX). Each event is processed exactly once, and duplicate requests immediately return cached safe receipts.' },
        { q: 'What happens if a third-party API goes down or becomes unresponsive?', a: 'Our architectures implement circuit breaker patterns and exponential backoff retry queues with dead-letter storage, ensuring your application remains responsive while retrying failed jobs safely.' },
        { q: 'Can you integrate legacy databases (Oracle, MS SQL, older MySQL)?', a: 'Yes. We routinely write modern REST and GraphQL abstraction layers over legacy enterprise databases, allowing modern web and mobile apps to interact safely without direct schema mutations.' },
        { q: 'How long does an API integration project take?', a: 'Most standard API integrations (payment processors, CRMs, ERP connectors) take between 2 to 3 weeks from contract drafting to production.' },
        { q: 'Do you provide interactive API documentation for our developer partners?', a: 'Yes. We generate complete OpenAPI 3.1 specifications with interactive Swagger/Redoc web documentation, Postman collections, and TypeScript SDK definitions.' },
        { q: 'Do we receive full code ownership upon project completion?', a: 'Yes, 100%. All repository code, configuration scripts, and documentation belong completely to your organization.' }
      ]
    },

    'cybersecurity-defense': {
      id: 'cybersecurity-defense',
      divisionNumber: '06',
      badge: 'DIVISION 06 • ZERO-TRUST DEFENSE',
      title: 'Cybersecurity & Cloud Defense',
      subtitle: 'Shield your digital applications, server infrastructure, and customer records with zero-trust architecture, rigorous penetration testing, and 24/7 security auditing.',
      overview: 'Our cybersecurity division protects your enterprise against data breaches, ransomware, DDoS attacks, and sophisticated web application vulnerabilities. We audit existing systems, patch critical security holes, configure automated firewalls, and enforce strict Zero-Trust access policies.',
      metrics: [
        { label: 'Security Audit Delivery', value: '1 - 2 Weeks' },
        { label: 'Vulnerability Coverage', value: '100% OWASP' },
        { label: 'Breach Prevention', value: 'Zero-Tolerance' },
        { label: 'Active Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Full-Stack Web Application Vulnerability Audits', desc: 'Comprehensive source code analysis and dynamic testing against OWASP Top 10 vulnerabilities.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { num: '02', title: 'Penetration Testing & Ethical Hacking', desc: 'Simulated real-world cyberattacks on APIs, servers, and web portals with actionable remediation reports.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { num: '03', title: 'SQL Injection & XSS Attack Hardening', desc: 'Parameterization of all database queries, context-aware HTML sanitization, and output encoding.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
        { num: '04', title: 'Cloud Infrastructure & Server Hardening', desc: 'Locking down AWS, GCP, and DigitalOcean instances: disabling unused ports, SSH keys, and firewall rules.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { num: '05', title: 'SSL/TLS Configuration & End-to-End Encryption', desc: 'Enforcing modern TLS 1.3, strict HSTS preload headers, and AES-256 encryption at rest and in transit.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
        { num: '06', title: 'Cloudflare WAF Setup & DDoS Mitigation', desc: 'Configuring enterprise Web Application Firewall (WAF) rules, bot fight mode, and rate limiting shields.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { num: '07', title: 'Identity & Access Management (IAM) & 2FA/MFA', desc: 'Enforcing multi-factor authentication, session rotation, and least-privilege administrative access policies.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' },
        { num: '08', title: 'Secrets Management & Environment Vaults', desc: 'Migrating sensitive API keys and database credentials to HashiCorp Vault or AWS Secrets Manager.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { num: '09', title: 'Regulatory Compliance Readiness (SOC2, HIPAA, GDPR)', desc: 'Audit logging, user data deletion mechanisms, privacy policies, and compliance technical verification.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' },
        { num: '10', title: 'Automated Daily Encrypted Backups & Disaster Recovery', desc: 'Point-in-time recovery setups, off-site encrypted replica storage, and automated rollback testing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' }
      ],
      technologies: [
        { name: 'Cloudflare WAF', category: 'Edge Defense', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'Linux / Debian', category: 'OS Hardening', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' },
        { name: 'OWASP ZAP', category: 'Scanner', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { name: 'Burp Suite', category: 'Pen-Testing', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { name: 'AWS IAM / GuardDuty', category: 'Cloud Security', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { name: 'OpenSSL & TLS 1.3', category: 'Cryptography', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' },
        { name: 'HashiCorp Vault', category: 'Secrets', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { name: 'Docker Security', category: 'Containerization', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/></svg>' },
        { name: 'Nginx WAF', category: 'Reverse Proxy', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' },
        { name: 'PostgreSQL Encryption', category: 'Encrypted Data', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' },
        { name: 'Fail2ban', category: 'Intrusion Defense', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { name: 'Sentry Security', category: 'Anomaly Tracking', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' }
      ],
      capabilities: [
        { title: 'Strict Zero-Trust Access Architecture', desc: 'Never trust, always verify. Every request is authenticated, authorized, and logged regardless of origin.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { title: 'OWASP Top 10 Total Hardening', desc: 'Zero tolerance for SQL injection, Cross-Site Scripting (XSS), Broken Access Control, and SSRF.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
        { title: 'Sub-Second DDoS Mitigation Shield', desc: 'Automatic Layer 3, 4, and 7 volumetric DDoS protection stopping high-throughput traffic floods.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>' },
        { title: 'Tamper-Proof Audit Logging', desc: 'Immutable write-only audit trails capturing administrative actions, logins, and permission elevations.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' },
        { title: 'Automated Encryption at Rest & in Flight', desc: 'AES-256 database column encryption and mandatory TLS 1.3 transport encryption across all endpoints.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' },
        { title: 'Automated Disaster Recovery Testing', desc: 'Regular automated database restoration drills ensuring zero data loss and sub-15-minute recovery times.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' }
      ],
      whyChooseUs: [
        { title: 'Actionable Executive & Technical Reports', desc: 'Clear, prioritized vulnerability reports with step-by-step code remediations, not just automated tool output.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Zero Operational Downtime', desc: 'All penetration tests and security patches are executed safely without interrupting your live customer transactions.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: '30-Day Post-Patch Warranty', desc: 'Full 30-day warranty including re-testing of patched vulnerabilities to guarantee the exploit is completely neutralized.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Avoid Costly Breach Fines & Reputation Loss', desc: 'Proactive defense is 100x cheaper than remediating a public customer data breach or ransomware ransom.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Daily Video Walkthroughs', desc: 'Confidential Loom video debriefs explaining discovered vulnerabilities and demonstrating applied fixes.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Fixed-Price Security Audits', desc: 'Transparent audit scopes with guaranteed deliverables and no surprise hourly fees.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' }
      ],
      processSteps: [
        { step: '01', title: 'Target Scope & Reconnaissance', duration: 'Days 1 - 2', desc: 'Defining audit boundaries, mapping attack surfaces, subdomains, open ports, and API endpoints.' },
        { step: '02', title: 'Automated Vulnerability Scanning', duration: 'Days 3 - 4', desc: 'Running dynamic and static application security tests (DAST & SAST) across all software layers.' },
        { step: '03', title: 'Manual Ethical Penetration Testing', duration: 'Days 5 - 8', desc: 'Senior security engineers attempting exploit chains: auth bypass, privilege escalation, and SQL injection.' },
        { step: '04', title: 'Prioritized Vulnerability Report', duration: 'Day 9', desc: 'Delivering an executive summary and detailed engineering guide with CVSS severity ratings.' },
        { step: '05', title: 'Security Remediation & Code Patching', duration: 'Days 10 - 13', desc: 'Applying code patches, firewall rules, and IAM security controls to neutralize discovered risks.' },
        { step: '06', title: 'Validation Re-Test & Verification', duration: 'Day 14', desc: 'Re-running exploit payloads to prove every vulnerability has been completely resolved.' },
        { step: '07', title: 'Security Sign-Off & 30-Day Warranty', duration: 'Post-Audit', desc: 'Issuing formal audit attestation certificate, emergency incident playbook, and 30-day warranty.' }
      ],
      industries: [
        { title: 'FinTech, Crypto & Banking', desc: 'PCI-DSS compliance readiness, smart contract audits, and banking-grade API penetration tests.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'Healthcare & Medical Devices', desc: 'HIPAA compliance audits, patient record encryption, and medical web portal hardening.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'B2B SaaS & Enterprise Platforms', desc: 'SOC2 Type II prep, multi-tenant isolation audits, and customer security questionnaire responses.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'E-Commerce & High-Volume Retail', desc: 'Cardholder data environment audits, checkout session security, and anti-scraping defense.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'Legal & Intellectual Property', desc: 'Confidential client document vaults, attorney-client privileged communication protection.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'Government & Public Sector', desc: 'Critical infrastructure hardening, data residency verification, and defense-in-depth architecture.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { title: 'Education & Academic Institutions', desc: 'Student record protection (FERPA), examination system integrity, and DDoS prevention.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>' },
        { title: 'Supply Chain & Manufacturing', desc: 'Industrial IoT security, SCADA connection isolation, and proprietary CAD file protection.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'Will a penetration test disrupt our live business operations?', a: 'No. Our senior ethical hackers operate using safe, controlled test methodologies and coordinate with your team to ensure zero downtime or customer disruption.' },
        { q: 'How long does a full security audit take?', a: 'A standard web application or cloud infrastructure security audit takes between 1 to 2 weeks, with high-priority critical vulnerabilities flagged within 48 hours.' },
        { q: 'What do we receive at the conclusion of the security audit?', a: 'You receive an executive summary for leadership, a detailed engineering remediation report with code snippets, and a formal security attestation certificate.' },
        { q: 'Do you help fix and patch the vulnerabilities you discover?', a: 'Yes! Unlike firms that just hand over a checklist and leave, our full-stack engineering team patches the vulnerabilities directly in your codebase.' },
        { q: 'Can this audit help our company pass SOC2 or HIPAA compliance?', a: 'Yes. Our security audits address the core Technical Access Control and Encryption requirements of SOC2, HIPAA, and ISO 27001.' },
        { q: 'What warranty is provided following security patching?', a: 'We provide a 30-day warranty and perform free re-testing on all patched vulnerabilities to certify that your application remains fully secured.' }
      ]
    }
  };

  // Division List for Pager Navigation
  const DIVISION_KEYS = [
    'software-web',
    'saas-cloud',
    'ai-automation',
    'mobile-apps',
    'api-integration',
    'cybersecurity-defense'
  ];

  function initCleanSpecification() {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    let serviceId = urlParams.get('id') || 'software-web';

    if (!SERVICES_SPEC_DATA[serviceId]) {
      serviceId = 'software-web';
    }

    renderCleanService(serviceId, false);

    window.addEventListener('popstate', () => {
      const params = new URLSearchParams(window.location.search);
      const navId = params.get('id') || 'software-web';
      renderCleanService(navId, false);
    });
  }

  function renderCleanService(serviceId, pushState = true) {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    if (!SERVICES_SPEC_DATA[serviceId]) {
      serviceId = 'software-web';
    }

    const s = SERVICES_SPEC_DATA[serviceId];
    const currIdx = DIVISION_KEYS.indexOf(serviceId);
    const prevIdx = (currIdx - 1 + DIVISION_KEYS.length) % DIVISION_KEYS.length;
    const nextIdx = (currIdx + 1) % DIVISION_KEYS.length;
    const prevKey = DIVISION_KEYS[prevIdx];
    const nextKey = DIVISION_KEYS[nextIdx];
    const prevSpec = SERVICES_SPEC_DATA[prevKey];
    const nextSpec = SERVICES_SPEC_DATA[nextKey];

    if (pushState && window.location.search !== `?id=${serviceId}`) {
      window.history.pushState({ id: serviceId }, '', `service-detail.html?id=${serviceId}`);
    }

    document.title = `${s.title} | QUBITHRS Technology Solutions`;

    // Construct the 10-Section Architecture
    container.innerHTML = `
      <div class="clean-spec-wrapper">
        <!-- Top Back Nav & Division Controls -->
        <div class="clean-top-nav">
          <a href="index.html#division-${s.divisionNumber}" class="btn-back-services" aria-label="Back to services showcase">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            <span>BACK TO SERVICES</span>
          </a>

          <div class="clean-pager-controls">
            <span class="clean-pager-indicator">${currIdx + 1} of ${DIVISION_KEYS.length}</span>
            <button type="button" class="clean-pager-btn" data-service-id="${prevKey}" title="Previous: ${prevSpec.title}" aria-label="Previous service">
              &larr; Prev
            </button>
            <button type="button" class="clean-pager-btn" data-service-id="${nextKey}" title="Next: ${nextSpec.title}" aria-label="Next service">
              Next &rarr;
            </button>
          </div>
        </div>

        <!-- ========================================================
             SECTION 1: HERO (Large heading + description + CTA)
             ======================================================== -->
        <section class="clean-hero-card" id="service-hero">
          <div class="clean-hero-badge">${s.badge}</div>
          <h1 class="clean-hero-title">${s.title}</h1>
          <p class="clean-hero-subtitle">${s.subtitle}</p>
          <div class="clean-hero-actions">
            <a href="contact.html?service=${s.id}" class="btn-clean-primary" style="background:#FFFFFF !important; color:#000000 !important; border:1px solid #FFFFFF !important;">
              <span style="color:#000000 !important; font-weight:700 !important; font-family:var(--font-heading) !important; font-size:0.95rem !important;">Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" style="stroke:#000000 !important; color:#000000 !important;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#service-overview" class="btn-clean-ghost">
              <span>Explore Specifications</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>
            </a>
          </div>
        </section>

        <!-- ========================================================
             SECTION 2: OVERVIEW (Short introduction + key metrics)
             ======================================================== -->
        <section class="clean-block clean-overview-block" id="service-overview">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 02. EXECUTIVE OVERVIEW</span>
            <h2 class="clean-block-title">Overview & Delivery Commitments</h2>
          </div>
          <div class="clean-overview-card">
            <p class="clean-overview-text">${s.overview}</p>
            <div class="clean-metrics-row">
              ${s.metrics.map(m => `
                <div class="clean-metric-item">
                  <span class="clean-metric-val">${m.value}</span>
                  <span class="clean-metric-lbl">${m.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- ========================================================
             SECTION 3: WHAT'S INCLUDED (Exactly 10 Service Cards)
             ======================================================== -->
        <section class="clean-block" id="service-whats-included">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 03. SERVICE SCOPE</span>
            <h2 class="clean-block-title">What's Included in This Division</h2>
            <p class="clean-block-desc">A complete breakdown of the 10 core service modules engineered under this division.</p>
          </div>
          <div class="clean-cards-grid-10">
            ${s.whatsIncluded.map(item => `
              <div class="clean-feature-card">
                <div class="clean-feature-top">
                  <span class="clean-feature-num">${item.num}</span>
                  <span class="clean-feature-icon-wrap">${item.icon}</span>
                </div>
                <h3 class="clean-feature-title">${item.title}</h3>
                <p class="clean-feature-desc">${item.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 4: TECHNOLOGIES (Technology Logo Grid)
             ======================================================== -->
        <section class="clean-block" id="service-technologies">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 04. CORE STACK</span>
            <h2 class="clean-block-title">Technologies & Frameworks</h2>
            <p class="clean-block-desc">Engineered exclusively with modern, battle-tested languages, databases, and cloud infrastructures.</p>
          </div>
          <div class="clean-tech-grid">
            ${s.technologies.map(t => `
              <div class="clean-tech-card">
                <div class="clean-tech-icon">${t.icon}</div>
                <div class="clean-tech-info">
                  <span class="clean-tech-name">${t.name}</span>
                  <span class="clean-tech-cat">${t.category}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 5: CAPABILITIES (Feature Grid)
             ======================================================== -->
        <section class="clean-block" id="service-capabilities">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 05. ARCHITECTURAL RIGOR</span>
            <h2 class="clean-block-title">Engineering Capabilities</h2>
            <p class="clean-block-desc">Built according to enterprise standards for high concurrency, zero-trust security, and horizontal scalability.</p>
          </div>
          <div class="clean-capabilities-grid">
            ${s.capabilities.map(cap => `
              <div class="clean-cap-card">
                <div class="clean-cap-icon-box">${cap.icon}</div>
                <h3 class="clean-cap-title">${cap.title}</h3>
                <p class="clean-cap-desc">${cap.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 6: WHY CHOOSE US (Benefits Section)
             ======================================================== -->
        <section class="clean-block" id="service-why-choose-us">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 06. THE QUBITHRS ADVANTAGE</span>
            <h2 class="clean-block-title">Why Choose QUBITHRS</h2>
            <p class="clean-block-desc">We eliminate agency bloat and deliver institutional engineering quality with guaranteed terms.</p>
          </div>
          <div class="clean-why-grid">
            ${s.whyChooseUs.map(benefit => `
              <div class="clean-why-card">
                <div class="clean-why-badge">
                  <span class="clean-why-icon">${benefit.icon}</span>
                </div>
                <h3 class="clean-why-title">${benefit.title}</h3>
                <p class="clean-why-desc">${benefit.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 7: DEVELOPMENT PROCESS (7-Step Timeline)
             ======================================================== -->
        <section class="clean-block" id="service-process">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 07. DELIVERY ROADMAP</span>
            <h2 class="clean-block-title">7-Step Development Process</h2>
            <p class="clean-block-desc">A structured, transparent engineering methodology from kickoff to production handover.</p>
          </div>
          <div class="clean-timeline-track">
            ${s.processSteps.map((step, idx) => `
              <div class="clean-timeline-step">
                <div class="clean-step-indicator">
                  <span class="clean-step-num">${step.step}</span>
                  ${idx < s.processSteps.length - 1 ? '<span class="clean-step-line"></span>' : ''}
                </div>
                <div class="clean-step-content">
                  <div class="clean-step-meta">
                    <span class="clean-step-tag">Step ${step.step}</span>
                    <span class="clean-step-duration">${step.duration}</span>
                  </div>
                  <h3 class="clean-step-title">${step.title}</h3>
                  <p class="clean-step-desc">${step.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 8: INDUSTRIES / CLIENTS (Client Categories)
             ======================================================== -->
        <section class="clean-block" id="service-industries">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 08. SECTORS SERVED</span>
            <h2 class="clean-block-title">Industries & Client Verticals</h2>
            <p class="clean-block-desc">Bespoke technical solutions tailored to the compliance and operational demands of distinct industries.</p>
          </div>
          <div class="clean-industries-grid">
            ${s.industries.map(ind => `
              <div class="clean-industry-card">
                <div class="clean-ind-icon-wrap">${ind.icon}</div>
                <h3 class="clean-ind-title">${ind.title}</h3>
                <p class="clean-ind-desc">${ind.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 9: FAQS (Interactive Accordion)
             ======================================================== -->
        <section class="clean-block" id="service-faqs">
          <div class="clean-block-header">
            <span class="clean-block-tag">// 09. TRANSPARENCY & CLARITY</span>
            <h2 class="clean-block-title">Frequently Asked Questions</h2>
            <p class="clean-block-desc">Direct answers regarding timelines, intellectual property, pricing, and post-launch support.</p>
          </div>
          <div class="clean-faq-list">
            ${s.faqs.map((faq, i) => `
              <div class="clean-faq-item ${i === 0 ? 'open' : ''}">
                <button type="button" class="clean-faq-header" aria-expanded="${i === 0 ? 'true' : 'false'}">
                  <span class="clean-faq-question">${faq.q}</span>
                  <span class="clean-faq-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div class="clean-faq-body">
                  <p class="clean-faq-answer">${faq.a}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ========================================================
             SECTION 10: CTA (Final Contact & Project Kickoff)
             ======================================================== -->
        <section class="clean-cta-box" id="service-cta">
          <div class="clean-cta-badge">KICKOFF INQUIRY</div>
          <h2 class="clean-cta-title">Ready to Engineer Your Solution?</h2>
          <p class="clean-cta-subtitle">
            Share your project requirements with our engineering leads. We provide an architectural roadmap, sprint timeline, and fixed proposal within 24 hours.
          </p>
          <div class="clean-cta-actions">
            <a href="contact.html?service=${s.id}" class="btn-clean-primary" style="background:#FFFFFF !important; color:#000000 !important; border:1px solid #FFFFFF !important;">
              <span style="color:#000000 !important; font-weight:700 !important; font-family:var(--font-heading) !important; font-size:1rem !important;">Start a Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" style="stroke:#000000 !important; color:#000000 !important;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="mailto:qubithrs@gmail.com" class="clean-cta-email-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>qubithrs@gmail.com</span>
            </a>
          </div>
          <div class="clean-cta-trust-row">
            <span class="clean-trust-pill">&bull; Under 24h Response</span>
            <span class="clean-trust-pill">&bull; 100% IP Transfer</span>
            <span class="clean-trust-pill">&bull; Fixed Milestone Pricing</span>
            <span class="clean-trust-pill">&bull; 30-Day Warranty</span>
          </div>
        </section>
      </div>
    `;

    // Division pill & pager click handler
    const buttons = container.querySelectorAll('.clean-pager-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-service-id');
        if (targetId && targetId !== serviceId) {
          renderCleanService(targetId, true);
        }
      });
    });

    // FAQs Accordion Interactive Toggle Handler
    const faqItems = container.querySelectorAll('.clean-faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.clean-faq-header');
      if (header) {
        header.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          // Close other items for sleek single accordion experience
          faqItems.forEach(other => {
            other.classList.remove('open');
            const otherBtn = other.querySelector('.clean-faq-header');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) {
            item.classList.add('open');
            header.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCleanSpecification);
  } else {
    initCleanSpecification();
  }

  window.initCleanSpecification = initCleanSpecification;
  window.renderCleanService = renderCleanService;
})();
