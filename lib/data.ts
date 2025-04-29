import { Service, Project, Testimonial, TeamMember, } from "@/types";
import { Globe, Brain, Blocks, Gamepad2, Smartphone, BarChart3 } from "lucide-react"
export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
    icon: "Globe",
    badgeText: "Frontend & Backend",
    Features: [
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Web Application Development",
      "Website Maintenance & Support"
    ]
  },
  {
    id: 2,
    title: "AI Development",
    description:
      "Intelligent solutions using machine learning and artificial intelligence to automate processes and gain insights.",
    icon: "Brain",
    badgeText: "ML & AI",
    Features: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "AI Chatbots and Virtual Assistants",
      "Predictive Analytics",
      "AI Integration for Business Automation"
    ]
  },
  {
    id: 3,
    title: "Blockchain Development",
    description: "Secure and transparent blockchain applications, smart contracts, and decentralized solutions.",
    icon: "Blocks",
    badgeText: "Web3",
    Features: [
      "Smart Contract Development",
      "Decentralized App (DApp) Development",
      "Blockchain Consulting",
      "Cryptocurrency Wallet Development",
      "NFT Marketplace Development",
      "Private Blockchain Solutions"
    ]
  },
  {
    id: 4,
    title: "Game Development",
    description:
      "Engaging and immersive gaming experiences across multiple platforms with cutting-edge graphics and gameplay.",
    icon: "Gamepad2",
    badgeText: "Interactive",
    Features: [
      "2D & 3D Game Development",
      "Mobile Game Development",
      "AR/VR Game Development",
      "Game UI/UX Design",
      "Multiplayer Game Solutions",
      "Game Testing and QA"
    ]
  },
  {
    id: 5,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications designed for seamless user experience on all devices.",
    icon: "Smartphone",
    badgeText: "Mobile",
    Features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-platform App Development",
      "App Maintenance & Support",
      "UI/UX Design for Mobile Apps",
      "Performance Optimization"
    ]
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to increase visibility, engagement, and conversion rates.",
    icon: "BarChart3",
    badgeText: "Growth",
    Features: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Content Marketing",
      "PPC (Pay Per Click) Advertising",
      "Email Marketing Campaigns",
      "Brand Strategy and Consulting"
    ]
  }
]


export const projects: Project[] = [
  {
    id: "1",
    title: "FinTech Dashboard",
    description: "A comprehensive financial analytics platform with real-time data visualization and predictive insights.",
    image: "https://images.pexels.com/photos/7876303/pexels-photo-7876303.jpeg",
    category: "Web",
    slug: "fintech-dashboard",
  },
  {
    id: "2",
    title: "MediTrack App",
    description: "A healthcare mobile application for patients to track medications, appointments, and health metrics.",
    image: "https://images.pexels.com/photos/6347920/pexels-photo-6347920.jpeg",
    category: "Mobile",
    slug: "meditrack-app",
  },
  {
    id: "3",
    title: "CryptoChain Platform",
    description: "A secure blockchain platform for cryptocurrency trading with smart contract integration.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
    category: "Blockchain",
    slug: "cryptochain-platform",
  },
  {
    id: "4",
    title: "AI Content Generator",
    description: "An intelligent content creation tool that generates optimized marketing copy based on user inputs.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    category: "AI",
    slug: "ai-content-generator",
  },
  {
    id: "5",
    title: "E-commerce Redesign",
    description: "A complete overhaul of an e-commerce platform with improved UX, faster checkout, and personalized recommendations.",
    image: "https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg",
    category: "Web",
    slug: "ecommerce-redesign",
  },
  {
    id: "6",
    title: "Supply Chain Tracker",
    description: "An end-to-end supply chain management system with real-time tracking and blockchain verification.",
    image: "https://images.pexels.com/photos/7203727/pexels-photo-7203727.jpeg",
    category: "Blockchain",
    slug: "supply-chain-tracker",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "NexaTech Solutions",
    content: "Working with Zappinzy Technologies transformed our digital presence. Their innovative approach and technical expertise exceeded our expectations. The team delivered on time and within budget.",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Quantum Innovations",
    content: "Zappinzy built our mobile app from scratch and the results were outstanding. Their attention to detail and focus on user experience made all the difference. Highly recommended for any tech project!",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: "3",
    name: "Emma Williams",
    role: "CEO",
    company: "Elevate Digital",
    content: "The blockchain solution that Zappinzy created has revolutionized our business operations. Their team's expertise in emerging technologies is unmatched. A pleasure to work with from start to finish.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "With 15+ years in tech innovation, Alex leads Zappinzy's vision to transform businesses through cutting-edge digital solutions.",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "CTO",
    bio: "Priya brings extensive expertise in emerging technologies, driving Zappinzy's technical strategy and innovation pipeline.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Lead Developer",
    bio: "With expertise in multiple programming languages and frameworks, Marcus ensures our technical implementations are flawless.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    id: "4",
    name: "Olivia Chen",
    role: "UX/UI Director",
    bio: "Olivia combines artistic vision with user-centric design principles to create intuitive and engaging digital experiences.",
    avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
  },
];