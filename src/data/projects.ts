import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Depllc ERP/CRM System',
    slug: 'depllc-erp-crm',
    shortDescription: 'Enterprise-grade ERP/CRM system with multi-tier authentication and role-based access control',
    description: 'Comprehensive ERP/CRM platform featuring 13+ modules including lead management, project tracking, real-time communication, and department management with advanced security and role-based permissions.',
    longDescription: `Enterprise-level ERP/CRM system designed for managing complex business workflows across sales, support, IT, and administrative departments.
This system features a sophisticated multi-tier authentication system with 2FA, dynamic role management with 10+ hierarchical roles, and comprehensive workflow automation across 9 project stages. The platform includes real-time communication powered by Supabase, department-based task management, and advanced reporting capabilities.
Key modules include lead generation and qualification, client onboarding, project validation, approval workflows, task execution with time tracking, and a dedicated client portal for project visibility.`,
    technologies: ['Next.js', 'TypeScript', 'Redux Toolkit', 'NextAuth.js', 'MongoDB', 'Supabase', 'Tailwind CSS', 'AWS S3', 'Socket.io', 'bcryptjs'],
    featuredTechnologies: ['Next.js', 'MongoDB', 'Supabase'],
    role: 'Lead Full-Stack Developer & System Architect',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-09-23',
    endDate: '2026-01-10',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
        alt: 'ERP Dashboard',
        isFeatured: true,
        caption: 'Comprehensive ERP dashboard with role-based access',
      },
    ],
    contributions: [
      'Architected complete system with 13+ interconnected modules',
      'Implemented multi-tier authentication with 2FA for admin and employees',
      'Built dynamic role management system with hierarchical permissions',
      'Developed 9-stage workflow process from lead to project completion',
      'Integrated Supabase for real-time communication and notifications',
      'Created department-based task management with time tracking',
      'Implemented secure file storage with AWS S3 and document version control',
      'Built comprehensive reporting and analytics dashboard',
      'Designed client portal for project visibility and communication',
    ],
    challenges: [
      'Managing complex role hierarchies and permission matrices across departments',
      'Implementing real-time updates across multiple modules without performance degradation',
      'Ensuring data consistency across 9 workflow stages with multiple user interactions',
      'Scaling WebSocket connections for real-time communication',
      'Handling two Databases (MongoDB and Supabase) in a unified manner',
      'Designing flexible task assignment system adaptable to different department needs',
    ],
    learnings: [
      'Advanced role-based access control implementation strategies',
      'Real-time communication architecture using Supabase',
      'Workflow automation patterns for complex business processes',
      'Scalable state management with Redux Toolkit for large applications',
      'Security best practices for enterprise applications',
    ],
    featured: true,
    order: 1,
    tags: ['ERP', 'CRM', 'Enterprise', 'Real-time', 'Authentication'],
    isOpenSource: false,
  },
  {
    id: '2',
    title: 'E-Commerce Platform (MERN Stack)',
    slug: 'ecommerce-mern',
    shortDescription: 'Full-stack e-commerce platform with secure payment integration and admin panel',
    description: 'Complete e-commerce solution built with MERN stack featuring user authentication, product catalog, shopping cart, secure payment processing, and comprehensive admin dashboard.',
    longDescription: `A full-featured e-commerce platform demonstrating expertise in the MERN (MongoDB, Express, React, Node.js) stack.
The platform provides a seamless shopping experience with product browsing, advanced search and filtering, cart management, and secure checkout. The admin panel offers complete control over products, orders, inventory, and user management with detailed analytics.
Implemented secure authentication system, integrated multiple payment gateways, and optimized for performance and scalability.`,
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Squareup', 'Shippo', 'Redux', 'Tailwind CSS'],
    featuredTechnologies: ['React', 'Node.js', 'MongoDB'],
    role: 'Full-Stack Developer',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-07-01',
    endDate: '2025-08-30',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
        alt: 'E-commerce storefront',
        isFeatured: true,
        caption: 'Modern e-commerce interface with product catalog',
      },
    ],
    contributions: [
      'Developed complete user authentication system with JWT',
      'Built responsive product listing with search and filtering',
      'Implemented shopping cart with session persistence',
      'Integrated Squareup payment gateway for secure transactions',
      'Integrated Shippo for shipping and logistics management',
      'Created admin dashboard for product and order management',
      'Implemented inventory tracking and low-stock alerts',
      'Built order history and tracking system',
    ],
    challenges: [
      'Implemented Products and product variations management',
      'Handling secure payment transactions and webhooks',
      'Managing cart state across sessions',
      'Implementing real-time inventory updates',
    ],
    learnings: [
      'Payment gateway integration best practices',
      'Session management and authentication patterns',
      'Scalable MongoDB schema design for e-commerce',
    ],
    featured: true,
    order: 2,
    tags: ['E-commerce', 'MERN', 'Payments', 'Shipping', 'Full-Stack'],
    isOpenSource: false,
  },
  {
    id: '3',
    title: 'Inventory Management System',
    slug: 'inventory-management-mern',
    shortDescription: 'Comprehensive inventory tracking system with supplier management and reporting',
    description: 'Robust inventory management solution built with MERN and MySQL(uisng Prisma ORM) for tracking stock levels, managing suppliers, generating reports, and automating inventory workflows.',
    longDescription: `A professional inventory management system designed to streamline stock control and supplier management for businesses.
The system provides real-time inventory tracking, automated low-stock alerts, supplier management with contact information and order history, and comprehensive reporting capabilities. Features include barcode integration, batch tracking, and multi-location inventory support.
Built with security in mind, implementing role-based access control and audit logging for all inventory transactions.`,
    technologies: ['MERN', 'MySQL', 'Prisma ORM', 'Tailwind CSS', 'three.js', 'Chart.js', 'JWT', 'bcryptjs', 'Socket.io'],
    featuredTechnologies: ['MERN', 'MySQL', 'Tailwind CSS', 'Socket.io'],
    role: 'Full-Stack Developer',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-03-01',
    endDate: '2025-07-01',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200',
        alt: 'Inventory dashboard',
        isFeatured: true,
        caption: 'Inventory tracking dashboard with analytics',
      },
    ],
    contributions: [
      'Designed and implemented complete database schema',
      'Built inventory tracking system with real-time updates',
      'Created supplier management module with order history',
      'Developed automated low-stock alert system',
      'Implemented comprehensive reporting with export functionality',
      'Built role-based access control for different user levels',
      'Created audit logging for inventory transactions',
    ],
    challenges: [
      'Handling concurrent inventory updates',
      'Optimizing complex SQL queries for reporting',
      'Implementing accurate stock calculations across transactions',
    ],
    learnings: [
      'Database transaction management for data consistency',
      'Complex SQL query optimization techniques',
      'Audit logging implementation for compliance',
    ],
    featured: true,
    order: 3,
    tags: ['Inventory', 'MERN', 'MySQL', 'Enterprise'],
    isOpenSource: false,
  },
  {
    id: '4',
    title: 'Point of Sale (POS) System',
    slug: 'pos-system-php',
    shortDescription: 'Feature-rich POS system with sales processing, inventory integration, and invoice generation',
    description: 'Complete Point of Sale solution built with Core PHP and SQL featuring product management, real-time sales processing, invoice generation, and automated stock updates.',
    longDescription: `A professional POS system designed for retail businesses requiring efficient sales processing and inventory management.
The system includes a fast and intuitive sales interface, barcode scanning support, multiple payment methods, and automatic invoice generation with customizable templates. Integrated inventory management ensures real-time stock updates with each transaction.
Features include customer management, sales history tracking, daily sales reports, and comprehensive analytics for business insights.`,
    technologies: ['Core PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX', 'TCPDF'],
    featuredTechnologies: ['PHP', 'MySQL', 'JavaScript'],
    role: 'Full-Stack Developer',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-01-01',
    endDate: '2025-02-28',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200',
        alt: 'POS interface',
        isFeatured: true,
        caption: 'Modern POS interface for fast checkout',
      },
    ],
    contributions: [
      'Developed fast and responsive sales processing interface',
      'Implemented product management with product recipies',
      'Built automated invoice generation with PDF export',
      'Developed customer management and loyalty system',
      'Implemented sales analytics and reporting dashboard',
      'Built multi-payment method support',
    ],
    challenges: [
      'Ensuring transaction speed for optimal user experience',
      'Maintaining inventory accuracy across concurrent sales',
      'Generating professional invoices with custom templates',
    ],
    learnings: [
      'Optimizing database operations for real-time applications',
      'PDF generation and template customization',
      'Transaction management for data integrity',
    ],
    featured: false,
    order: 4,
    tags: ['POS', 'Retail', 'PHP', 'Sales'],
    isOpenSource: false,
  },
  {
    id: '5',
    title: 'Real Estate Website',
    slug: 'real-estate-website',
    shortDescription: 'Responsive real estate platform with property listings and advanced filtering',
    description: 'Modern real estate website featuring property showcases, advanced search filters, interactive image galleries, and integrated contact forms built with HTML5, CSS3, and JavaScript.',
    longDescription: `A professional real estate website designed to showcase properties with an engaging user experience.
The platform features property listings with high-quality image galleries, advanced filtering by location, price, property type, and amenities. Interactive maps integration for property locations, virtual tour support, and responsive design optimized for all devices.
Implemented modern JavaScript for smooth animations, dynamic content loading, and form validation for lead capture.`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'Google Maps API'],
    featuredTechnologies: ['HTML5', 'CSS3', 'JavaScript'],
    role: 'Frontend Developer',
    status: 'Completed',
    category: 'Frontend',
    startDate: '2024-09-01',
    endDate: '2024-12-31',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
        alt: 'Real estate website',
        isFeatured: true,
        caption: 'Modern real estate property showcase',
      },
    ],
    contributions: [
      'Designed and developed fully responsive layout',
      'Implemented advanced property filtering system',
      'Created interactive image galleries with lightbox',
      'Integrated Google Maps for property locations',
      'Built contact forms with validation',
      'Optimized images and performance for fast loading',
      'Implemented SEO best practices',
    ],
    challenges: [
      'Creating smooth filtering without page reloads',
      'Optimizing large image galleries for performance',
      'Ensuring cross-browser compatibility and responsiveness',
    ],
    learnings: [
      'Advanced CSS Grid and Flexbox techniques',
      'JavaScript DOM manipulation patterns',
      'Performance optimization for image-heavy sites',
    ],
    featured: false,
    order: 5,
    tags: ['Real Estate', 'Frontend', 'Responsive Design'],
    isOpenSource: false,
  },
  {
    id: '6',
    title: 'E-Commerce Mobile App (React Native)',
    slug: 'ecommerce-mobile-app',
    shortDescription: 'Cross-platform mobile e-commerce app with seamless shopping experience',
    description: 'Feature-rich mobile e-commerce application built with React Native offering product browsing, cart management, secure checkout, and order tracking on iOS and Android.',
    longDescription: `A cross-platform mobile application delivering a native shopping experience for both iOS and Android users.
The app features smooth navigation, product discovery with search and filters, wishlist functionality, shopping cart with real-time updates, and secure payment integration. Push notifications keep users informed about orders, offers, and new arrivals.
Implemented with performance optimization for smooth scrolling through large product catalogs, offline capability for browsing, and secure authentication.`,
    technologies: ['React Native', 'Expo', 'Redux', 'React Navigation', 'Axios', 'AsyncStorage', 'Push Notifications'],
    featuredTechnologies: ['React Native', 'Expo', 'Redux'],
    role: 'Mobile App Developer',
    status: 'Completed',
    category: 'Mobile',
    startDate: '2024-07-01',
    endDate: '2024-09-30',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
        alt: 'E-commerce mobile app',
        isFeatured: true,
        caption: 'Cross-platform mobile shopping experience',
      },
    ],
    contributions: [
      'Developed cross-platform app for iOS and Android',
      'Implemented smooth navigation with React Navigation',
      'Built product catalog with infinite scroll',
      'Created shopping cart with persistent storage',
      'Integrated secure payment processing',
      'Implemented push notifications for order updates',
      'Optimized performance for smooth user experience',
    ],
    challenges: [
      'Ensuring consistent UI/UX across iOS and Android',
      'Optimizing performance for large product catalogs',
      'Handling offline scenarios and data synchronization',
    ],
    learnings: [
      'React Native performance optimization techniques',
      'Platform-specific implementation strategies',
      'Mobile app state management patterns',
    ],
    featured: true,
    order: 6,
    tags: ['Mobile', 'React Native', 'E-commerce', 'Cross-platform'],
    isOpenSource: false,
  },
  {
    id: '7',
    title: 'Inventory Management Mobile App',
    slug: 'inventory-mobile-app',
    shortDescription: 'Mobile inventory management solution with real-time stock updates and reporting',
    description: 'Cross-platform mobile application for inventory management featuring stock tracking, supplier management, barcode scanning, and comprehensive reporting built with React Native.',
    longDescription: `A mobile-first approach to inventory management, enabling businesses to manage stock on the go.
The application provides real-time inventory tracking, barcode scanning for quick item lookup and updates, supplier management with contact information, and detailed reporting capabilities. Offline mode ensures functionality even without internet connectivity, with automatic synchronization when connected.
Features include low-stock alerts, order management, and multi-location inventory support.`,
    technologies: ['React Native', 'Expo', 'SQLite', 'React Navigation', 'Expo Camera', 'AsyncStorage'],
    featuredTechnologies: ['React Native', 'Expo', 'SQLite'],
    role: 'Mobile App Developer',
    status: 'Completed',
    category: 'Mobile',
    startDate: '2025-05-01',
    endDate: '2025-08-31',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1200',
        alt: 'Inventory mobile app',
        isFeatured: true,
        caption: 'Mobile inventory management interface',
      },
    ],
    contributions: [
      'Developed cross-platform mobile app with React Native',
      'Implemented barcode scanning with Expo Camera',
      'Built offline-first architecture with SQLite',
      'Created real-time stock tracking system',
      'Developed supplier management module',
      'Implemented automated low-stock alerts',
      'Built comprehensive reporting with export functionality',
      'Created data synchronization mechanism',
    ],
    challenges: [
      'Implementing reliable  functionality',
      'Handling data synchronization conflicts',
      'Optimizing barcode scanning performance',
    ],
    learnings: [
      'Offline-first mobile app architecture',
      'SQLite database management in React Native',
      'Camera API integration and optimization',
    ],
    featured: false,
    order: 7,
    tags: ['Mobile', 'React Native', 'Inventory'],
    isOpenSource: false,
  },
]

// Helper functions
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured).sort((a, b) => a.order - b.order)

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)

export const getProjectsByCategory = (category: string) =>
  projects.filter((project) => project.category === category)

export const getProjectCategories = () =>
  [...new Set(projects.map((project) => project.category))]

export const getAllProjectSlugs = () =>
  projects.map((project) => project.slug)
