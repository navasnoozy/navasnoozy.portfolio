// src/data/projectsData.ts
import {
  Brush,
  Code,
  Dataset,
  Language,
  PlayCircle,
} from "@mui/icons-material";
import {
  gamehub_thumbnail,
  issuetracker_thumbnail,
  microservice_thumbnail,
  millions_thumbnail,
  taskmanager_thumbnail,
  usermanagement_thumbnail,
} from "../components/projects/thumbnails";

export interface Technology {
  name: string;
  color: string;
}

export interface ProjectLink {
  type: "github" | "live" | "demo" | "video" | "linkedin";
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: "web" | "mobile" | "fullstack" | "design" | "video";
  image: string;
  technologies: Technology[];
  featured: boolean;
  year: string;
  duration?: string;
  role: string;
  links: ProjectLink[];
  highlights: string[];
  gradient: string;
}

export const projectCategories = [
  {
    value: "all",
    label: "All Projects",
    icon: Code,
    gradient: "linear-gradient(90deg, #64ffda 0%, #a855f7 100%)",
  },
  {
    value: "web",
    label: "Web Apps",
    icon: Language,
    gradient: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
  },
  {
    value: "fullstack",
    label: "Full Stack",
    icon: Dataset,
    gradient: "linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)",
  },
  {
    value: "design",
    label: "UI/UX Design",
    icon: Brush,
    gradient: "linear-gradient(90deg, #f59e0b 0%, #dc2626 100%)",
  },
  {
    value: "video",
    label: "Video Projects",
    icon: PlayCircle,
    gradient: "linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)",
  },
];

export const projectsData: Project[] = [
  {
    id: "millionsclubofficial",
    title: "E-Commerce WebApp",
    subtitle: "A Microservice Project",
    description:
      "Highly scalable microservices-based e-commerce platform features independent, containerised services for user authentication, product management, order processing, client handling, and payment processing.",
    longDescription:
      "A comprehensive Highly scalable microservices-based e-commerce platform, built with Docker, Kubernetes, Kafka, Ingress-NGINX, React, and Node.js, features real-time inventory management, secure payment processing via Stripe, and a powerful admin dashboard.",
    category: "fullstack",
    image: microservice_thumbnail,
    featured: true,
    year: "2025",
    // duration: '3 months',
    role: "Full Stack Developer",
    technologies: [
      { name: "Docker", color: "#1D63ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Kafka", color: "#963F7F" },
      { name: "Ingress NGINX", color: "#009639" },
      { name: "React", color: "#61DBFB" },
      { name: "Node.js", color: "#215732" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Stripe", color: "#5433FF" },
      { name: "Redux", color: "#764ABC" },
      { name: "Material UI", color: "#007FFF" },
      { name: "Skaffold", color: "#1D62F6" },
      { name: "Github Actions", color: "#764ABC" },
      { name: "Digital Ocean", color: "#0080FF" },
    ],
    links: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/posts/navasnoozy_%F0%9D%97%97%F0%9D%97%B2%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%BC%F0%9D%98%86%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%97%BD%F0%9D%97%BF%F0%9D%97%BC%F0%9D%97%B1%F0%9D%98%82%F0%9D%97%B0%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%BC%F0%9D%97%BB-%F0%9D%97%BF%F0%9D%97%B2%F0%9D%97%AE%F0%9D%97%B1%F0%9D%98%86-activity-7371132178359037952-n2Xr",
        label: "Linkedin Post",
      },
      {
        type: "github",
        url: "https://github.com/navasnoozy/MillionsClubOfficial",
        label: "Source Code",
      },
    ],
    highlights: [
      "Microservices Architecture & Scalability",
      "99.9% uptime with auto-scaling",
      "Implemented industry best practices",
      "Event-driven communication with Kafka",
      "Automated CI/CD pipeline for seamless deployments",
      "Created reusable NPM package for common functionalities",
      "Advanced error handling for consistent API responses",
      "50+ API endpoints",
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },

  {
    id: "issuetracker",
    title: "Issue Tracker & Management System",
    subtitle: "Next js Project",
    description:
      "Issue tracking & Management System with live chat Rooms for collaboration and team coordination.",
    longDescription:
      "A full-stack Issue Tracker application built with Next.js 15, React 19, and TypeScript, featuring secure authentication via NextAuth with Google/GitHub, role-based access control, and robust form validation using Zod and React Hook Form. Integrated with Prisma, React Query, and Recharts, it delivers efficient issue tracking with filtering, sorting, pagination, and visual dashboards. Real-time collaboration is enabled through a seamlessly integrated Socket.IO Chatroom. Deployed on Render, the app leverages the latest Next.js App Router architecture",
    category: "web",
    image: issuetracker_thumbnail,
    featured: true,
    year: "2025",
    duration: "A month",
    role: "FullStack Developer",
    technologies: [
      { name: "Next.js 15", color: "#FFFFFF" },
      { name: "React 19", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Prisma", color: "#5724F6" },
      { name: "NextAuth", color: "#346DF1" },
      { name: "React Hook Form", color: "#EC5990" },
      { name: "Zod", color: "#3E67B1" },
      { name: "React Query", color: "#FF4154" },
      { name: "Radix UI", color: "#3052F6" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "Nodemailer", color: "#3C8C9E" },
      { name: "Recharts", color: "#22B5BF" },
      { name: "Socket.IO", color: "#FFFFFF" },
      { name: "Render", color: "#2DCAB0" },
    ],
    links: [
      {
        type: "live",
        url: "https://issue-tracker-7sbf.onrender.com/",
        label: "Try Demo",
      },
      {
        type: "video",
        url: "https://www.youtube.com/playlist?list=PL_YQ4CmZlt690jItfN0JL88M-IF_YgL1x",
        label: "Watch Demo",
      },

      {
        type: "github",
        url: "https://github.com/navasnoozy/issue-tracker",
        label: "Source Code",
      },
    ],
    highlights: [
      "Built with Next.js 15 App Router & React 19",
      "Secure authentication with NextAuth (Google & GitHub)",
      "Role-based access control with Prisma integration",
      "Form validation using Zod + React Hook Form",
      "Optimistic UI updates with React Query",
      "Integrated Recharts dashboards for visual insights",
      "Real-time Chatroom powered by Socket.IO",
      "Email notifications with Nodemailer",
      "Deployed on Render Cloud Platform",
    ],

    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },

  {
    id: "gamehub",
    title: "GameHub",
    subtitle: "React Project",
    description:
      "A dynamic Game Discovery platform built with React and TypeScript, featuring responsive UI, advanced filtering, search, and sorting functionalities.",
    longDescription:
      "A fully responsive and dynamic GameHub platform built with React, TypeScript, Chakra UI, and Vite, designed to let users discover games by genre, platform, and multiple sorting criteria. The application leverages React Router for seamless navigation, Axios and React Query for efficient data fetching with cache management. Advanced state management is achieved using Zustand and React Context. The platform includes infinite scrolling, skeleton loaders, dynamic rendering, and UI theming with Chakra UI v3. Deployed on Vercel, the project highlights expertise in modern React hooks, reusable component patterns, and optimized state management for high-performance applications.",
    category: "web",
    image: gamehub_thumbnail,
    featured: false,
    year: "2024",
    role: "Frontend Developer",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Chakra UI", color: "#319795" },
      { name: "Vite", color: "#646CFF" },
      { name: "Axios", color: "#671DDF" },
      { name: "Zustand", color: "#FFBF00" },
      { name: "React Query", color: "#FF4154" },
      { name: "React Router", color: "#CA4245" },
      { name: "Vercel", color: "#FFFFFF" },
    ],

    links: [
      {
        type: "demo",
        url: "https://gamehub-v2.vercel.app/",
        label: "Try Demo",
      },
      {
        type: "github",
        url: "https://github.com/navasnoozy/gamehubV2",
        label: "Source Code",
      },
    ],
    highlights: [
      "Responsive UI built with Chakra UI v3",
      "Game filtering by genre and platform",
      "Search and multi-criteria sorting",
      "Seamless navigation with React Router",
      "Optimized data fetching using React Query",
      "Advanced state management with Zustand & Context",
      "Infinite scrolling and dynamic rendering",
      "Skeleton loaders for smooth UX",
      "Custom theming and dark mode with Chakra UI",
      "Deployed on Vercel",
    ],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },

  {
    id: "taskmanager",
    title: "Task Manager",
    subtitle: "Building TypeScript foundation",
    description:
      "A task management app built with TypeScript and Vite, featuring task creation, search, updates, and deletion with a clean user experience.",

    longDescription:
      "A task management application developed with TypeScript and Vite, Users can add, search, update, and delete tasks, as well as clear all tasks with a single click. Each task is automatically timestamped with its creation date and time for better tracking. Built with a focus on type safety and developer productivity, By this project, I gained hands-on experience with TypeScript for type safety and learned how Vite enables a fast, modern development workflow, improving both productivity and code reliability.",

    category: "web",
    image: taskmanager_thumbnail,
    featured: false,
    year: "2024",
    role: "Frontend Developer",
    technologies: [
      { name: "TypeScript", color: "#3178C6" },
      { name: "Vite", color: "#646CFF" },
      { name: "JavaScript", color: "#FFBF00" },
    ],
    links: [
      {
        type: "live",
        url: "https://todolist-topaz-psi.vercel.app/",
        label: "View Live",
      },
      {
        type: "github",
        url: "https://github.com/navasnoozy/todolist",
        label: "Source code",
      },
    ],
    highlights: [
      "Dynamic task management: add, update, search, and delete tasks",
      "Clear all tasks with a single click",
      "Automatic timestamps for task creation",
      "Built with TypeScript for type safety and reliability",
      "Fast development experience using Vite",
      "Learned modern front-end tooling and TypeScript best practices",
    ],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: "nodejsproject",
    title: "E-Commerce WebApp ",
    subtitle: "Node.js, Express, MongoDB & EJS Project",
    description:
      "A complete E-commerce platform built with Node.js, Express, MongoDB, and EJS, featuring OTP and Google SSO authentication, dynamic product and user management, image handling, and integrated payment processing.",
    longDescription:
      "A complete e-commerce web application built with Node.js, Express, MongoDB, and EJS, implementing secure login with OTP (email & mobile) and Google SSO. The admin dashboard supports dynamic user and product management, including block, delete, edit, and advanced product category handling. Integrated Razorpay for seamless payments, Multer + Cropper.js for image upload and cropping, and SweetAlert for dynamic notifications. Deployed on AWS EC2, this project follows the MVC pattern, emphasizes dynamic content rendering, and showcases advanced JavaScript, Git, and problem-solving skills in a real-world full-stack application.",

    category: "web",
    image: millions_thumbnail,
    featured: false,
    year: "2024",
    role: "FulStack Developer",
    technologies: [
      { name: "Node.js", color: "#215732" },
      { name: "Express.js", color: "#FFFFFF" },
      { name: "MongoDB", color: "#78a579ff" },
      { name: "Mongoose", color: "#A5694F" },
       { name: "Bootstrap", color: "#7952B3" },
      { name: "EJS", color: "#A91E50" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Razorpay", color: "#FF3D00" },
      { name: "Twilio", color: "#F22F46" },
      { name: "SMTP", color: "#0072C6" },
      { name: "Cropper.js", color: "#37BC9B" },
      { name: "SweetAlert", color: "#FF6F61" },
      { name: "AWS EC2", color: "#FF9900" },
    ],

    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=Qzh7HDRIcVc",
        label: "View Live",
      },
      {
        type: "github",
        url: "https://github.com/navasnoozy/millionsclub",
        label: "Source code",
      },
    ],
    highlights: [
      "Secure login system with OTP (email & mobile) and Google SSO",
      "Admin dashboard for dynamic user and product management",
      "Product category management with subcategories",
      "Integrated Razorpay for payment processing",
      "Image upload and cropping with Multer & Cropper.js",
      "Dynamic flash notifications and SweetAlert integration",
      "Full MVC pattern implementation with Node.js & Express",
      "Deployed successfully on AWS EC2",
      "Hands-on experience with MongoDB and Mongoose",
      "Enhanced Git/GitHub workflow with branching and merging strategies",
    ],

    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },




//USER MANAGEMENT SYSTEM
  {
    id: "usermanagementsystem",
    title: "User Management System",
    subtitle: "Building JavaScript, Node JS & Express JS foundation",
    description:
      "AN user management platform with role-based access, secure authentication, and dashboard for both users and admins.",
    longDescription:
      "An User Management System built with Node.js, Express.js, MongoDB, Bootstrap and EJS, designed to streamline user and admin operations. The system features secure authentication, session management, password encryption using bcrypt, and robust validation for user input. Admins can manage users by adding, editing, deleting, or promoting them to admin, while users enjoy seamless registration, login, and dashboard access. Enhanced search functionality allows admins to quickly find users by name or email. Proper notifications provide feedback on login, registration, and administrative actions",

    category: "web",
    image: usermanagement_thumbnail,
    featured: false,
    year: "2024",
    role: "FulStack Developer",
    technologies: [
      { name: "Node.js", color: "#215732" },
      { name: "Express.js", color: "#000000" },
      { name: "MongoDB", color: "#47A248" },
      { name: "EJS", color: "#A91E50" },
      { name: "Bootstrap", color: "#7952B3" },
    ],
    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=j7nfKACGrmw",
        label: "View Live",
      },
      {
        type: "github",
        url: "https://github.com/navasnoozy/UserManagementSystem",
        label: "Source code",
      },
    ],
    highlights: [
      "Full authentication with user/admin login",
      "Role-based access control for admins and users",
      "User registration with secure password encryption using bcrypt",
      "Admin dashboard to add, edit, delete, and promote users",
      "Automatic random password generation for new users",
      "Search functionality for users by name or email",
      "Form validation and session management for secure operations",
      "Real-time notifications for login, registration, and admin actions",
      "Built with Node.js, Express.js, MongoDB, EJS, and Bootstrap",
    ],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },






  //Video
  {
    id: "video-portfolio",
    title: "Creative Video Portfolio",
    subtitle: "Motion Graphics Showcase",
    description:
      "Collection of professional video editing and motion graphics projects for various clients.",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    featured: false,
    year: "2025",
    duration: "Ongoing",
    role: "Video Editor",
    technologies: [
      { name: "DaVinci Resolve", color: "#FF6B00" },
    ],
    links: [
      { type: "video", url: "https://youtube.com", label: "Watch Reel" },
      { type: "live", url: "https://vimeo.com", label: "Portfolio" },
    ],
    highlights: [
      "Creative work",
      "4K production quality",
      "Motion graphics",
    ],
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];
