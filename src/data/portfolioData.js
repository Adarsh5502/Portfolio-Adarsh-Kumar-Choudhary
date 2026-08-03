export const personalInfo = {
  name: "Adarsh Kumar Choudhary",
  title: "DevOps & Cloud Engineer",
  roles: [
    "DevOps Engineer",
    "Cloud Enthusiast",
    "Platform Engineering Learner",
    "Infrastructure Automation"
  ],
  phone: "8987662353",
  email: "adarshchoudhary6@gmail.com",
  linkedin: "https://linkedin.com/in/adarsh-kumar-choudhary-035153260",
  github: "https://github.com/Adarsh5502",
  location: "Bhubaneswar, Odisha / Jamshedpur, Jharkhand",
  education: {
    university: "Silicon University",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "7.76 / 10",
    timeline: "Sept. 2023 – June 2027",
    school: "DAV Public School, NIT Campus",
    schoolTimeline: "2007 – 2022",
    schoolDetails: "Class 10 & 12 (CBSE), Jamshedpur, Jharkhand"
  },
  aboutBio: `I am a Computer Science and Engineering student at Silicon University passionate about Cloud Computing, DevOps, Infrastructure Automation, and Platform Engineering. With hands-on experience building production-grade CI/CD pipelines, containerizing applications with Docker, orchestrating Kubernetes clusters on AWS (EKS) and Azure, and writing modular Infrastructure-as-Code with Terraform, I bridge the gap between application development and scalable cloud operations.`,
  highlights: [
    "AWS & DevOps Industrial Training Certified",
    "Hands-on with EKS, ArgoCD GitOps, & Sealed Secrets",
    "Modular IaC using Terraform & Terratest validation",
    "DevSecOps scanning with tfsec and Trivy"
  ]
};

export const skillsCategories = [
  {
    title: "DevOps & CI/CD",
    icon: "Workflow",
    description: "Automation, containerization, and GitOps workflows",
    skills: [
      { name: "Docker", level: 90, icon: "Container" },
      { name: "Kubernetes (EKS)", level: 85, icon: "Boxes" },
      { name: "Terraform (Modular IaC)", level: 85, icon: "FileCode" },
      { name: "ArgoCD", level: 80, icon: "GitMerge" },
      { name: "GitHub Actions", level: 90, icon: "PlaySquare" },
      { name: "Helm", level: 80, icon: "Anchor" },
      { name: "AWS CodePipeline / CodeBuild", level: 82, icon: "Cpu" },
      { name: "Git", level: 92, icon: "GitBranch" },
      { name: "Jenkins", level: 75, icon: "Settings" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    description: "Multi-cloud architecture, compute, and networking",
    skills: [
      { name: "AWS (EC2, ECS, EKS, S3, IAM)", level: 88, icon: "Cloud" },
      { name: "AWS VPC & Subnets", level: 85, icon: "Network" },
      { name: "AWS Load Balancers & CloudWatch", level: 85, icon: "Activity" },
      { name: "Azure (VNet, App Gateway)", level: 78, icon: "CloudSun" },
      { name: "Azure Blob & File Shares", level: 75, icon: "Database" },
      { name: "Azure Monitor & VMs", level: 78, icon: "Server" }
    ]
  },
  {
    title: "Security & Testing",
    icon: "ShieldCheck",
    description: "DevSecOps scanning, secrets management, and automated IaC testing",
    skills: [
      { name: "Trivy (Vulnerability Scanning)", level: 85, icon: "Shield" },
      { name: "tfsec (Security Scanner for IaC)", level: 82, icon: "Lock" },
      { name: "Kubernetes Sealed Secrets", level: 80, icon: "Key" },
      { name: "Terratest (Go-based IaC testing)", level: 78, icon: "CheckCircle" }
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code",
    description: "Core software development and scripting",
    skills: [
      { name: "Java", level: 85, icon: "Code2" },
      { name: "Python", level: 82, icon: "Terminal" },
      { name: "JavaScript", level: 80, icon: "FileJson" },
      { name: "SQL", level: 82, icon: "Database" },
      { name: "C", level: 78, icon: "Cpu" },
      { name: "HTML / CSS", level: 88, icon: "Layout" }
    ]
  },
  {
    title: "Databases & OS",
    icon: "Database",
    description: "Data persistence and server operating systems",
    skills: [
      { name: "Linux (Ubuntu / RedHat / Shell)", level: 90, icon: "Terminal" },
      { name: "Nginx", level: 82, icon: "Globe" },
      { name: "MySQL", level: 82, icon: "Database" },
      { name: "PostgreSQL", level: 80, icon: "Database" },
      { name: "MongoDB", level: 78, icon: "Server" }
    ]
  },
  {
    title: "Networking",
    icon: "Network",
    description: "Enterprise network topology and security protocols",
    skills: [
      { name: "VPC & Subnets", level: 88, icon: "Network" },
      { name: "DNS & Route Tables", level: 85, icon: "Globe" },
      { name: "Load Balancers (ALB/NLB)", level: 85, icon: "Sliders" },
      { name: "Networking Fundamentals (TCP/IP, HTTP/S)", level: 88, icon: "Wifi" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "devsecops-eks",
    title: "DevSecOps Pipeline with GitHub Actions & Kubernetes",
    subtitle: "Enterprise GitOps & Security-First Automated Deployment",
    category: "DevSecOps",
    year: "2025",
    description: "Built an end-to-end DevSecOps workflow featuring automated security scanning with tfsec and Trivy. Provisioned an AWS EKS cluster with OIDC provider, IAM roles, and Helm-based Load Balancer Controller. Implemented Kubernetes Sealed Secrets for encrypted secret management prior to deployment and automated releases via ArgoCD GitOps auto-sync.",
    longDescription: `This project showcases a zero-trust, production-ready DevSecOps pipeline deployed on Amazon EKS. 

Highlights & Architecture:
• Infrastructure Provisioning: Automated EKS cluster creation with AWS OIDC authentication, node groups, and IAM roles for service accounts (IRSA).
• DevSecOps Security Matrix: Integrated tfsec in GitHub Actions to catch misconfigurations in IaC before apply, and Trivy for container image vulnerability scanning.
• Secret Encryption: Integrated Bitnami Sealed Secrets to safely check encrypted secret manifests into Git repositories.
• Continuous Delivery: Deployed ArgoCD for declarative GitOps synchronization, enabling self-healing cluster states and zero-downtime rolling updates.`,
    tags: ["AWS EKS", "ArgoCD", "GitHub Actions", "Helm", "Sealed Secrets", "tfsec", "Trivy", "Kubernetes", "Docker"],
    metrics: [
      { label: "Security Scans", value: "Automated (tfsec + Trivy)" },
      { label: "Deployment Sync", value: "GitOps (ArgoCD)" },
      { label: "Cluster Provider", value: "AWS EKS" }
    ],
    githubUrl: "https://github.com/Adarsh5502",
    liveUrl: "#",
    featured: true,
    image: "devsecops_pipeline"
  },
  {
    id: "terraform-cicd",
    title: "Terraform-Based CI/CD Pipeline Deployment",
    subtitle: "Modular Infrastructure-as-Code for AWS ECS Fargate",
    category: "Cloud & IaC",
    year: "2025",
    description: "Designed and deployed a full CI/CD pipeline using Terraform with a clean modular architecture (VPC, ECS, ALB, IAM, CodePipeline, CodeBuild). Containerized a React + Vite frontend application using Docker and deployed it to ECS Fargate behind an ALB. Implemented Terratest in Go to validate Terraform modules prior to live infrastructure provisioning.",
    longDescription: `A comprehensive Infrastructure-as-Code solution building an automated serverless container platform on AWS.

Highlights & Architecture:
• Modular IaC: Decoupled Terraform modules for Custom VPC (Public/Private Subnets), Application Load Balancer (ALB), ECS Cluster & Fargate Tasks, and IAM Security Roles.
• Native AWS CI/CD: Automated build and deployment pipeline using AWS CodePipeline and AWS CodeBuild triggered on Git commits.
• Automated Validation: Used Terratest (Go) to run unit and integration tests against Terraform modules before applying infrastructure to staging environments.
• Verified Endpoint: Configured health checks and route routing via ALB public DNS endpoint.`,
    tags: ["Terraform", "AWS ECS Fargate", "AWS ALB", "CodePipeline", "CodeBuild", "Docker", "Terratest", "GitHub"],
    metrics: [
      { label: "Architecture", value: "Modular IaC (VPC + ECS)" },
      { label: "Testing", value: "Terratest Automated Rules" },
      { label: "Deployment Target", value: "AWS ECS Fargate" }
    ],
    githubUrl: "https://github.com/Adarsh5502",
    liveUrl: "#",
    featured: true,
    image: "terraform_cicd"
  },
  {
    id: "azure-ha-web-app",
    title: "Azure Highly Available Web Application",
    subtitle: "Fault-Tolerant Enterprise Infrastructure on Microsoft Azure",
    category: "Cloud & IaC",
    year: "2024",
    description: "Built a production-style Azure infrastructure using Virtual Networks (VNet), Application Gateway, Azure Load Balancers, Azure DNS, Blob Storage, Azure Monitor, File Shares, Snapshots, and Virtual Machines to ensure 99.99% availability and automated failover.",
    longDescription: `Designed a multi-tier, highly available web architecture on Microsoft Azure.

Highlights & Architecture:
• Network Isolation: Built dedicated Azure Virtual Networks with private app subnets and public gateway subnets.
• Layer 7 Traffic Routing: Configured Azure Application Gateway with SSL termination and path-based routing.
• Redundancy & Recovery: Set up VM Availability Sets, automated Azure Disk Snapshots, and Azure File Shares for shared state across web servers.
• Observability: Configured Azure Monitor and Log Analytics workspace with automated threshold alerts for CPU, memory, and bandwidth utilization.`,
    tags: ["Azure VNet", "Application Gateway", "Azure Load Balancer", "Azure DNS", "Blob Storage", "Azure Monitor", "Azure VMs"],
    metrics: [
      { label: "Availability Tier", value: "Multi-Zone High Availability" },
      { label: "Traffic Manager", value: "Azure Application Gateway" },
      { label: "Storage", value: "Azure Blob & File Shares" }
    ],
    githubUrl: "https://github.com/Adarsh5502",
    liveUrl: "#",
    featured: true,
    image: "azure_cloud"
  },
  {
    id: "finsphere",
    title: "FinSphere – Financial Analytics Platform",
    subtitle: "Modern Web Application for Real-Time Wealth & Expense Tracking",
    category: "Full Stack",
    year: "2024",
    description: "A sleek financial management platform providing intuitive expense tracking, real-time portfolio analytics, dynamic chart visualizers, budget alerts, and secure JWT authentication.",
    longDescription: `FinSphere empowers users to take control of their finances with clean visualizations and instant analytics. Built with React and interactive charts, it renders responsive expense breakdowns and investment trends seamlessly across mobile and desktop devices.`,
    tags: ["React", "JavaScript", "Tailwind CSS", "Chart.js", "Node.js", "Express", "MongoDB"],
    metrics: [
      { label: "Frontend", value: "React + Tailwind CSS" },
      { label: "Visualizations", value: "Interactive Chart.js" },
      { label: "Type", value: "Fintech Web App" }
    ],
    githubUrl: "https://github.com/Adarsh5502",
    liveUrl: "#",
    featured: false,
    image: "finsphere_app"
  },
  {
    id: "quizzard",
    title: "Quizzard – Interactive Learning Platform",
    subtitle: "Gamified Quiz Web Application with Dynamic Timer & Leaderboards",
    category: "Full Stack",
    year: "2024",
    description: "Fast, dynamic React quiz application featuring customizable subject categories, instant score calculation, countdown timers, animated feedback, and detailed performance summaries.",
    longDescription: `Quizzard offers a fluid quiz experience with sleek Framer Motion card transitions, difficulty settings, and real-time score tracking. Designed for fast load times and clean UI responsiveness.`,
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript", "REST API"],
    metrics: [
      { label: "Framework", value: "React + Vite" },
      { label: "Animations", value: "Framer Motion" },
      { label: "UX", value: "Gamified Quiz Engine" }
    ],
    githubUrl: "https://github.com/Adarsh5502",
    liveUrl: "#",
    featured: false,
    image: "quizzard_app"
  }
];

export const certifications = [
  {
    id: "devops-masters",
    title: "DevOps Masters – Industrial Training Program",
    issuer: "Ingeneous Tech World",
    date: "June 2025 – July 2025",
    location: "Online",
    badgeColor: "from-cyan-500 to-blue-600",
    skills: ["CI/CD Pipelines", "Docker", "Kubernetes (EKS)", "Terraform", "ArgoCD", "Sealed Secrets", "tfsec", "Trivy"],
    highlights: [
      "Completed intensive 1-month DevOps training covering containerization, Kubernetes orchestration, and IaC.",
      "Developed production-grade DevSecOps pipeline with automated security scanning (tfsec & Trivy) on AWS EKS.",
      "Implemented ArgoCD GitOps auto-synchronization and Sealed Secrets management."
    ]
  },
  {
    id: "aws-masters",
    title: "AWS Masters – Industrial Training Program",
    issuer: "Ingeneous Tech World",
    date: "2024",
    location: "Online",
    badgeColor: "from-amber-500 to-orange-600",
    skills: ["AWS EC2", "AWS ECS", "AWS EKS", "AWS VPC", "Subnets & Route Tables", "Load Balancers", "IAM", "CloudWatch"],
    highlights: [
      "Mastered core AWS compute, networking, and container services.",
      "Architected custom VPC topologies with public/private subnet isolation, NAT Gateways, and ALB configurations.",
      "Deployed containerized applications to ECS Fargate & EKS with CloudWatch metric alarms."
    ]
  },
  {
    id: "nptel-cloud",
    title: "NPTEL Technical Certification",
    issuer: "NPTEL / IIT",
    date: "2024",
    location: "Online",
    badgeColor: "from-emerald-500 to-teal-600",
    skills: ["Cloud Computing", "Distributed Systems", "Virtualization", "Software Engineering"],
    highlights: [
      "Completed accredited course covering cloud architectural patterns, virtualization, and distributed systems fundamentals.",
      "Earned official certification with distinction in core computer science competencies."
    ]
  }
];

export const educationTimeline = [
  {
    institution: "Silicon University",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Bhubaneswar, Odisha",
    period: "Sept. 2023 – June 2027",
    score: "CGPA: 7.76 / 10",
    status: "Expected Graduation: June 2027",
    description: "Focusing on Cloud Computing, Computer Networks, Operating Systems, Database Management Systems, Data Structures & Algorithms, and Software Engineering.",
    achievements: [
      "Specialized coursework in Cloud Computing & Distributed Systems",
      "Active member of Technical & Coding Societies",
      "Built multiple production-grade DevOps & Cloud IaC projects"
    ]
  },
  {
    institution: "DAV Public School, NIT Campus",
    degree: "Class 10 & 12 (CBSE)",
    location: "Jamshedpur, Jharkhand",
    period: "2007 – 2022",
    score: "CBSE Board Completed",
    status: "Completed",
    description: "Completed Senior Secondary Education with focus on Physics, Chemistry, Mathematics, and Computer Science.",
    achievements: [
      "Solid foundation in Mathematics, Logic, and Computer Science fundamentals",
      "Participated in regional Science & Technology competitions"
    ]
  }
];
