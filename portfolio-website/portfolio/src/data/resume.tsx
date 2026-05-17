import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tushar Tyagi",
  initials: "TT",
  url: "https://github.com/01tushar26",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Backend Engineer with hands-on experience building scalable REST APIs, microservices, and AI-powered systems. I specialise in backend development with Java and Spring Boot, cloud-native deployments on AWS, and AI application development.",
  summary:
    "Backend Engineer passionate about building production-grade systems. Currently working on scalable microservices and building **[DevHive](https://github.com/01tushar26/devhive)**, a developer collaboration platform. I specialise in backend development with Java and Spring Boot, cloud-native deployments, and AI-powered application development.",
  avatarUrl: "/me.jpg",
  skills: [
     "Java",
    
    "Spring Boot",
    "Spring AI",
    "Spring",
    "JavaScript",
    "React.js",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
  
    "Microservices",
    "JUnit",
    "Mockito",
    "Jenkins",
    "Flyway",
    "RAGs",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "tushartyagi2601@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/01tushar26",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tushartyagi2601/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tushartyagi2601",
        icon: Icons.x,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "",
        icon: Icons.calendar,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:tushartyagi2601@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "THDC India Limited",
      href: "https://thdc.co.in/",
      badges: "",
      location: "Rishikesh, India",
      title: "Intern",
      logoUrl: "/thdc.png",
      start: "Jul 2025",
      end: "Aug 2025",
      description:
        "Worked on cybersecurity and web development projects. Developed applications using React.js with MVC architecture. Gained experience in secure coding practices and deployment workflows.",
    },
    // {
    //   company: "Computer Market Hub",
    //   href: "https://computermarkethub.com",
    //   badges: [],
    //   location: "Remote",
    //   title: "Artificial Intelligence Intern",
    //   logoUrl: "/cmhlogo.jpeg",
    //   start: "August 2024",
    //   end: "December 2024",
    //   description:
    //     "• Spearheaded Jess chatbot for Jessup Cellars, achieving 78% user satisfaction\n• Orchestrated data pipelines processing 2K+ daily data points, improving model performance by 40%\n• Architected AI sentiment analysis system processing 5K+ Hebrew posts with 87% accuracy\n• Delivered 3 specialized AI agents, reducing manual processing time by 35%",
    // },
  ],
  education: [
    {
      school: "Govind Ballabh Pant Institute of Engineering and Technology",
      href: "",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/gbpiet.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "BookMyStay",
      href: "https://github.com/01tushar26/BookMyStay",
      dates: "2024",
      active: true,
      description:
        "Hotel booking backend with dynamic pricing via Decorator Pattern, cron-based inventory updates, JWT authentication, role-based authorization, Stripe payments, API rate limiting with Bucket4j, Flyway migrations, and monitoring via Spring Boot Actuator.",
      technologies: [
        "Spring Boot",
        "PostgreSQL",
        "JPQL",
        "Bucket4j",
        "Flyway",
        "JWT",
        "Stripe",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/01tushar26/BookMyStay",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Learnify",
      href: "https://github.com/01tushar26/Learnify_Major",
      dates: "2024",
      active: true,
      description:
        "AI-powered learning platform with a RAG pipeline — document chunking, embeddings, and metadata-based retrieval. Features AI quiz generation using vector search and LLM prompting with ~3s latency. React frontend with PDF upload, chat, and quiz interface.",
      technologies: [
        "Spring Boot",
        "Spring AI",
        "pgVector",
        "PostgreSQL",
        "Docker",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/01tushar26/Learnify_Major",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Code-Buddy",
      href: "https://github.com/01tushar26/ResearchAssistant",
      dates: "2024",
      active: true,
      description:
        "AI-powered Chrome Extension for code summarization and refactoring. Polymorphic AI service layer with Spring Profiles for flexible inference routing. Structured API responses with global exception handling.",
      technologies: [
        "Spring Boot",
        "Ollama",
        "HuggingFace",
        "Chrome Extension",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/01tushar26/ResearchAssistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "YouTube SEO Tags Generator",
      href: "https://github.com/01tushar26/Youtube_seo_thumbnails",
      dates: "2024",
      active: true,
      description:
        "Web app to generate SEO tags using YouTube Data API v3. Server-side rendering with Thymeleaf and a thumbnail preview/download feature.",
      technologies: [
        "Spring Boot",
        "Thymeleaf",
        "Tailwind",
        "YouTube Data API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/01tushar26/Youtube_seo_thumbnails",
          icon: <Icons.github className="size-3" />,
        },
        //  {
        //   type: "Website",
        //   href: "https://aixai-mkfm.onrender.com/",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/seo.png",
      video: "",
    },
  ],
  
  hackathons: [
    {
      title: "Smart India Hackathon (SIH)",
      dates: "August 25th - 26th, 2022",
      location: "India",
      description:
        "Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams. Developed a comprehensive solution for real-time sewage monitoring and alerting.",
      image: "",
      links: [],
    },
    {
      title: "Hack JKLU",
      dates: "March 3rd - 4th, 2023",
      location: "India",
      description:
        "Conceptualised and prototyped Blockchain-based eVault system with 256-bit encryption, earning 3rd place recognition for innovation. Built a secure digital vault solution leveraging blockchain technology for enhanced data protection.",
      image: "",
      win: "3rd Place Winner",
      links: [],
    },
  ],
} as const;
