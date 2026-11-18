/**
 * QUBITHRS SERVICE SPECIFICATION ENGINE
 * 5 Core Enterprise Divisions:
 * 01. Data Analytics & Business Intelligence (id: data-analytics)
 * 02. AI & Intelligent Automation (id: ai-automation)
 * 03. Software & Custom Web Development (id: software-web)
 * 04. Cloud & DevOps Engineering (id: cloud-devops)
 * 05. Cybersecurity & Digital Defense (id: cybersecurity-defense)
 *
 * 10-Section Master Architecture per Division:
 * 1. Hero - Large heading + description + dual CTAs
 * 2. Overview - Short introduction + 4 key delivery metrics
 * 3. What's Included - Exactly 10 comprehensive service cards
 * 4. Technologies - Technology logo & stack grid
 * 5. Capabilities - Technical feature grid
 * 6. Why Choose Us - Enterprise client benefits section
 * 7. Development Process - 7-step chronological timeline (Phase-based)
 * 8. Industries / Clients - Target client categories & verticals
 * 9. FAQs - Interactive accordion
 * 10. CTA - Final high-impact contact & project kickoff section
 *
 * Theme: QUBITHRS Monochromatic Obsidian Luxury (#000000, #FFFFFF, Slate #94A3B8)
 */

(function () {
  'use strict';

  // Master Service Specification Data Dictionary (All 5 Divisions)
  const SERVICES_SPEC_DATA = {
    'data-analytics': {
      id: 'data-analytics',
      divisionNumber: '01',
      badge: 'DIVISION 01 • DATA INTELLIGENCE & BI',
      title: 'Data Analytics & Business Intelligence',
      subtitle: 'Transform fragmented enterprise data into high-speed executive dashboards, automated ETL pipelines, and predictive intelligence that power decisive business growth.',
      overview: 'Our data analytics and business intelligence division engineers robust data warehouses, automated pipeline architectures, and interactive visualization platforms. We unify disparate business databases into an audited single source of truth, enabling leadership teams to make high-confidence, data-backed decisions with sub-second query response times.',
      metrics: [
        { label: 'Delivery Model', value: 'Milestone-Based' },
        { label: 'Data Accuracy', value: '100% Reconciled' },
        { label: 'Pipeline Speed', value: 'Sub-Second Query' },
        { label: 'Post-Launch Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        {
          num: '01',
          title: 'Executive KPI & Interactive Business Dashboards',
          desc: 'Custom visual command centers displaying real-time revenue, customer acquisition, operational velocity, and margin telemetry.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>'
        },
        {
          num: '02',
          title: 'Automated ETL & Data Pipeline Engineering',
          desc: 'Fault-tolerant ingestion pipelines connecting payment processors, CRMs, ERPs, and marketing platforms with zero data loss.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
        },
        {
          num: '03',
          title: 'Cloud Data Warehouse Modeling & Optimization',
          desc: 'High-performance schema modeling in Snowflake, Google BigQuery, and PostgreSQL with advanced indexing and query caching.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>'
        },
        {
          num: '04',
          title: 'Real-Time Event Streaming & Telemetry',
          desc: 'ClickHouse, Kafka, and Redis pub/sub pipelines processing millions of user events per hour with sub-millisecond ingestion.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        },
        {
          num: '05',
          title: 'Customer Cohort & Churn Analytics Engines',
          desc: 'Deep behavioral segmentation, retention cohort heatmaps, lifetime value (LTV) tracking, and automated churn warning signals.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
        },
        {
          num: '06',
          title: 'Revenue Forecasting & Predictive Statistical Models',
          desc: 'Statistical regression and time-series forecasting models projecting monthly cash flow, inventory demand, and sales velocity.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>'
        },
        {
          num: '07',
          title: 'Multi-Source Database Harmonization & Cleaning',
          desc: 'Automated deduplication, format normalization, schema mapping, and validation algorithms converting messy data into pristine assets.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>'
        },
        {
          num: '08',
          title: 'Automated Daily & Weekly Executive Briefings',
          desc: 'Programmatic delivery of crisp PDF summaries, Slack/Teams bot alerts, and email snapshots directly to decision-makers.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
        },
        {
          num: '09',
          title: 'Embedded Analytics for SaaS & Client Portals',
          desc: 'White-labeled customer-facing dashboards seamlessly integrated inside your web application with role-scoped tenant security.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          num: '10',
          title: 'Data Governance, Access Control & Compliance',
          desc: 'Role-based column and row access policies, PII encryption at rest, data retention rules, and compliance audit trail logging.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        }
      ],
      technologies: [
        { name: 'Python', category: 'Data Core', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c4 0 4 2 4 4v2h-4v1h6c2 0 4 2 4 4s-2 4-4 4h-2v-2h-4v-1h4V8H6C4 8 2 6 2 4s2-2 4-2h6z"/></svg>' },
        { name: 'SQL & dbt', category: 'Transformation', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/><path d="M7 10h10M7 14h6"/></svg>' },
        { name: 'PostgreSQL', category: 'Relational DB', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { name: 'Snowflake', category: 'Warehouse', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { name: 'Google BigQuery', category: 'Analytics Cloud', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="12 12 2 17 12 22 22 17 12 12"/></svg>' },
        { name: 'ClickHouse', category: 'Real-Time OLAP', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></svg>' },
        { name: 'Apache Airflow', category: 'Orchestration', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 19 8 19 16 12 22 5 16 5 8 12 2"/></svg>' },
        { name: 'Redis', category: 'In-Memory Cache', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'Apache Kafka', category: 'Event Bus', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/></svg>' },
        { name: 'Next.js & D3', category: 'Visual UI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 16.5V7.5l7 9V7.5"/></svg>' },
        { name: 'PowerBI / Metabase', category: 'BI Platform', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>' },
        { name: 'Docker', category: 'Deployment', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' }
      ],
      capabilities: [
        {
          title: 'Sub-Second Query Aggregations & Caching',
          desc: 'Warehouse clustering, partition pruning, and pre-aggregated rollups that load multi-gigabyte queries in under 500 milliseconds.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
        },
        {
          title: 'Zero Data Loss ETL Fault Tolerance',
          desc: 'Idempotent ingestion pipelines with automated dead-letter queues and transaction rollback guarantees preventing corrupt or lost records.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        },
        {
          title: 'Real-Time Ingestion & Streaming Telemetry',
          desc: 'High-throughput event processors capable of streaming live orders, user interactions, and IoT telematics directly into live dashboards.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        },
        {
          title: 'Granular Row & Column Access Security',
          desc: 'Fine-grained data governance guaranteeing sensitive financial and PII customer columns are masked based on organizational role.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
        },
        {
          title: 'Automated Anomaly Detection & Metric Alerts',
          desc: 'Real-time statistical drift monitoring that flags sudden drops in conversion rates, payment failures, or supply chain bottlenecks.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
        },
        {
          title: 'Tactile, High-End Visual UX & Charts',
          desc: 'Museum-grade obsidian dark dashboards designed with responsive canvas charting, intuitive filters, and zero visual clutter.',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>'
        }
      ],
      whyChooseUs: [
        {
          title: '100% Full IP & Warehouse Ownership',
          desc: 'You own every SQL query, pipeline script, database schema, and dashboard layout. Zero vendor lock-in or proprietary data traps.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Single Source of Truth Guarantee',
          desc: 'We eliminate conflicting numbers between sales, finance, and marketing by building reconciled, mathematically verified data models.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: '30-Day Post-Launch Pipeline Warranty',
          desc: 'Complimentary 30-day post-deployment warranty ensuring pipelines execute reliably with zero cron failures or broken schemas.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Direct Senior Data Architects',
          desc: 'Work directly with data engineers and systems architects who build enterprise pipelines daily. Zero junior outsourcers.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Daily Async Loom Video Walkthroughs',
          desc: 'Receive transparent Loom screen recordings demonstrating live data validation tests, pipeline runs, and dashboard UI progress.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        },
        {
          title: 'Transparent Milestone Pricing',
          desc: 'Scope-defined, milestone-based contracts with no hidden billable hours or unexpected infrastructure surprises.',
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
        }
      ],
      processSteps: [
        {
          step: '01',
          title: 'Data Audit & Schema Discovery',
          duration: 'Phase 1',
          desc: 'Auditing existing databases, APIs, CRM tools, third-party platforms, and defining core executive KPI requirements.'
        },
        {
          step: '02',
          title: 'Warehouse Architecture Blueprint',
          duration: 'Phase 2',
          desc: 'Designing dimensional data models (star/snowflake schemas), pipeline topologies, transformation logic, and security rules.'
        },
        {
          step: '03',
          title: 'Automated Ingestion Pipeline Build',
          duration: 'Phase 3',
          desc: 'Coding custom ETL connectors, Airflow/dbt schedules, deduplication routines, and automated schema migrations.'
        },
        {
          step: '04',
          title: 'Interactive Dashboard & Chart UI Engineering',
          duration: 'Phase 4',
          desc: 'Building modern executive dashboards with responsive filtering, drill-downs, export functionality, and automated alerts.'
        },
        {
          step: '05',
          title: 'Data Reconciliation & Stress Auditing',
          duration: 'Phase 5',
          desc: 'Rigorously validating pipeline numbers against original source ledgers and testing performance on high-volume datasets.'
        },
        {
          step: '06',
          title: 'Production Deployment & Executive Handover',
          duration: 'Phase 6',
          desc: 'Live deployment to cloud warehouse, scheduled automation validation, executive onboarding, and documentation delivery.'
        },
        {
          step: '07',
          title: 'Full IP Transfer & 30-Day Active Warranty',
          duration: 'Phase 7',
          desc: 'Complete transfer of all query repositories, credentials, documentation, and 30-day active bugfix warranty.'
        }
      ],
      industries: [
        { title: 'FinTech & Digital Payments', desc: 'Transaction volume tracking, fraud anomaly detection, payout reconciliation, and revenue analytics.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'E-Commerce & Omnichannel Retail', desc: 'Real-time multi-channel sales, inventory turnover velocity, return rates, and customer LTV segmentation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'B2B SaaS & Digital Platforms', desc: 'MRR/ARR growth tracking, cohort churn visualization, feature engagement heatmaps, and net retention metrics.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'Logistics & Supply Chain', desc: 'Fleet transit telematics, warehouse fulfillment bottlenecks, route cost optimization, and carrier SLAs.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' },
        { title: 'Healthcare & Clinical Portals', desc: 'Patient census tracking, clinic capacity utilization, appointment wait times, and HIPAA-compliant reporting.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'Manufacturing & Industrial IoT', desc: 'Factory output monitoring, machine downtime tracking, defect rate analytics, and supply forecasting.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'Real Estate & Property Portfolios', desc: 'Occupancy rate dashboards, rent collection status, maintenance expense breakdowns, and ROI projections.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5z"/></svg>' },
        { title: 'Professional Services & Consulting', desc: 'Billable utilization metrics, project profitability margins, resource allocation, and cash collection cycles.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'How do you guarantee that our business numbers are 100% accurate?', a: 'We implement automated data reconciliation scripts that mathematically verify warehouse aggregations against raw source ledgers at every ingestion phase, ensuring zero discrepancies.' },
        { q: 'Can we integrate data from multiple different platforms (e.g. Stripe, Shopify, ERP)?', a: 'Yes. We build unified ETL pipelines that pull from diverse REST APIs, SQL databases, and webhooks, normalizing everything into a centralized warehouse schema.' },
        { q: 'Do we own the data warehouse and dashboard source code?', a: 'Yes, 100%. All SQL queries, dbt models, Airflow pipelines, and frontend dashboard repositories belong completely to your organization with zero proprietary platform lock-in.' },
        { q: 'How is project pricing and development structured?', a: 'We work on transparent, milestone-based sprints tied to concrete deliverables (e.g. Data Audit, Pipeline Setup, Dashboard Build). Clear scopes and invoices are agreed upon before starting.' },
        { q: 'Can the dashboards be embedded directly inside our existing web application?', a: 'Yes. We can deliver standalone executive portals or securely embed authenticated, tenant-scoped analytics dashboards directly into your SaaS or enterprise web application.' },
        { q: 'What post-launch support is included after deployment?', a: 'Every project includes a 30-day post-launch warranty covering pipeline health, schema updates, and performance tuning, along with optional ongoing maintenance retainers.' }
      ]
    },

    'ai-automation': {
      id: 'ai-automation',
      divisionNumber: '02',
      badge: 'DIVISION 02 • INTELLIGENT AUTOMATION',
      title: 'AI & Intelligent Automation',
      subtitle: 'Deploy intelligent autonomous AI agents, enterprise RAG pipelines, and automated business workflows that eliminate manual friction and multiply team output.',
      overview: 'Our AI and intelligent automation division designs and deploys custom AI copilots, autonomous multi-step agents, and enterprise document extraction pipelines. We integrate Large Language Models (LLMs) securely with your proprietary business data, eliminating repetitive manual workflows and multiplying team productivity.',
      metrics: [
        { label: 'Delivery Model', value: 'Milestone-Based' },
        { label: 'Automation Accuracy', value: '99.5%+ Verified' },
        { label: 'Data Privacy', value: '100% Zero-Leak' },
        { label: 'Post-Launch Warranty', value: '30 Days' }
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
        { step: '01', title: 'AI Feasibility & Workflow Audit', duration: 'Phase 1', desc: 'Analyzing internal business workflows, document formats, and identifying high-ROI automation targets.' },
        { step: '02', title: 'Architecture Blueprint & Model Selection', duration: 'Phase 2', desc: 'Choosing optimal LLM models, vector database schemas, RAG retrieval strategies, and guardrails.' },
        { step: '03', title: 'Prompt Hardening & Prototype Testing', duration: 'Phase 3', desc: 'Engineering robust prompts, few-shot examples, JSON output constraints, and accuracy benchmarks.' },
        { step: '04', title: 'Agent Integration & Tool Connectors', duration: 'Phase 4', desc: 'Connecting agents to CRM systems, databases, WhatsApp/email APIs, and building streaming UIs.' },
        { step: '05', title: 'Safety, Hallucination & Pen-Testing Audit', duration: 'Phase 5', desc: 'Stress-testing edge cases, prompt injection defense, and verifying 99.5%+ extraction accuracy.' },
        { step: '06', title: 'Production Cloud Deployment & Monitoring', duration: 'Phase 6', desc: 'Deploying containerized microservices with token observability, error fallbacks, and alerts.' },
        { step: '07', title: 'Handover & 30-Day Active Warranty', duration: 'Phase 7', desc: 'Complete code and prompt repository transfer, staff training, and 30-day active warranty support.' }
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
        { q: 'How is the AI workflow project timeline structured?', a: 'We execute in agile milestone phases (Audit, Prompt Hardening, Integration, Pen-Testing, Deployment) with clear demo checkpoints before advancing.' },
        { q: 'What recurring costs are involved after deployment?', a: 'You only pay for your own direct LLM API usage (e.g. OpenAI or Anthropic tokens) and standard cloud hosting. We optimize prompts to keep token costs minimal.' },
        { q: 'Do you offer ongoing prompt maintenance and tuning?', a: 'Yes. Every project includes a 30-day post-launch warranty, and we offer monthly retainer packages for continuous accuracy monitoring and new tool integrations.' }
      ]
    },

    'software-web': {
      id: 'software-web',
      divisionNumber: '03',
      badge: 'DIVISION 03 • ENTERPRISE ENGINEERING',
      title: 'Software & Custom Web Development',
      subtitle: 'We engineer high-performance web applications, enterprise portals, ERP systems, CRM solutions, and modern digital platforms tailored to your exact business operations.',
      overview: 'Our software engineering division builds enterprise-grade web applications, corporate portals, and complex business management platforms. We engineer every project with sub-second page performance, zero technical debt, rock-solid security, and scalable cloud architectures designed for rapid business growth.',
      metrics: [
        { label: 'Delivery Model', value: 'Milestone-Based' },
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
          title: 'Cross-Platform Mobile Apps (iOS & Android)',
          desc: 'Native-performing mobile applications built with React Native and Flutter, featuring offline sync, push alerts, and biometrics.',
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
          desc: 'Secure, high-throughput backend APIs connecting your web application to third-party services, ERPs, and external platforms.',
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
        { name: 'React 19', category: 'Frontend', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>' },
        { name: 'Next.js 15', category: 'Full-Stack', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 16.5V7.5l7 9V7.5"/></svg>' },
        { name: 'TypeScript', category: 'Language', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="18" height="18" x="3" y="3" rx="3"/></svg>' },
        { name: 'Node.js', category: 'Runtime', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5v10l-9 5-9-5V7z"/></svg>' },
        { name: 'Tailwind CSS', category: 'Styling', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 12c.5-2.5 2.5-4 5.5-4 4 0 5 3 7.5 3 2 0 3-1 3.5-2.5z"/></svg>' },
        { name: 'PostgreSQL', category: 'Database', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { name: 'Redis', category: 'Caching', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'Docker', category: 'DevOps', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' },
        { name: 'AWS Cloud', category: 'Infrastructure', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'GraphQL', category: 'API Protocol', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2"/></svg>' },
        { name: 'Python', category: 'Backend/AI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c4 0 4 2 4 4v2h-4v1h6c2 0 4 2 4 4s-2 4-4 4h-2v-2h-4v-1h4V8H6C4 8 2 6 2 4s2-2 4-2h6z"/></svg>' },
        { name: 'Prisma ORM', category: 'Data Modeling', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="4 20 12 4 20 20 4 20"/></svg>' }
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
          duration: 'Phase 1',
          desc: 'Technical requirements intake, stakeholder alignment, user flow mapping, and architectural scoping.'
        },
        {
          step: '02',
          title: 'Architecture Blueprint & Database Design',
          duration: 'Phase 2',
          desc: 'Relational database schema modeling, API contract definitions, cloud infrastructure topology, and security plan.'
        },
        {
          step: '03',
          title: 'High-Fidelity UI/UX & Design System',
          duration: 'Phase 3',
          desc: 'Interactive Figma design systems, component wireframes, responsive mobile layouts, and design sign-off.'
        },
        {
          step: '04',
          title: 'Agile Full-Stack Engineering',
          duration: 'Phase 4',
          desc: 'Sprint implementation of frontend, backend services, database migrations, third-party APIs, and daily Git commits.'
        },
        {
          step: '05',
          title: 'QA, Security & Lighthouse 95+ Audit',
          duration: 'Phase 5',
          desc: 'Automated end-to-end testing, OWASP security scanning, cross-browser validation, and speed optimization.'
        },
        {
          step: '06',
          title: 'Zero-Downtime Production Deployment',
          duration: 'Phase 6',
          desc: 'Production cloud provisioning, automated CI/CD pipeline setup, SSL verification, and domain mapping.'
        },
        {
          step: '07',
          title: 'Handover, 100% IP Transfer & 30-Day Warranty',
          duration: 'Phase 7',
          desc: 'Full repository transfer, admin walkthrough session, comprehensive documentation, and 30-day active warranty.'
        }
      ],
      industries: [
        { title: 'FinTech & Banking', desc: 'Secure payment portals, automated invoice workflows, ledger synchronizations, and compliance audit logging.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'HealthTech & MedTech', desc: 'HIPAA-compliant patient portals, doctor appointment scheduling, telemedicine video engines, and medical record sync.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'E-Commerce & Omnichannel', desc: 'High-volume storefronts, multi-warehouse inventory management, 1-click checkout, and shipping carrier integrations.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'B2B SaaS & Tech Startups', desc: 'Multi-tenant cloud applications, automated recurring billing, organization workspaces, and developer API portals.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'Logistics & Supply Chain', desc: 'Real-time fleet tracking, automated warehouse dispatch dashboards, driver apps, and freight invoice management.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' },
        { title: 'Real Estate & PropTech', desc: 'Interactive property catalogs, map-based search filters, virtual tour embeds, and CRM lead capture.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5z"/></svg>' },
        { title: 'Education & EdTech', desc: 'Scalable learning management systems (LMS), student portals, quiz engines, video streaming, and verifiable certificates.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>' },
        { title: 'Professional Services & Legal', desc: 'Encrypted document vaults, e-signature integrations, client collaboration portals, and automated retainer billing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'How is the development timeline determined for custom web software?', a: 'Timelines are determined based on the specific architectural scope and features agreed upon during Discovery. We structure delivery into milestone sprints with concrete review deliverables.' },
        { q: 'Do we receive 100% ownership of the source code and intellectual property?', a: 'Yes, 100%. Upon final sign-off and milestone completion, all source code, database architectures, design systems, and GitHub repositories are fully transferred to your company with zero vendor lock-in.' },
        { q: 'What modern technologies and frameworks do you use?', a: 'We engineer using modern, enterprise-proven stacks including React 19, Next.js 15, TypeScript, Node.js, Python, PostgreSQL, Redis, and Tailwind CSS, hosted on AWS, Cloudflare, or Vercel with zero technical debt.' },
        { q: 'How is payment and project contracting structured?', a: 'We work on transparent, milestone-based terms tied to completed sprint deliverables. Formal contracts, NDAs, and international invoices are provided for every project.' },
        { q: 'Can you integrate with our existing database, ERP, or legacy backend?', a: 'Yes, absolutely. Our engineering squad routinely audits and integrates with existing SQL/NoSQL databases, legacy ERP systems (SAP, Odoo, custom), internal microservices, and third-party APIs with zero operational disruption.' },
        { q: 'What warranty and maintenance support is provided after launch?', a: 'Every project includes 30 days of complimentary post-launch support and warranty covering bug fixes and server monitoring. We also provide flexible monthly retainer packages for continuous feature development and DevOps maintenance.' }
      ]
    },

    'cloud-devops': {
      id: 'cloud-devops',
      divisionNumber: '04',
      badge: 'DIVISION 04 • CLOUD & DEVOPS INFRASTRUCTURE',
      title: 'Cloud & DevOps Engineering',
      subtitle: 'Architect resilient high-availability cloud infrastructure, automated CI/CD deployment pipelines, container orchestration, and disaster recovery environments.',
      overview: 'Our cloud and DevOps engineering division architects high-availability cloud infrastructure, automated CI/CD deployment pipelines, container orchestration, and disaster recovery environments. We optimize cloud computing costs, eliminate manual server maintenance, and guarantee 99.99% uptime for mission-critical software systems.',
      metrics: [
        { label: 'Delivery Model', value: 'Milestone-Based' },
        { label: 'Uptime SLA Target', value: '99.99% High Availability' },
        { label: 'Deployment Flow', value: 'Zero-Downtime' },
        { label: 'Post-Launch Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Cloud Infrastructure Architecture (AWS, GCP, Azure)', desc: 'Enterprise VPC design, multi-zone redundancy, auto-scaling compute groups, and secure cloud networking.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { num: '02', title: 'Automated CI/CD Pipelines (GitHub Actions & GitLab)', desc: 'Automated test execution, Docker image building, artifact signing, and zero-downtime rolling deploys.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { num: '03', title: 'Container Orchestration & Dockerization', desc: 'Containerizing monolithic apps into Docker microservices managed via Kubernetes, AWS ECS, or Nomad.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' },
        { num: '04', title: 'Infrastructure as Code (IaC via Terraform)', desc: 'Reproducible, version-controlled cloud infrastructure allowing identical staging and production environments.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { num: '05', title: 'Database Replication, Failover & High Availability', desc: 'Master-replica PostgreSQL/MySQL topologies with automated health checks, zero-data-loss failover, and PgBouncer.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { num: '06', title: 'Cloud Cost Optimization & FinOps (Up to 50% Savings)', desc: 'Auditing oversized instances, rightsizing clusters, reserved capacity planning, and eliminating idle waste.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>' },
        { num: '07', title: 'Distributed Caching & Global Edge CDN (Cloudflare)', desc: 'Configuring edge caching, HTTP/3 transport, asset minification, and SSL terminations across global edge nodes.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { num: '08', title: '24/7 Monitoring, Logging & Alerting Telemetry', desc: 'Datadog, Prometheus, Grafana, and Sentry integration with real-time Slack and PagerDuty incident alerting.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>' },
        { num: '09', title: 'Automated Disaster Recovery & Point-in-Time Backups', desc: 'Encrypted off-site backups, automated daily snapshot verification, and sub-15-minute recovery playbooks.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
        { num: '10', title: 'Zero-Trust IAM & Cloud Security Controls', desc: 'Least-privilege cloud IAM roles, HashiCorp Vault secrets management, private subnets, and bastion hosts.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
      ],
      technologies: [
        { name: 'AWS Cloud', category: 'Cloud Host', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'Google Cloud (GCP)', category: 'Cloud Host', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' },
        { name: 'Docker', category: 'Containers', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect width="4" height="3" x="4" y="9"/><rect width="4" height="3" x="10" y="9"/><path d="M2 13h20c0 4-4 7-10 7S2 17 2 13z"/></svg>' },
        { name: 'Kubernetes', category: 'Orchestration', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2"/></svg>' },
        { name: 'Terraform', category: 'IaC Engine', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'GitHub Actions', category: 'CI/CD Pipeline', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { name: 'Linux / Debian', category: 'Server OS', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>' },
        { name: 'Nginx', category: 'Reverse Proxy', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'Cloudflare', category: 'Edge CDN & WAF', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { name: 'Datadog / Prometheus', category: 'Observability', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/></svg>' },
        { name: 'Redis', category: 'Caching', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { name: 'PostgreSQL', category: 'Database Cluster', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' }
      ],
      capabilities: [
        { title: 'Elastic Horizontal Cloud Scaling', desc: 'Auto-scaling cluster policies that scale compute resources dynamically with traffic surges and scale down during off-peak hours.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'Zero-Downtime Blue/Green Deployments', desc: 'Advanced deployment strategies routing traffic only after new container health checks pass 100%.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { title: 'Multi-Region Failover Redundancy', desc: 'Geographically distributed databases and load balancers ensuring zero operational impact during regional provider outages.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { title: 'Reproducible Infrastructure via Terraform', desc: '100% of servers, networks, DNS records, and firewalls defined in code, eliminating configuration drift.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>' },
        { title: 'Sub-Minute Automated Incident Alerts', desc: 'Granular telemetry monitoring CPU, memory, database IOPS, and 5xx errors with instant escalation to engineers.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
        { title: 'Secrets Management & Zero Hardcoded Keys', desc: 'All database credentials, private keys, and API tokens injected dynamically at runtime via HashiCorp Vault.', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/></svg>' }
      ],
      whyChooseUs: [
        { title: '100% Infrastructure & Script Ownership', desc: 'All Terraform files, Dockerfiles, and CI/CD pipelines belong entirely to your company in your own cloud account.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Guaranteed 99.99% Uptime SLA', desc: 'Engineered with auto-healing containers, multi-zone database replicas, and redundant cloud balancers.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: '30-Day Post-Launch Warranty', desc: 'Full 30-day warranty covering CI/CD pipelines, container orchestration, and server monitoring stability.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Significant Cloud Bill Reduction', desc: 'Our architecture audits routinely cut recurring AWS and GCP cloud infrastructure bills by 25% to 50%.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Daily Async Loom Video Walkthroughs', desc: 'Direct screen recordings demonstrating infrastructure tests, load stress benchmarks, and CI/CD runs.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' },
        { title: 'Fixed Milestone-Based Sprints', desc: 'Transparent deliverable contracts with clearly defined milestones and zero unexpected hourly bills.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' }
      ],
      processSteps: [
        { step: '01', title: 'Cloud Infrastructure & Cost Audit', duration: 'Phase 1', desc: 'Auditing existing server architecture, security groups, billing inefficiencies, and scalability bottlenecks.' },
        { step: '02', title: 'Target Cloud Topology & IaC Blueprint', duration: 'Phase 2', desc: 'Designing VPC network topologies, container orchestration strategy, database failover, and Terraform plans.' },
        { step: '03', title: 'Dockerization & Staging Environment Build', duration: 'Phase 3', desc: 'Standardizing container builds, optimizing multi-stage Dockerfiles, and provisioning isolated staging clusters.' },
        { step: '04', title: 'Automated CI/CD Pipeline Implementation', duration: 'Phase 4', desc: 'Building GitHub Actions workflows for automated linting, test suites, container publishing, and deploys.' },
        { step: '05', title: 'High-Availability QA & Chaos Testing', duration: 'Phase 5', desc: 'Simulating instance terminations, traffic surges, and database failover drills to verify zero-downtime resilience.' },
        { step: '06', title: 'Production Cutover & Monitoring Launch', duration: 'Phase 6', desc: 'Executing DNS cutover, setting up Datadog/Grafana telemetry alerts, and validating live application health.' },
        { step: '07', title: 'Handover, Runbook Delivery & 30-Day Warranty', duration: 'Phase 7', desc: 'Delivering comprehensive architecture runbooks, team training, full repository transfer, and 30-day warranty.' }
      ],
      industries: [
        { title: 'High-Scale B2B SaaS Platforms', desc: 'Multi-tenant cloud architecture, automated customer tenant provisioning, and sub-second API latency.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { title: 'FinTech & High-Frequency Trading', desc: 'Low-latency private networking, encrypted VPC endpoints, and strict SOC2 access boundaries.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/></svg>' },
        { title: 'E-Commerce Flash-Sale Stores', desc: 'Auto-scaling compute clusters handling 100x traffic spikes during product launches without degradation.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14z"/></svg>' },
        { title: 'HealthTech & Telemedicine Portals', desc: 'HIPAA-compliant encrypted cloud storage, immutable audit logging, and automated daily backups.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3z"/></svg>' },
        { title: 'Media Streaming & EdTech Video', desc: 'Cloudfront/Cloudflare CDN edge distribution, HLS video segment delivery, and high-concurrency caching.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
        { title: 'Logistics & IoT Telemetry Hubs', desc: 'MQTT/Kafka event broker clusters ingestion millions of GPS coordinates without packet loss.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="1" y="6" rx="2"/></svg>' },
        { title: 'Enterprise Internal Tooling', desc: 'Private VPC bastions, Single Sign-On (SSO) gateway routing, and internal developer platforms.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { title: 'Mobile App API Backends', desc: 'Scalable microservice APIs handling global mobile app traffic with edge TLS termination and Redis caching.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2"/></svg>' }
      ],
      faqs: [
        { q: 'Will migrating to modern cloud infrastructure or Kubernetes cause downtime?', a: 'No. We architect blue/green deployment strategies and staging environments so that DNS traffic is only transitioned after the new infrastructure is 100% verified.' },
        { q: 'Can you help reduce our existing AWS or Google Cloud hosting costs?', a: 'Yes. Our DevOps FinOps audits routinely identify idle capacity, oversized database clusters, and unattached volumes, slashing cloud bills by 25% to 50% without degrading speed.' },
        { q: 'Do you configure automated CI/CD deployment pipelines?', a: 'Yes. We build complete automated workflows via GitHub Actions or GitLab CI so that every push to your main branch runs automated tests and deploys seamlessly.' },
        { q: 'Do we own all the Terraform code and cloud accounts?', a: 'Yes, 100%. Everything is provisioned directly inside your organization’s own AWS or GCP cloud account, and all Terraform scripts belong to you.' },
        { q: 'How is the cloud engineering engagement structured?', a: 'We work on transparent, fixed milestone scopes (e.g. Audit, IaC Blueprint, Pipeline Build, Migration, 30-Day Support) with zero open-ended billable hours.' },
        { q: 'What post-launch support is provided after migration?', a: 'We include a 30-day post-launch warranty covering any deployment adjustments, server monitoring tuning, and disaster recovery verification.' }
      ]
    },

    'cybersecurity-defense': {
      id: 'cybersecurity-defense',
      divisionNumber: '05',
      badge: 'DIVISION 05 • ZERO-TRUST DEFENSE',
      title: 'Cybersecurity & Digital Defense',
      subtitle: 'Shield your digital applications, server infrastructure, and customer records with zero-trust architecture, rigorous penetration testing, and 24/7 security auditing.',
      overview: 'Our cybersecurity division protects your enterprise against data breaches, ransomware, DDoS attacks, and sophisticated web application vulnerabilities. We audit existing systems, patch critical security holes, configure automated firewalls, and enforce strict Zero-Trust access policies.',
      metrics: [
        { label: 'Delivery Model', value: 'Milestone-Based' },
        { label: 'Vulnerability Coverage', value: '100% OWASP' },
        { label: 'Breach Prevention', value: 'Zero-Tolerance' },
        { label: 'Post-Launch Warranty', value: '30 Days' }
      ],
      whatsIncluded: [
        { num: '01', title: 'Full-Stack Web Application Vulnerability Audits', desc: 'Comprehensive source code analysis and dynamic testing against OWASP Top 10 vulnerabilities.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { num: '02', title: 'Penetration Testing & Ethical Hacking Scans', desc: 'Simulated real-world cyberattacks on APIs, servers, and web portals with actionable remediation reports.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' },
        { num: '03', title: 'SQL Injection & XSS Attack Hardening', desc: 'Parameterization of all database queries, context-aware HTML sanitization, and output encoding.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
        { num: '04', title: 'Cloud Infrastructure & Server Hardening', desc: 'Locking down AWS, GCP, and DigitalOcean instances: disabling unused ports, SSH keys, and firewall rules.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
        { num: '05', title: 'SSL/TLS Configuration & End-to-End Encryption', desc: 'Enforcing modern TLS 1.3, strict HSTS preload headers, and AES-256 encryption at rest and in transit.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
        { num: '06', title: 'Cloudflare WAF Setup & DDoS Mitigation', desc: 'Configuring enterprise Web Application Firewall (WAF) rules, bot fight mode, and rate limiting shields.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
        { num: '07', title: 'Identity & Access Management (IAM) & 2FA/MFA', desc: 'Enforcing multi-factor authentication, session rotation, and least-privilege administrative access policies.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' },
        { num: '08', title: 'Secrets Management & Environment Vaults', desc: 'Migrating sensitive API keys and database credentials to HashiCorp Vault or AWS Secrets Manager.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
        { num: '09', title: 'Regulatory Compliance Readiness (SOC2, HIPAA, GDPR)', desc: 'Audit logging, user data deletion mechanisms, privacy policies, and compliance technical verification.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>' },
        { num: '10', title: 'Automated Daily Encrypted Backups & Disaster Recovery', desc: 'Point-in-time recovery setups, off-site encrypted replica storage, and automated rollback testing.', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>' }
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
        { step: '01', title: 'Target Scope & Reconnaissance', duration: 'Phase 1', desc: 'Defining audit boundaries, mapping attack surfaces, subdomains, open ports, and API endpoints.' },
        { step: '02', title: 'Automated Vulnerability Scanning', duration: 'Phase 2', desc: 'Running dynamic and static application security tests (DAST & SAST) across all software layers.' },
        { step: '03', title: 'Manual Ethical Penetration Testing', duration: 'Phase 3', desc: 'Senior security engineers attempting exploit chains: auth bypass, privilege escalation, and SQL injection.' },
        { step: '04', title: 'Prioritized Vulnerability Report', duration: 'Phase 4', desc: 'Delivering an executive summary and detailed engineering guide with CVSS severity ratings.' },
        { step: '05', title: 'Security Remediation & Code Patching', duration: 'Phase 5', desc: 'Applying code patches, firewall rules, and IAM security controls to neutralize discovered risks.' },
        { step: '06', title: 'Validation Re-Test & Verification', duration: 'Phase 6', desc: 'Re-running exploit payloads to prove every vulnerability has been completely resolved.' },
        { step: '07', title: 'Security Sign-Off & 30-Day Warranty', duration: 'Phase 7', desc: 'Issuing formal audit attestation certificate, emergency incident playbook, and 30-day warranty.' }
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
        { q: 'How is the cybersecurity audit timeline structured?', a: 'We work in dedicated phases (Reconnaissance, Scanning, Penetration, Reporting, Remediation, Re-testing) with critical vulnerability alerts flagged immediately within 24 hours.' },
        { q: 'What do we receive at the conclusion of the security audit?', a: 'You receive an executive summary for leadership, a detailed engineering remediation report with code snippets, and a formal security attestation certificate.' },
        { q: 'Do you help fix and patch the vulnerabilities you discover?', a: 'Yes! Unlike firms that just hand over a checklist and leave, our full-stack engineering team patches the vulnerabilities directly in your codebase.' },
        { q: 'Can this audit help our company pass SOC2 or HIPAA compliance?', a: 'Yes. Our security audits address the core Technical Access Control and Encryption requirements of SOC2, HIPAA, and ISO 27001.' },
        { q: 'What warranty is provided following security patching?', a: 'We provide a 30-day warranty and perform free re-testing on all patched vulnerabilities to certify that your application remains fully secured.' }
      ]
    }
  };

  // 5 Master Division Keys in Exact Desired Order
  const DIVISION_KEYS = [
    'data-analytics',
    'ai-automation',
    'software-web',
    'cloud-devops',
    'cybersecurity-defense'
  ];

  function initCleanSpecification() {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    let serviceId = urlParams.get('id') || 'data-analytics';

    // Backwards compatibility mappings for older links
    const legacyRedirects = {
      'saas-cloud': 'cloud-devops',
      'mobile-apps': 'software-web',
      'api-integration': 'software-web'
    };
    if (legacyRedirects[serviceId]) {
      serviceId = legacyRedirects[serviceId];
    }

    if (!SERVICES_SPEC_DATA[serviceId]) {
      serviceId = 'data-analytics';
    }

    renderCleanService(serviceId, false);

    window.addEventListener('popstate', () => {
      const params = new URLSearchParams(window.location.search);
      let navId = params.get('id') || 'data-analytics';
      if (legacyRedirects[navId]) navId = legacyRedirects[navId];
      renderCleanService(navId, false);
    });
  }

  function renderCleanService(serviceId, pushState = true) {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    if (!SERVICES_SPEC_DATA[serviceId]) {
      serviceId = 'data-analytics';
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

    // Division pager click handler
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
