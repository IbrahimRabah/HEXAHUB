import { HexaSystem } from '../models/system.model';

/**
 * ═══════════════════════════════════════════════════════════════════
 *  HEXA HUB — SYSTEMS DATA  (Single Source of Truth)
 *  All 6 ecosystem systems with complete features, modules & benefits.
 * ═══════════════════════════════════════════════════════════════════
 */
export const HEXA_SYSTEMS: readonly HexaSystem[] = [

  // ───────────────────────────────────────────────────────────────
  //  A.  HEXA CORE — HR & CRM Management
  // ───────────────────────────────────────────────────────────────
  {
    id: 'hexa-core',
    name: 'Hexa Core',
    slug: 'hexa-core',
    tagline: 'HR & CRM Management System',
    heroSlogan: 'Empowering Your People. Elevating Your Business.',
    shortDescription:
      'A unified HR and CRM platform that streamlines people management, customer relationships, and organizational performance.',
    fullDescription:
      'Hexa Core is the foundational human-resources and customer-relationship management system within the HexaHub ecosystem. It brings together employee lifecycle management, attendance tracking, performance evaluations, training programmes, and a full-featured CRM into a single, intuitive platform — enabling enterprises to nurture talent, deepen customer engagement, and make data-driven decisions across every department.',
    icon: 'pi pi-users',
    accentColor: '#4f7df9',
    accentGradient: 'linear-gradient(135deg, #4f7df9 0%, #6e9bff 100%)',
    themeClass: 'theme-core',

    features: [
      {
        title: 'HR Management',
        icon: 'pi pi-id-card',
        description:
          'Complete employee lifecycle management from onboarding to offboarding, including personnel records, contracts, and organizational structure.',
      },
      {
        title: 'Attendance & Leave',
        icon: 'pi pi-clock',
        description:
          'Track attendance, manage shifts, and automate leave requests with approval workflows and real-time dashboards.',
      },
      {
        title: 'Employee Evaluations',
        icon: 'pi pi-star',
        description:
          'Design and execute performance review cycles, 360° feedback, KPI tracking, and goal-setting for continuous improvement.',
      },
      {
        title: 'Training Management',
        icon: 'pi pi-book',
        description:
          'Plan, schedule, and track employee training programmes, certifications, and skill development pathways.',
      },
      {
        title: 'CRM',
        icon: 'pi pi-briefcase',
        description:
          'Manage sales pipelines, track leads and opportunities, and automate follow-ups to maximise customer conversion rates.',
      },
      {
        title: 'Customer Database',
        icon: 'pi pi-database',
        description:
          'Centralise all customer information — contacts, interactions, contracts, and support history — in one searchable repository.',
      },
      {
        title: 'Reports & Analytics',
        icon: 'pi pi-chart-bar',
        description:
          'Generate insightful reports and visual dashboards covering HR metrics, CRM performance, and business KPIs.',
      },
    ],

    modules: [
      {
        name: 'HR Management',
        icon: 'pi pi-id-card',
        description: 'End-to-end human resource management.',
        features: [
          'Employee records & profiles',
          'Organisational chart',
          'Contract management',
          'Onboarding & offboarding workflows',
          'Document management',
        ],
      },
      {
        name: 'Attendance & Leave',
        icon: 'pi pi-clock',
        description: 'Attendance tracking and leave management.',
        features: [
          'Real-time attendance tracking',
          'Shift management',
          'Leave requests & approvals',
          'Overtime calculation',
          'Attendance reports',
        ],
      },
      {
        name: 'Employee Evaluations',
        icon: 'pi pi-star',
        description: 'Performance management and review cycles.',
        features: [
          'Performance review cycles',
          '360° feedback',
          'KPI tracking',
          'Goal setting & OKRs',
          'Appraisal reports',
        ],
      },
      {
        name: 'Training Management',
        icon: 'pi pi-book',
        description: 'Training programme coordination and tracking.',
        features: [
          'Training catalogue',
          'Session scheduling',
          'Attendance tracking',
          'Certification management',
          'Skill gap analysis',
        ],
      },
      {
        name: 'CRM',
        icon: 'pi pi-briefcase',
        description: 'Customer relationship management.',
        features: [
          'Lead & opportunity management',
          'Sales pipeline',
          'Activity tracking',
          'Email integration',
          'Follow-up automation',
        ],
      },
      {
        name: 'Customer Database',
        icon: 'pi pi-database',
        description: 'Centralised customer information repository.',
        features: [
          'Contact management',
          'Interaction history',
          'Customer segmentation',
          'Contract tracking',
          'Support history',
        ],
      },
      {
        name: 'Reports & Analytics',
        icon: 'pi pi-chart-bar',
        description: 'Comprehensive business intelligence.',
        features: [
          'HR dashboards',
          'CRM performance reports',
          'Custom report builder',
          'Data export',
          'Trend analysis',
        ],
      },
    ],

    benefits: [
      'Streamlined HR operations',
      'Better employee engagement',
      'Data-driven decisions',
      'Unified customer view',
      'Automated workflows',
      'Comprehensive reporting',
    ],
  },

  // ───────────────────────────────────────────────────────────────
  //  B.  HEXA COMMERCE — Commerce & Retail Management
  // ───────────────────────────────────────────────────────────────
  {
    id: 'hexa-commerce',
    name: 'Hexa Commerce',
    slug: 'hexa-commerce',
    tagline: 'Commerce & Retail Management System',
    heroSlogan: 'Smart Commerce. Seamless Operations.',
    shortDescription:
      'An all-in-one commerce and retail management system covering sales, purchasing, inventory, POS, van sales, and e-commerce.',
    fullDescription:
      'Hexa Commerce delivers a complete commerce management experience — from point-of-sale operations and van sales to purchase management, multi-warehouse inventory control, and integrated e-commerce. Built for distributors, retailers, and wholesalers, it unifies every commercial workflow into a single platform with powerful business analytics and ROI tracking.',
    icon: 'pi pi-shopping-cart',
    accentColor: '#22d3ee',
    accentGradient: 'linear-gradient(135deg, #22d3ee 0%, #67e8f9 100%)',
    themeClass: 'theme-commerce',

    features: [
      {
        title: 'Sales Management',
        icon: 'pi pi-dollar',
        description:
          'Manage quotations, sales orders, invoices, returns, and customer pricing with full multi-currency support.',
      },
      {
        title: 'Purchases',
        icon: 'pi pi-shopping-bag',
        description:
          'Streamline purchase orders, supplier management, goods receiving, and purchase return workflows.',
      },
      {
        title: 'Inventory & Warehouses',
        icon: 'pi pi-box',
        description:
          'Track stock levels across multiple warehouses, manage transfers, run stock-takes, and configure reorder points.',
      },
      {
        title: 'POS',
        icon: 'pi pi-credit-card',
        description:
          'Fast and intuitive point-of-sale interface with barcode scanning, receipt printing, and multi-payment support.',
      },
      {
        title: 'Van Sales',
        icon: 'pi pi-truck',
        description:
          'Equip mobile sales teams with on-the-go invoicing, route management, and real-time inventory sync.',
      },
      {
        title: 'E-Commerce',
        icon: 'pi pi-globe',
        description:
          'Synchronise your catalogue, pricing, and inventory with online storefronts for true omni-channel commerce.',
      },
      {
        title: 'Business Analytics & ROI',
        icon: 'pi pi-chart-line',
        description:
          'Measure profitability, track sales trends, and forecast demand with interactive dashboards and reports.',
      },
    ],

    modules: [
      {
        name: 'Sales Management',
        icon: 'pi pi-dollar',
        description: 'End-to-end sales cycle management.',
        features: [
          'Quotations & proforma invoices',
          'Sales orders & invoicing',
          'Returns & credit notes',
          'Customer pricing & discounts',
          'Multi-currency support',
        ],
      },
      {
        name: 'Purchases',
        icon: 'pi pi-shopping-bag',
        description: 'Procurement and supplier management.',
        features: [
          'Purchase orders',
          'Supplier management',
          'Goods receiving',
          'Purchase returns',
          'Supplier price lists',
        ],
      },
      {
        name: 'Inventory & Warehouses',
        icon: 'pi pi-box',
        description: 'Multi-warehouse stock management.',
        features: [
          'Multi-warehouse support',
          'Stock transfers',
          'Stock-take & adjustments',
          'Reorder point alerts',
          'Batch & serial tracking',
        ],
      },
      {
        name: 'POS',
        icon: 'pi pi-credit-card',
        description: 'Point-of-sale operations.',
        features: [
          'Touch-optimised interface',
          'Barcode scanning',
          'Receipt printing',
          'Multi-payment methods',
          'Offline mode support',
        ],
      },
      {
        name: 'Van Sales',
        icon: 'pi pi-truck',
        description: 'Mobile field sales operations.',
        features: [
          'Mobile invoicing',
          'Route planning',
          'Real-time inventory sync',
          'Cash & credit collection',
          'GPS tracking',
        ],
      },
      {
        name: 'E-Commerce',
        icon: 'pi pi-globe',
        description: 'Online store integration.',
        features: [
          'Product catalogue sync',
          'Online order management',
          'Inventory synchronisation',
          'Payment gateway integration',
          'Customer portal',
        ],
      },
      {
        name: 'Business Analytics & ROI',
        icon: 'pi pi-chart-line',
        description: 'Business intelligence and reporting.',
        features: [
          'Profitability analysis',
          'Sales trend reports',
          'Demand forecasting',
          'Interactive dashboards',
          'Custom KPI tracking',
        ],
      },
    ],

    benefits: [
      'Increase sales efficiency',
      'Real-time inventory tracking',
      'Multi-channel commerce',
      'Comprehensive purchase management',
      'Mobile van sales',
      'Data-driven business decisions',
    ],
  },

  // ───────────────────────────────────────────────────────────────
  //  C.  HEXA CARE — Healthcare Management
  // ───────────────────────────────────────────────────────────────
  {
    id: 'hexa-care',
    name: 'Hexa Care',
    slug: 'hexa-care',
    tagline: 'Healthcare Management System',
    heroSlogan: 'One Platform. Complete Healthcare.',
    shortDescription:
      'An integrated medical system for managing hospitals, clinics, and medical centres with a smart, easy-to-use digital experience.',
    fullDescription:
      'Hexa Care is an integrated medical system for managing hospitals, clinics, and medical centers. It provides a smart and easy operating experience that helps healthcare institutions improve the quality of medical care, increase operational efficiency, and complete digital transformation.',
    icon: 'pi pi-heart',
    accentColor: '#10b981',
    accentGradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    themeClass: 'theme-care',

    features: [
      {
        title: 'Modern and User-Friendly Interface',
        icon: 'pi pi-palette',
        description:
          'A clean, intuitive interface designed for healthcare professionals to navigate complex workflows with ease.',
      },
      {
        title: 'Integrated Healthcare Facility Management',
        icon: 'pi pi-building',
        description:
          'Manage every aspect of your healthcare facility — from patient flow to equipment and staffing — in one unified system.',
      },
      {
        title: 'Multi-Branch Support',
        icon: 'pi pi-sitemap',
        description:
          'Operate across multiple clinics, hospitals, or centres with centralised data and branch-level configuration.',
      },
      {
        title: 'Advanced User Permissions',
        icon: 'pi pi-shield',
        description:
          'Role-based access control ensures sensitive patient data is visible only to authorised personnel.',
      },
      {
        title: 'Notification and Alert System',
        icon: 'pi pi-bell',
        description:
          'Automated alerts for appointments, lab results, medication schedules, and critical patient events.',
      },
      {
        title: 'Smart Reports and Dashboards',
        icon: 'pi pi-chart-bar',
        description:
          'Real-time dashboards and configurable reports covering clinical, financial, and operational KPIs.',
      },
      {
        title: 'Cloud or On-Premises Operation',
        icon: 'pi pi-cloud',
        description:
          'Deploy on secure cloud infrastructure or on-premises servers to meet your institution\'s regulatory and IT requirements.',
      },
      {
        title: 'Integration with Medical Devices',
        icon: 'pi pi-link',
        description:
          'Seamlessly connect laboratory instruments, imaging equipment, and other medical devices for automated data capture.',
      },
    ],

    modules: [
      {
        name: 'Patient Management',
        icon: 'pi pi-users',
        description: 'Comprehensive patient records and registration.',
        features: [
          'Patient registration & demographics',
          'Medical history tracking',
          'Insurance & billing information',
          'Patient search & lookup',
          'Document & image archiving',
        ],
      },
      {
        name: 'Appointment and Booking Management',
        icon: 'pi pi-calendar',
        description: 'Scheduling and appointment coordination.',
        features: [
          'Online & walk-in booking',
          'Doctor schedule management',
          'Appointment reminders',
          'Waiting list management',
          'Multi-branch scheduling',
        ],
      },
      {
        name: 'Nursing Module',
        icon: 'pi pi-heart-fill',
        description: 'Nursing workflows and bedside documentation.',
        features: [
          'Vital signs recording',
          'Medication administration',
          'Nursing care plans',
          'Shift handover notes',
          'Patient monitoring',
        ],
      },
      {
        name: 'Physician Module',
        icon: 'pi pi-user',
        description: 'Clinical documentation for physicians.',
        features: [
          'Electronic medical records',
          'Clinical notes & SOAP',
          'Prescription management',
          'Diagnosis coding (ICD)',
          'Referral management',
        ],
      },
      {
        name: 'Laboratory Module',
        icon: 'pi pi-filter',
        description: 'Lab order and result management.',
        features: [
          'Lab order entry',
          'Sample tracking',
          'Result entry & validation',
          'Normal range configuration',
          'Lab instrument integration',
        ],
      },
      {
        name: 'Radiology Module',
        icon: 'pi pi-image',
        description: 'Radiology workflow and imaging.',
        features: [
          'Radiology order management',
          'PACS integration',
          'Report writing & templates',
          'Image viewing',
          'Workflow tracking',
        ],
      },
      {
        name: 'Pharmacy Module',
        icon: 'pi pi-box',
        description: 'Pharmacy dispensing and inventory.',
        features: [
          'Prescription dispensing',
          'Drug interaction alerts',
          'Inventory management',
          'Expiry tracking',
          'Controlled substance log',
        ],
      },
      {
        name: 'Operating Room Module',
        icon: 'pi pi-cog',
        description: 'Surgical scheduling and management.',
        features: [
          'Surgery scheduling',
          'Pre-operative checklists',
          'Operating room allocation',
          'Post-operative notes',
          'Equipment tracking',
        ],
      },
      {
        name: 'Accommodation Module',
        icon: 'pi pi-building',
        description: 'Bed and ward management.',
        features: [
          'Bed allocation & tracking',
          'Ward management',
          'Admission & discharge workflows',
          'Occupancy dashboards',
          'Housekeeping coordination',
        ],
      },
      {
        name: 'Accounts and Billing Module',
        icon: 'pi pi-wallet',
        description: 'Financial operations and billing.',
        features: [
          'Patient billing & invoicing',
          'Insurance claims processing',
          'Payment tracking',
          'Revenue cycle management',
          'Financial reporting',
        ],
      },
      {
        name: 'Reports and Statistics',
        icon: 'pi pi-chart-bar',
        description: 'Analytics and reporting engine.',
        features: [
          'Clinical reports',
          'Financial summaries',
          'Operational KPI dashboards',
          'Custom report builder',
          'Data export & integration',
        ],
      },
    ],

    specializedModules: [
      {
        name: 'Ophthalmology Module',
        icon: 'pi pi-eye',
        description: 'Specialised ophthalmic clinical workflows.',
        features: [
          'Eye examination records',
          'Visual acuity tracking',
          'Ophthalmic device integration',
          'Surgical documentation',
          'Optical prescription management',
        ],
      },
      {
        name: 'Dental Module',
        icon: 'pi pi-heart',
        description: 'Dental clinic management and charting.',
        features: [
          'Dental charting',
          'Treatment planning',
          'Periodontal records',
          'Dental imaging integration',
          'Procedure & material tracking',
        ],
      },
    ],

    benefits: [
      'Increase operational efficiency',
      'Improve patient experience',
      'Reduce paperwork errors',
      'Enhance follow-up and management',
      'Support true digital transformation',
      'Meet government and private accreditation requirements',
    ],
  },

  // ───────────────────────────────────────────────────────────────
  //  D.  HEXA CAMPUS — Education Management
  // ───────────────────────────────────────────────────────────────
  {
    id: 'hexa-campus',
    name: 'Hexa Campus',
    slug: 'hexa-campus',
    tagline: 'Education Management System',
    heroSlogan: 'Empowering Education Through Technology.',
    shortDescription:
      'A comprehensive education management system for universities, schools, nurseries, and training academies covering academic, administrative, and financial workflows.',
    fullDescription:
      'Hexa Campus is an education management system designed for universities, schools, nurseries, and training academies. It supports academic, administrative, financial, and communication workflows.',
    icon: 'pi pi-graduation-cap',
    accentColor: '#a855f7',
    accentGradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
    themeClass: 'theme-campus',

    features: [
      {
        title: 'Student Management',
        icon: 'pi pi-users',
        description:
          'Manage complete student lifecycles — admissions, personal files, academic status, transfers, dismissals, and document archiving.',
      },
      {
        title: 'Academic Management',
        icon: 'pi pi-book',
        description:
          'Organise course materials, study plans, timetables, sections, classes, and lecture schedules efficiently.',
      },
      {
        title: 'Attendance System',
        icon: 'pi pi-check-square',
        description:
          'Record attendance via fingerprint or QR code, generate absence reports, and send instant notifications.',
      },
      {
        title: 'Exams & Grades',
        icon: 'pi pi-pencil',
        description:
          'Create tests, record grades, calculate averages, print certificates, and run assessment analysis.',
      },
      {
        title: 'Financial Management',
        icon: 'pi pi-wallet',
        description:
          'Handle tuition fees, instalments, payments, invoices, and comprehensive financial reporting.',
      },
      {
        title: 'Parent & Teacher Portal',
        icon: 'pi pi-comments',
        description:
          'Enable parents and teachers to track academic performance, attendance, notifications, messages, and expenses.',
      },
      {
        title: 'E-Learning Integration',
        icon: 'pi pi-desktop',
        description:
          'Support virtual classrooms, lecture uploads, assignments, and online quizzes for blended learning.',
      },
      {
        title: 'HR & Staff Management',
        icon: 'pi pi-id-card',
        description:
          'Manage staff and faculty records, attendance, salaries, contracts, vacations, and evaluations.',
      },
      {
        title: 'Reports & Analytics',
        icon: 'pi pi-chart-bar',
        description:
          'Smart dashboards covering academic, financial, and performance metrics with advanced analytics.',
      },
    ],

    modules: [
      {
        name: 'Student Management',
        icon: 'pi pi-users',
        description: 'Complete student data management.',
        features: [
          'Complete student data management',
          'Personal files',
          'Admissions data',
          'Academic status',
          'Transfer and dismissal',
          'Document archiving',
        ],
      },
      {
        name: 'Academic Management',
        icon: 'pi pi-book',
        description: 'Curriculum and scheduling.',
        features: [
          'Course materials',
          'Study plans',
          'Timetables',
          'Sections and classes',
          'Lecture schedules',
        ],
      },
      {
        name: 'Attendance System',
        icon: 'pi pi-check-square',
        description: 'Attendance recording and tracking.',
        features: [
          'Attendance recording',
          'Fingerprint or QR Code',
          'Absence reports',
          'Instant notifications',
        ],
      },
      {
        name: 'Exams & Grades',
        icon: 'pi pi-pencil',
        description: 'Examination and grading workflows.',
        features: [
          'Create tests',
          'Record grades',
          'Calculate averages',
          'Print certificates',
          'Assessments and analysis',
        ],
      },
      {
        name: 'Financial Management',
        icon: 'pi pi-wallet',
        description: 'Tuition and financial operations.',
        features: [
          'Tuition fees',
          'Installments',
          'Payments',
          'Invoices',
          'Financial reports',
        ],
      },
      {
        name: 'Parent & Teacher Portal',
        icon: 'pi pi-comments',
        description: 'Communication and engagement hub.',
        features: [
          'Academic performance tracking',
          'Attendance tracking',
          'Notifications',
          'Messages',
          'Expenses tracking',
        ],
      },
      {
        name: 'E-Learning Integration',
        icon: 'pi pi-desktop',
        description: 'Digital learning tools.',
        features: [
          'Virtual classrooms',
          'Uploading lectures',
          'Assignments',
          'Online quizzes',
        ],
      },
      {
        name: 'HR & Staff Management',
        icon: 'pi pi-id-card',
        description: 'Staff and faculty administration.',
        features: [
          'Staff and faculty management',
          'Attendance and leave',
          'Salaries',
          'Contracts',
          'Vacations',
          'Evaluations',
        ],
      },
      {
        name: 'Reports & Analytics',
        icon: 'pi pi-chart-bar',
        description: 'Smart reports and dashboards.',
        features: [
          'Smart reports and dashboards',
          'Academic reports',
          'Financial reports',
          'Performance indicators',
          'Student statistics',
          'Advanced analytics',
        ],
      },
    ],

    benefits: [
      'Comprehensive academic management',
      'Improved parent-teacher communication',
      'Streamlined administrative processes',
      'Data-driven educational decisions',
      'Flexible assessment tools',
      'Modern e-learning support',
    ],
  },

  // ───────────────────────────────────────────────────────────────
  //  E.  HEXA CRAFT — Project & Task Management
  // ───────────────────────────────────────────────────────────────
  {
    id: 'hexa-craft',
    name: 'Hexa Craft',
    slug: 'hexa-craft',
    tagline: 'Project & Task Management System',
    heroSlogan: 'Build. Track. Deliver.',
    shortDescription:
      'A powerful project and task management system that helps teams plan, execute, and deliver work on time with full visibility.',
    fullDescription:
      'Hexa Craft empowers organisations to take complete control of their project portfolios. From high-level project planning and milestone tracking to granular task assignment, ticketing, and team collaboration, it provides the tools teams need to stay aligned, hit deadlines, and continuously improve their delivery workflows.',
    icon: 'pi pi-briefcase',
    accentColor: '#f97316',
    accentGradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
    themeClass: 'theme-craft',

    features: [
      {
        title: 'Projects Management',
        icon: 'pi pi-folder',
        description:
          'Create and manage project portfolios with milestones, budgets, resource allocation, and progress dashboards.',
      },
      {
        title: 'Tasks & Tickets',
        icon: 'pi pi-check-circle',
        description:
          'Break projects into actionable tasks and tickets, assign owners, set priorities, and track completion status.',
      },
      {
        title: 'Timelines & Scheduling',
        icon: 'pi pi-calendar',
        description:
          'Visualise project timelines with Gantt charts, set dependencies, and manage critical-path schedules.',
      },
      {
        title: 'Team Collaboration',
        icon: 'pi pi-comments',
        description:
          'Centralise team communication with comments, mentions, file sharing, and activity feeds within each project.',
      },
      {
        title: 'Workflow Tracking',
        icon: 'pi pi-sync',
        description:
          'Define custom workflow stages, automate status transitions, and monitor bottlenecks in real time.',
      },
    ],

    modules: [
      {
        name: 'Projects Management',
        icon: 'pi pi-folder',
        description: 'Portfolio and project oversight.',
        features: [
          'Project creation & templates',
          'Milestone tracking',
          'Budget management',
          'Resource allocation',
          'Progress dashboards',
        ],
      },
      {
        name: 'Tasks & Tickets',
        icon: 'pi pi-check-circle',
        description: 'Task and ticket management.',
        features: [
          'Task creation & assignment',
          'Priority & severity levels',
          'Due dates & reminders',
          'Sub-tasks & checklists',
          'Kanban & list views',
        ],
      },
      {
        name: 'Timelines & Scheduling',
        icon: 'pi pi-calendar',
        description: 'Visual scheduling tools.',
        features: [
          'Gantt chart view',
          'Task dependencies',
          'Critical path analysis',
          'Calendar integration',
          'Deadline tracking',
        ],
      },
      {
        name: 'Team Collaboration',
        icon: 'pi pi-comments',
        description: 'Team communication and coordination.',
        features: [
          'In-context comments',
          'File attachments',
          'Activity feed',
          '@Mention notifications',
          'Team workload view',
        ],
      },
      {
        name: 'Workflow Tracking',
        icon: 'pi pi-sync',
        description: 'Custom workflow automation.',
        features: [
          'Custom workflow stages',
          'Automated transitions',
          'Bottleneck detection',
          'SLA tracking',
          'Workflow analytics',
        ],
      },
    ],

    benefits: [
      'Centralized project oversight',
      'Efficient task delegation',
      'Real-time progress tracking',
      'Enhanced team coordination',
      'Automated workflow management',
      'Deadline adherence',
    ],
  },

  // ───────────────────────────────────────────────────────────────
  //  F.  HEXA CONSOLE — IT Service Management
  // ───────────────────────────────────────────────────────────────
  {
    id: 'hexa-console',
    name: 'Hexa Console',
    slug: 'hexa-console',
    tagline: 'IT Service Management Platform',
    heroSlogan: 'Command Your IT. Control Your Future.',
    shortDescription:
      'A comprehensive IT service management platform for servers, assets, licences, help desk, monitoring, and automation.',
    fullDescription:
      'Hexa Console is the IT nerve centre of the HexaHub ecosystem. It gives technology teams a single command-and-control platform for managing servers, tracking IT assets and software licences, running a modern help desk, monitoring infrastructure health, and automating configuration and deployment tasks — reducing downtime, ensuring compliance, and freeing IT staff to focus on strategic initiatives.',
    icon: 'pi pi-server',
    accentColor: '#ef4444',
    accentGradient: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
    themeClass: 'theme-console',

    features: [
      {
        title: 'Servers Management',
        icon: 'pi pi-server',
        description:
          'Monitor, provision, and manage physical and virtual servers with real-time health metrics and alerts.',
      },
      {
        title: 'IT Assets',
        icon: 'pi pi-desktop',
        description:
          'Track hardware and software assets throughout their lifecycle — procurement, assignment, maintenance, and disposal.',
      },
      {
        title: 'Licenses',
        icon: 'pi pi-key',
        description:
          'Manage software licences, renewal dates, compliance status, and vendor agreements in one place.',
      },
      {
        title: 'Help Desk',
        icon: 'pi pi-ticket',
        description:
          'Provide multi-channel support with ticket management, SLA enforcement, knowledge base, and self-service portal.',
      },
      {
        title: 'Monitoring',
        icon: 'pi pi-eye',
        description:
          'Continuous infrastructure monitoring with customisable dashboards, threshold-based alerts, and incident escalation.',
      },
      {
        title: 'Automation & Configuration',
        icon: 'pi pi-cog',
        description:
          'Automate repetitive IT tasks, enforce configuration baselines, and manage change requests systematically.',
      },
    ],

    modules: [
      {
        name: 'Servers Management',
        icon: 'pi pi-server',
        description: 'Server lifecycle management.',
        features: [
          'Server inventory',
          'Health monitoring',
          'Provisioning & decommissioning',
          'Patch management',
          'Performance metrics',
        ],
      },
      {
        name: 'IT Assets',
        icon: 'pi pi-desktop',
        description: 'IT asset lifecycle tracking.',
        features: [
          'Asset registration',
          'Assignment tracking',
          'Maintenance schedules',
          'Depreciation tracking',
          'Disposal management',
        ],
      },
      {
        name: 'Licenses',
        icon: 'pi pi-key',
        description: 'Software licence management.',
        features: [
          'Licence inventory',
          'Renewal tracking',
          'Compliance auditing',
          'Vendor management',
          'Cost allocation',
        ],
      },
      {
        name: 'Help Desk',
        icon: 'pi pi-ticket',
        description: 'IT service desk operations.',
        features: [
          'Ticket management',
          'SLA enforcement',
          'Knowledge base',
          'Self-service portal',
          'Multi-channel intake',
        ],
      },
      {
        name: 'Monitoring',
        icon: 'pi pi-eye',
        description: 'Infrastructure monitoring.',
        features: [
          'Real-time dashboards',
          'Threshold-based alerts',
          'Incident escalation',
          'Uptime tracking',
          'Performance analytics',
        ],
      },
      {
        name: 'Automation & Configuration',
        icon: 'pi pi-cog',
        description: 'IT process automation.',
        features: [
          'Task automation scripts',
          'Configuration baselines',
          'Change management',
          'Scheduled jobs',
          'Audit trails',
        ],
      },
    ],

    benefits: [
      'Centralized IT management',
      'Proactive monitoring',
      'Streamlined help desk',
      'License compliance',
      'Automated configurations',
      'Reduced downtime',
    ],
  },
] as const;

// ── Lookup helpers ────────────────────────────────────────────────

/** Find a system by its URL slug (returns undefined if not found) */
export function findSystemBySlug(slug: string): HexaSystem | undefined {
  return HEXA_SYSTEMS.find((s) => s.slug === slug);
}

/** Get just the slugs (useful for route guards / resolvers) */
export const SYSTEM_SLUGS: readonly string[] = HEXA_SYSTEMS.map((s) => s.slug);
