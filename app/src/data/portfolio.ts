export interface Skill {
  name: string;
  proficiency: number;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  field?: string;
  grade: string;
  period: string;
  location: string;
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  description: string;
  icon: string;
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "genai",
    label: "GenAI & LLMs",
    skills: [
      { name: "LangChain / LangGraph", proficiency: 95, tags: ["Agents", "RAG", "Chains", "Memory", "Conditional Routing"] },
      { name: "MCP & AI Agents", proficiency: 90, tags: ["FastMCP", "Tool Calling", "SSE", "Model Context Protocol"] },
      { name: "Vector Databases", proficiency: 88, tags: ["FAISS", "ChromaDB", "Pinecone", "Embeddings", "Semantic Search"] },
      { name: "LLM APIs", proficiency: 92, tags: ["OpenAI", "Gemini", "Groq", "Llama", "OpenRouter"] },
      { name: "Prompt Engineering", proficiency: 85, tags: ["Few-Shot", "Chain-of-Thought", "Structured Output", "System Prompts"] },
      { name: "HuggingFace", proficiency: 80, tags: ["Transformers", "Pipelines", "Spaces", "Datasets", "Sentence-Transformers"] },
    ],
  },
  {
    id: "ml",
    label: "ML & Deep Learning",
    skills: [
      { name: "PyTorch", proficiency: 88, tags: ["CNNs", "RNNs", "LSTMs", "Transfer Learning", "Custom Models"] },
      { name: "TensorFlow / Keras", proficiency: 82, tags: ["Model Building", "Transfer Learning", "MobileNet", "ResNet"] },
      { name: "Scikit-learn", proficiency: 90, tags: ["Classification", "Regression", "Clustering", "Preprocessing", "Pipelines"] },
      { name: "YOLO / Object Detection", proficiency: 85, tags: ["YOLOv11", "SAHI", "Inference", "Fine-tuning", "mAP"] },
      { name: "NLP / Transformers", proficiency: 88, tags: ["BERT", "DistilBERT", "Tokenization", "NER", "Sentiment Analysis"] },
      { name: "Computer Vision", proficiency: 80, tags: ["OpenCV", "Image Augmentation", "Segmentation", "U-Net", "Feature Extraction"] },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    skills: [
      { name: "Pandas / NumPy", proficiency: 95, tags: ["Data Wrangling", "Vectorization", "Aggregation", "Time Series"] },
      { name: "SQL", proficiency: 92, tags: ["MySQL", "PostgreSQL", "SQLite", "Joins", "Window Functions", "CTEs"] },
      { name: "EDA & Statistics", proficiency: 90, tags: ["Hypothesis Testing", "Correlation", "Distribution Analysis", "Outliers"] },
      { name: "A/B Testing", proficiency: 82, tags: ["Experiment Design", "Statistical Significance", "Funnel Analysis", "Cohort Analysis"] },
      { name: "Data Cleaning", proficiency: 92, tags: ["Missing Values", "Encoding", "Scaling", "Feature Engineering"] },
      { name: "Feature Engineering", proficiency: 85, tags: ["Selection", "Extraction", "Polynomial", "Domain Features"] },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    skills: [
      { name: "Python", proficiency: 95, tags: ["Scripting", "OOP", "Asyncio", "Data Processing", "ML Integration"] },
      { name: "FastAPI", proficiency: 88, tags: ["Async Endpoints", "Pydantic", "OpenAPI", "Dependency Injection"] },
      { name: "Flask", proficiency: 85, tags: ["REST APIs", "Authentication", "Session Management", "Templates"] },
      { name: "Streamlit", proficiency: 90, tags: ["Dashboards", "Widgets", "State Management", "Deployment"] },
      { name: "Django", proficiency: 70, tags: ["ORM", "Admin", "Templates", "Forms", "REST Framework"] },
      { name: "Docker", proficiency: 78, tags: ["Containers", "Compose", "Images", "Multi-stage Builds"] },
    ],
  },
  {
    id: "viz",
    label: "Visualization",
    skills: [
      { name: "Power BI", proficiency: 90, tags: ["DAX", "Power Query", "Dashboards", "KPIs", "Reports"] },
      { name: "Tableau", proficiency: 75, tags: ["Worksheets", "Dashboards", "Filters", "Calculated Fields"] },
      { name: "Matplotlib / Seaborn", proficiency: 88, tags: ["Statistical Plots", "Customization", "Subplots", "Heatmaps"] },
      { name: "Plotly", proficiency: 80, tags: ["Interactive Charts", "3D Plots", "Dash", "Animations"] },
      { name: "Excel", proficiency: 85, tags: ["Pivot Tables", "Power Query", "VLOOKUP", "Conditional Formatting", "Macros"] },
      { name: "Streamlit Charts", proficiency: 88, tags: ["Line Charts", "Bar Charts", "Maps", "Tables", "Metrics"] },
    ],
  },
  {
    id: "languages",
    label: "Languages & Tools",
    skills: [
      { name: "Python", proficiency: 95, tags: ["Primary Language", "Data Science", "ML", "Backend", "Scripting"] },
      { name: "SQL", proficiency: 92, tags: ["Queries", "Schema Design", "Optimization", "Procedures"] },
      { name: "JavaScript / TypeScript", proficiency: 70, tags: ["React", "ES6+", "Async", "DOM", "Node.js Basics"] },
      { name: "Bash / Shell", proficiency: 75, tags: ["Automation", "Git Hooks", "Cron", "System Commands"] },
      { name: "Git / GitHub", proficiency: 90, tags: ["Version Control", "Branching", "Pull Requests", "Actions", "CI/CD"] },
      { name: "Jupyter / Colab", proficiency: 92, tags: ["Notebooks", "Visualization", "Experimentation", "GPU"] },
    ],
  },
];

export const projectFilters = ["All", "GenAI & LLMs", "ML & AI", "Data Analytics", "NLP"];

export const projects: Project[] = [
  {
    id: 1,
    title: "GitHub Talent Finder — MCP Server",
    category: "GenAI & LLMs",
    description: "10-tool MCP server for GitHub talent discovery via repo analysis and CI/CD inspection. Built with FastMCP, SQLite caching, Docker SSE deployment.",
    tags: ["FastMCP", "Python", "Docker", "SSE", "Claude"],
    image: "/images/project-github-talent.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 2,
    title: "CogniVerse — LangGraph Conversational AI Agent",
    category: "GenAI & LLMs",
    description: "Stateful LangGraph agent with conditional routing, multi-model LLM access via OpenRouter, tool-calling pipeline, and memory nodes.",
    tags: ["LangGraph", "LangChain", "OpenRouter", "Streamlit"],
    image: "/images/project-cogniverse.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 3,
    title: "GitPulse Intelligence Platform",
    category: "GenAI & LLMs",
    description: "Dual-LLM pipeline (Gemini 2.0 + Groq LLaMA) with auto-fallback, async FastAPI backend, and GenAI SaaS features for JD matching and AI email drafting.",
    tags: ["FastAPI", "Gemini", "Groq", "Docker", "HuggingFace"],
    image: "/images/project-gitpulse.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 4,
    title: "Automated Pavement Distress System",
    category: "ML & AI",
    description: "YOLOv11 object detection on 12,000+ images with SAHI tile inference for sub-3mm cracks. Integrated RAG module for IRC regulation queries via LangChain + FAISS.",
    tags: ["YOLOv11", "PyTorch", "SAHI", "RAG", "Streamlit"],
    image: "/images/project-pavement.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 5,
    title: "OllamaRAG-Nexus",
    category: "GenAI & LLMs",
    description: "LangChain RAG pipeline with ChromaDB embeddings, hybrid LLM inference (local Ollama + Groq cloud), and Streamlit document QA interface.",
    tags: ["LangChain", "ChromaDB", "Ollama", "Groq", "HuggingFace"],
    image: "/images/project-ollamarag.jpg",
    github: "https://github.com/Divya-gen-ai",
  },
  {
    id: 6,
    title: "Credit Card Fraud Detection",
    category: "ML & AI",
    description: "XGBoost classifier on 284K transactions with SMOTE handling for 0.17% fraud imbalance. F1-score of 0.91 with threshold optimization recovering 30% more fraud cases.",
    tags: ["XGBoost", "SMOTE", "Scikit-learn", "Streamlit"],
    image: "/images/project-fraud.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 7,
    title: "Meta Ad Intelligence Engine",
    category: "Data Analytics",
    description: "400K+ Meta ad events modeled with star schema SQL. Power BI dashboard tracking CTR, CVR, ROAS, CPA. A/B testing and funnel analysis for campaign optimization.",
    tags: ["SQL", "Power BI", "Python", "Excel", "A/B Testing"],
    image: "/images/project-meta-ads.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 8,
    title: "DemandPulse Analytics Dashboard",
    category: "Data Analytics",
    description: "1M+ demand records analyzed with Python & SQL. K-Means clustering for SKU segmentation. Power BI + Streamlit dashboards deployed on HuggingFace.",
    tags: ["Python", "SQL", "Power BI", "K-Means", "Streamlit"],
    image: "/images/project-demandpulse.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 9,
    title: "E-Commerce Data Analytics Dashboard",
    category: "Data Analytics",
    description: "115K+ e-commerce transactions across 27 states. 5-page Power BI dashboard with 32 DAX measures: RFM, churn, Pareto, and state-level freight analysis.",
    tags: ["Power BI", "DAX", "Python", "SQL", "RFM"],
    image: "/images/project-ecommerce.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
  {
    id: 10,
    title: "Email Spam Classifier",
    category: "NLP",
    description: "NLP preprocessing with NLTK tokenization and TF-IDF. Achieved 1.0 precision with Binomial Naive Bayes. Flask web app with auth, deployed on Render.",
    tags: ["NLTK", "TF-IDF", "Naive Bayes", "Flask", "NLP"],
    image: "/images/project-spam.jpg",
    github: "https://github.com/Divya-gen-ai",
    live: "https://github.com",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Edunet Foundation",
    role: "AI/ML Intern",
    date: "June 2025 – July 2025",
    location: "Remote",
    bullets: [
      "Built Email Spam Classifier using NLP (NLTK, TF-IDF) + Naive Bayes, achieving 1.0 precision across Gaussian, Multinomial, and Binomial variants.",
      "Developed Flask web app with REST API endpoints, session-based authentication, and responsive HTML/CSS UI.",
      "Managed Git version control and deployed on Render for scalable, production-ready access.",
    ],
    tags: ["NLP", "Flask", "Render", "Git", "REST API"],
  },
  {
    id: 2,
    company: "Cognifyz",
    role: "Data Science Intern",
    date: "April 2025 – May 2025",
    location: "Online",
    bullets: [
      "Developed Email Spam Classifier combining NLP preprocessing with ML models, achieving 1.0 precision using Binomial Naive Bayes.",
      "Generated analytical insights using word clouds enhancing text data interpretability.",
      "Built secure Flask app with user authentication and responsive UI.",
      "Used Git for version control and deployed application on Render.",
    ],
    tags: ["NLP", "ML", "Flask", "Git", "Render"],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    institution: "Madan Mohan Malaviya University of Technology",
    field: "Civil Engineering",
    grade: "CGPA 7.74",
    period: "Nov 2022 – June 2026",
    location: "Gorakhpur, UP",
  },
  {
    id: 2,
    degree: "Intermediate (12th)",
    institution: "Jawahar Navodaya Vidyalaya",
    grade: "95.4%",
    period: "April 2020 – March 2021",
    location: "Basti, UP",
  },
  {
    id: 3,
    degree: "High School (10th)",
    institution: "Jawahar Navodaya Vidyalaya",
    grade: "92.4%",
    period: "April 2018 – March 2019",
    location: "Basti, UP",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Advanced Data Analytics",
    provider: "Coursera",
    description: "End-to-end data analysis, statistical modeling, visualization, and Python-based data pipelines.",
    icon: "BarChart3",
  },
  {
    id: 2,
    title: "Data Science Mentorship Program (DSMP)",
    provider: "CampusX",
    description: "600+ hours covering Python, SQL, Machine Learning, Deep Learning, GenAI, and LLMs across 20+ projects.",
    icon: "Code2",
  },
  {
    id: 3,
    title: "NPTEL Remote Sensing Essentials",
    provider: "IIT Roorkee",
    description: "Elite Certified, Top 5%. Remote sensing fundamentals and geospatial data analysis.",
    icon: "Satellite",
  },
  {
    id: 4,
    title: "200+ DSA Problems Solved",
    provider: "Self-Paced Practice",
    description: "Algorithms, optimization, and ML system efficiency through consistent problem-solving practice.",
    icon: "Terminal",
  },
];
