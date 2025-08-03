/*
  This file holds all of the data used by the interactive portfolio. By
  encapsulating copy and links in a single location it becomes easy to
  update your resume without touching any HTML. Just modify the
  objects and arrays below and the site will reflect those changes.

  Sections include profile information, a timeline of professional
  experiences, a catalogue of projects, formal education records,
  grouped skill badges, certifications, topics currently being
  explored and contact details.  When adding new entries, follow the
  existing structure to ensure they are rendered correctly by
  script.js.
*/

// Top level profile details used in the hero section
const profile = {
  name: "Umme Athiya",
  tagline: "AI/ML Engineer | Agentic AI | LLMs | Generative AI | NLP | Scalable ML Systems",
  summary: [
    "I am an AI/ML Engineer with more than five years of hands‑on experience building end‑to‑end AI systems. My passion lies in translating cutting‑edge research into scalable products that empower people and organisations.",
    "My expertise spans from data ingestion and model fine‑tuning to deploying large language models at scale. I specialise in designing ML pipelines, integrating generative AI into real‑world applications and optimising performance across cloud and edge environments."
  ],
  location: "Chicago, USA",
  currentRole: "AI/ML Research Engineer & Graduate Teaching Assistant at DePaul University",
  previousRole: "Former AI/ML Engineer at IBM India",
};

// A chronological list of professional experiences. Each entry
// includes a role title, organisation, location, time period and a
// series of key contributions.  These will be rendered as a
// stylised timeline in the Experience section.
const experiences = [
  {
    title: "AI/ML Research & Teaching Assistant",
    organisation: "DePaul University",
    location: "Chicago, USA",
    timeframe: "Jan 2024 – June 2025",
    bullets: [
      "Mentored undergraduate students in Python, recursion and real‑world data analysis.",
      "Assisted faculty in research involving segmentation, retrieval‑augmented generation and transformer fine‑tuning.",
      "Built modular ML pipelines with MLflow for experiment tracking and versioning.",
      "Prototyped medical imaging tools using Apache Spark and Databricks, collaborating with radiologists to define AI use cases.",
      "Designed CI/CD pipelines for LLM deployments with rollback and zero‑downtime updates.",
      "Evaluated real‑time inference trade‑offs on Azure ML and Triton Inference Server.",
      "Investigated hallucination detection in generative models.",
      "Created grading rubrics and projects for advanced ML coursework and delivered one‑on‑one tutoring on algorithm design and debugging."
    ],
    photos: [
      "images/class1.jpeg",
      "images/class2.jpeg",
      "images/class3.jpeg",
      "images/class4.jpeg",
      "images/class5.jpeg",
      "images/class6.jpeg"
    ]
  },
  {
    title: "AI/ML Engineer (Generative AI & Robotics Team)",
    organisation: "IBM",
    location: "Bangalore, India",
    timeframe: "Feb 2021 – Aug 2023",
    bullets: [
      "Developed transformer‑based agents for robotic command understanding and human‑robot interaction simulation tools.",
      "Leveraged GPT‑4 for document retrieval and dynamic summarisation within internal knowledge bases.",
      "Deployed models to Azure Kubernetes clusters, monitored with Prometheus and Grafana and designed model drift dashboards in Weights & Biases and Databricks.",
      "Built reusable ML APIs, reproducible environments with Docker and Conda and created LLM+CV demos with LangChain, OpenCV and robotics toolkits.",
      "Evaluated quantised models using TensorRT for edge inferencing and led sessions on RAG, model packaging and cost‑effective fine‑tuning."
    ],
    photos: [
    "images/IBM1.png",
    "images/IBM2.png",
    "images/IBM3.png",
    "images/IBM4.jpeg",
    "images/IBM5.jpeg"
  ]
  
  },
  {
    title: "Machine Learning Intern",
    organisation: "Technocolabs",
    location: "Remote",
    timeframe: "Aug 2020 – Dec 2020",
    bullets: [
      "Converted tabular datasets into heatmaps for CNN classification and researched differential privacy for structured data.",
      "Authored best‑practice documentation covering preprocessing and generalisation strategies.",
      "Benchmarked traditional versus deep models on semi‑structured data, gaining practical experience with Jupyter, Scikit‑learn and SHAP.",
      "Proposed embedding‑based clustering strategies and used Git, Agile methodologies and issue tracking to ensure reproducibility.",
      "Presented results on model fairness and reproducibility, honing technical communication through dashboards and storytelling."
    ],
  },
  {
    title: "ML Project Mentor",
    organisation: "Script Winter of Code",
    location: "Bangalore, India",
    timeframe: "Dec 2020 – May 2021",
    bullets: [
      "Guided developers on production‑ready machine learning for open‑source projects, aligning outcomes with research goals and recommendation systems.",
      "Conducted code reviews to ensure scalability, managed project milestones and tracked student success."
    ],
  },
  {
    title: "Data Scientist Intern",
    organisation: "Technocolabs",
    location: "Bengaluru, India",
    timeframe: "Aug 2020 – Dec 2020",
    bullets: [
      "Trained churn models with 91% accuracy using Scikit‑learn and served predictions via Flask APIs in Docker containers.",
      "Built ETL pipelines using Power BI, SQL and REST APIs and created visual reports with Matplotlib and Seaborn.",
      "Developed a feature selection module using mutual information and correlation measures."
    ],
  },
  {
    title: "AI/ML Intern",
    organisation: "MedTourEasy",
    location: "New Delhi, India",
    timeframe: "Aug 2019 – Dec 2019",
    bullets: [
      "Developed a recommendation system for treatment selection and built NLP pipelines for patient report parsing.",
      "Analysed trends in medical tourism and treatment preferences, training models such as logistic regression and decision trees to predict outcomes.",
      "Built dashboards with Plotly and Dash for insights and exposed predictions via REST APIs built with Flask."
    ],
  },
];

// Combine the original project list from the static site with
// additional projects supplied in the user's README.  Each entry
// includes a title, a media object describing a video or image and
// a list of bullet points summarising the work.  Projects are
// displayed in a responsive grid on the Projects section.
const projects = [
  // New projects from the README
  {
    title: "SmartSign – ASL to Text",
    media: { type: "image", src: "images/sign_language.png" },
    bullets: [
      "Designed a pipeline combining MediaPipe hand tracking with an LSTM network to translate American Sign Language into text in real time.",
      "Ported the model to TensorFlow Lite for efficient on‑device inference on mobile devices.",
    ],
  },
  {
    title: "RAGflix – Movie Scene Retrieval",
    media: { type: "image", src: "images/movie_retrieval.png" },
    bullets: [
      "Built a retrieval‑augmented generation system using LangChain and Pinecone that fetches relevant movie scenes based on natural language queries.",
      "Engineered embeddings for dialogue and visual descriptors to improve retrieval accuracy.",
    ],
  },
  {
    title: "ResumeRadar – GPT Resume Assistant",
    media: { type: "image", src: "images/resume_assistant.png" },
    bullets: [
      "Implemented OCR to parse PDF resumes and used cosine similarity to match candidate experience with job descriptions.",
      "Integrated GPT to provide tailored feedback and improvement suggestions for candidates.",
    ],
  },
  {
    title: "DeepArt – Neural Style Transfer",
    media: { type: "image", src: "images/neural_style.png" },
    bullets: [
      "Used generative adversarial networks to apply artistic styles to user‑provided photos in real time.",
      "Optimised inference using TensorRT and deployed the application via a web interface for interactive use.",
    ],
  },
  {
    title: "SentimentScope – Real‑Time Sentiment Dashboard",
    media: { type: "video", src: "https://www.youtube.com/embed/wBP-PjP0z2M" },
    bullets: [
      "Built a streaming dashboard with Plotly and VADER to visualise sentiment trends across social media platforms.",
      "Employed Apache Kafka to ingest tweets and real‑time metrics to provide up‑to‑the‑minute insights for brands.",
    ],
  },
  {
    title: "UX Research AI Agent",
    media: { type: "image", src: "images/ux_research.png" },
    bullets: [
      "Developed a large language model agent that automates UX research tasks such as script generation and user feedback summarisation.",
      "Connected the agent to online survey tools and analysed results using vector embeddings for clustering insights.",
    ],
  },
  {
    title: "Embodied Search LLM",
    media: { type: "video", src: "https://www.youtube.com/embed/UJvAvFcoolY" },
    bullets: [
      "Built a smartglass agent that leverages GPS, CLIP and YOLOv9 to help users locate items in physical spaces.",
      "Combined multimodal sensing with language models to deliver spoken guidance and AR overlays.",
    ],
  },
  {
    title: "Cognitive Load Balancer",
    media: { type: "video", src: "https://www.youtube.com/embed/OETUZxiViLg" },
    bullets: [
      "Designed a burnout detector for developers by analysing webcam footage and typing patterns.",
      "Used physiological and behavioural signals to predict stress levels and recommend break schedules.",
    ],
  },
  // Projects from the original static portfolio.  These retain their
  // videos/images hosted on YouTube or GitHub and summarise AI
  // solutions delivered across various domains.
  {
    title: "Construction Site Safety: Real‑Time Detection of PPE Using YOLO",
    media: { type: "video", src: "https://www.youtube.com/embed/QECp0kyFSck" },
    bullets: [
      "Implemented data gathering, labelling, model training and dynamic real‑time deployment using a YOLO‑based detector.",
      "Demonstrated significant improvements in efficiency and adherence to safety protocols on construction sites.",
    ],
  },
  {
    title: "Advanced Defect Identification: Capacitor Inspection Using ADLINK Camera",
    media: { type: "video", src: "https://www.youtube.com/embed/OETUZxiViLg" },
    bullets: [
      "Enhanced defect identification precision through high‑resolution imaging and specialised algorithms for robust quality control.",
      "Leveraged AI and image processing to detect and categorise defects quickly and accurately, optimising manufacturing efficiency and reliability.",
    ],
  },
  {
    title: "Enhanced Autopart Classification: COBOT Integration with Intel DepthSensing Camera",
    media: { type: "video", src: "https://www.youtube.com/embed/UJvAvFcoolY" },
    bullets: [
      "Integrated collaborative robot (COBOT) technology with Intel DepthSensing cameras to streamline classification of motor components.",
      "Used advanced image processing and AI integration to detect and categorise parts swiftly and accurately, improving production efficiency and product reliability.",
    ],
  },
  {
    title: "Precision Maintenance: Thermal Inspection of Toyota Motors",
    media: { type: "video", src: "https://www.youtube.com/embed/wuvBj5bKHNs" },
    bullets: [
      "Combined high‑resolution thermal imaging with specialised algorithms to ensure robust quality control in manufacturing.",
      "Applied depth‑sensing techniques to identify and categorise parts by size and shape for precise inventory management.",
    ],
  },
  {
    title: "Intelligent Personnel Hazard Management System",
    media: { type: "video", src: "https://www.youtube.com/embed/nYa99h0fpEw" },
    bullets: [
      "Employed state‑of‑the‑art sensors and cloud analytics to detect and respond to potential hazards in real time.",
      "Enhanced safety protocols and optimised resource allocation through proactive risk mitigation and real‑time insights.",
    ],
  },
  {
    title: "High‑Tech Solar Panel Surveillance via Drone Technology",
    media: { type: "video", src: "https://www.youtube.com/embed/wBP-PjP0z2M" },
    bullets: [
      "Integrated thermal and visual inspections to detect anomalies and ensure optimal performance of solar arrays.",
      "Provided proactive maintenance insights using real‑time data and automated analysis, maximising energy production and equipment lifespan.",
    ],
  },
  {
    title: "Enhanced Fire Extinguisher Inspection with Boston Dynamics Spot Robot",
    media: { type: "video", src: "https://www.youtube.com/embed/2guWQDW2Mm4" },
    bullets: [
      "Combined thermal and visual analysis with the agility of the Boston Dynamics Spot Robot for thorough safety equipment inspection.",
      "Improved maintenance efficiency and compliance by detecting potential issues early in industrial and commercial settings.",
    ],
  },
  {
    title: "Next‑Gen Inspection: Boston Dynamics Spot Robot & IBM Maximo Suite",
    media: { type: "video", src: "https://www.youtube.com/embed/-XUVulOQX9c" },
    bullets: [
      "Integrated the Boston Dynamics Spot Robot with IBM Maximo Suite analytics for circuit transformer analysis.",
      "Optimised efficiency and reliability through real‑time data collection, analysis and predictive maintenance.",
    ],
  },
  {
    title: "Revolutionising Welding Analytics: COBOT‑Enabled Smart Manufacturing for Magna",
    media: { type: "video", src: "https://www.youtube.com/embed/sD8otJ50RXM" },
    bullets: [
      "Leveraged collaborative robots to enhance manufacturing efficiency and precision at Magna.",
      "Integrated smart analytics to optimise welding operations, improve quality control and provide real‑time insights.",
    ],
  },
  {
    title: "Envision for Renewable Energy, Business Intelligence and Analytics",
    media: { type: "image", src: "https://raw.githubusercontent.com/UMMEATHIYA/My_Portfolio/master/images/envision.gif" },
    bullets: [
      "Harnesses Envision's advanced analytics to optimise operations and maximise efficiency in renewable energy projects.",
      "Provides real‑time insights into energy production, consumption and operational performance.",
      "Utilises advanced algorithms and machine learning techniques to analyse data from solar, wind, hydro and other sustainable systems.",
    ],
  },
  {
    title: "Towards Many to Many Communications Among Blind, Deaf & Dumb Users",
    media: { type: "image", src: "https://raw.githubusercontent.com/UMMEATHIYA/My_Portfolio/master/images/towards_many.png" },
    bullets: [
      "Enables real‑time, multi‑modal interactions by leveraging IoT devices and sensors for enhanced accessibility."
    ],
  },
  {
    title: "Covid‑19 Outbreak Analysis, Prediction & Forecasting",
    media: { type: "image", src: "https://raw.githubusercontent.com/UMMEATHIYA/My_Portfolio/master/images/covid.gif" },
    bullets: [
      "Gathered and processed vast amounts of data from health organisations, government reports and public datasets.",
      "Applied statistical analysis and machine learning to uncover patterns and predict the progression of Covid‑19 across regions.",
      "Built predictive models to forecast future cases, hospitalisations and fatalities and developed interactive dashboards to share insights.",
    ],
  },
];

// Formal education credentials. Each entry contains the degree,
// institution name, location, time period and GPA.  This will
// populate the Education section of the page.
const education = [
  {
    degree: "M.S. in Computer Science (Artificial Intelligence)",
    institution: "DePaul University",
    location: "Chicago, USA",
    timeframe: "Expected 2025",
    gpa: "3.85 / 4.00",
  },
  {
    degree: "B.E. in Information Science",
    institution: "Don Bosco Institute of Technology",
    location: "Bengaluru, India",
    timeframe: "2016 – 2020",
    gpa: "4.00 / 4.00",
  },
];

// Skill groups with a descriptive name and an array of items.  Each
// item includes a label and a badge URL from shields.io. These
// badges will be rendered as images in the Skills section.  You can
// change the badge colours and logos by editing the query strings.
const skillGroups = [
  {
    name: "Programming Languages",
    items: [
      { label: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
      { label: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" },
      { label: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
      { label: "SQL", badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" },
    ],
  },
  {
    name: "Generative AI",
    items: [
      { label: "GPT‑4", badge: "https://img.shields.io/badge/GPT--4-412991?style=for-the-badge&logo=openai&logoColor=white" },
      { label: "LLaMA", badge: "https://img.shields.io/badge/LLaMA-000000?style=for-the-badge" },
      { label: "OpenAI", badge: "https://img.shields.io/badge/OpenAI-03A57E?style=for-the-badge&logo=openai&logoColor=white" },
      { label: "LangChain", badge: "https://img.shields.io/badge/LangChain-black?style=for-the-badge" },
      { label: "Prompt Engineering", badge: "https://img.shields.io/badge/Prompt--Engineering-blue?style=for-the-badge" },
      { label: "RLHF", badge: "https://img.shields.io/badge/RLHF-800000?style=for-the-badge" },
    ],
  },
  {
    name: "ML & DL Frameworks",
    items: [
      { label: "Scikit‑Learn", badge: "https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" },
      { label: "PyTorch", badge: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
      { label: "TensorFlow", badge: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
      { label: "Hugging Face", badge: "https://img.shields.io/badge/Hugging%20Face-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black" },
      { label: "XGBoost", badge: "https://img.shields.io/badge/XGBoost-000000?style=for-the-badge&logo=xgboost&logoColor=white" },
      { label: "LightGBM", badge: "https://img.shields.io/badge/LightGBM-9ACD32?style=for-the-badge" },
    ],
  },
  {
    name: "MLOps & Deployment",
    items: [
      { label: "MLflow", badge: "https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white" },
      { label: "Airflow", badge: "https://img.shields.io/badge/Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" },
      { label: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
      { label: "FastAPI", badge: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" },
      { label: "Triton Inference Server", badge: "https://img.shields.io/badge/Triton%20Inference%20Server-000000?style=for-the-badge" },
      { label: "Ray", badge: "https://img.shields.io/badge/Ray-333333?style=for-the-badge" },
      { label: "CI/CD", badge: "https://img.shields.io/badge/CI%2FCD-F34F29?style=for-the-badge&logo=github-actions&logoColor=white" },
      { label: "DDP", badge: "https://img.shields.io/badge/DDP-0062FF?style=for-the-badge" },
      { label: "FSD", badge: "https://img.shields.io/badge/FSD-008080?style=for-the-badge" },
    ],
  },
  {
    name: "Infrastructure & Serving",
    items: [
      { label: "Kubernetes", badge: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
      { label: "ONNX", badge: "https://img.shields.io/badge/ONNX-0055B8?style=for-the-badge&logo=onnx&logoColor=white" },
      { label: "TensorRT", badge: "https://img.shields.io/badge/TensorRT-76B900?style=for-the-badge" },
      { label: "TF Serving", badge: "https://img.shields.io/badge/TF%20Serving-FF6F00?style=for-the-badge" },
    ],
  },
  {
    name: "Cloud Platforms",
    items: [
      { label: "AWS SageMaker", badge: "https://img.shields.io/badge/AWS%20SageMaker-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" },
      { label: "Azure ML", badge: "https://img.shields.io/badge/Azure%20ML-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white" },
      { label: "AWS Bedrock", badge: "https://img.shields.io/badge/AWS%20Bedrock-FF9900?style=for-the-badge&logo=amazon&logoColor=white" },
    ],
  },
  {
    name: "Big Data & Tools",
    items: [
      { label: "Spark", badge: "https://img.shields.io/badge/Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white" },
      { label: "FAISS", badge: "https://img.shields.io/badge/FAISS-4B32C3?style=for-the-badge" },
      { label: "Pinecone", badge: "https://img.shields.io/badge/Pinecone-0099CC?style=for-the-badge" },
      { label: "Redis", badge: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
      { label: "Weights & Biases", badge: "https://img.shields.io/badge/Weights%20%26%20Biases-FFBE00?style=for-the-badge" },
      { label: "DataBricks", badge: "https://img.shields.io/badge/DataBricks-FF3621?style=for-the-badge" },
    ],
  },
  {
    name: "Concepts & Practices",
    items: [
      { label: "Model Lifecycle", badge: "https://img.shields.io/badge/Model%20Lifecycle-3E4E88?style=for-the-badge" },
      { label: "Reusable Packages", badge: "https://img.shields.io/badge/Reusable%20Packages-4682B4?style=for-the-badge" },
      { label: "Refactoring", badge: "https://img.shields.io/badge/Refactoring-556B2F?style=for-the-badge" },
      { label: "Feature Engineering", badge: "https://img.shields.io/badge/Feature%20Engineering-B03060?style=for-the-badge" },
    ],
  },
];

// Certifications earned.  Only names are displayed but you can
// associate each with a logo or link by extending the objects.
const certifications = [
  "Hugging Face Transformers Certification",
  "DeepLearning.AI – Generative AI with LLMs",
  "DeepLearning.AI – ChatGPT Prompt Engineering",
  "Cohere – LLM University Certification",
  "NVIDIA – Generative AI Professional Certificate (DLI)",
  "Kaggle Micro‑Certifications (Python, Machine Learning, Deep Learning)",
  "Microsoft Azure AI Fundamentals (AI‑900)",
  "Microsoft Azure Fundamentals (AZ‑900)",
  "Microsoft Azure IoT Developer (AZ‑220)",
  "IBM Cloud Certification",
  "IBM Cloud Advocate",
  "Java Full Stack Developer – IBM SkillsBuild",
];

// Areas of study and tools currently being explored.  This list
// appears in the Learning section and is a great place to mention
// emerging technologies you’re excited about.
const learningTopics = [
  "Generative AI (Diffusion Models, Retrieval‑Augmented Generation)",
  "Neural Networks (Transformers, Vision Transformers)",
  "OpenCV & Real‑Time Computer Vision",
  "Edge AI (Jetson, Coral, TinyML)",
  "LLM Fine‑Tuning (LoRA, PEFT, DPO, QLoRA)",
  "AI Infrastructure (Triton Inference Server, TorchServe, Ray Serve)",
  "ML Compilation (ONNX, TensorRT, TorchScript)",
  "Vector Databases (Pinecone, FAISS, Weaviate)",
  "MLOps Tooling (MLflow, Kubeflow, Airflow, BentoML)",
  "AI Observability (WhyLabs, Prometheus, Evidently.ai)",
];

// Contact information and social links.  Each entry specifies a
// display name, a URL and an icon class (for font‑awesome) used
// throughout the site.  Feel free to add additional channels such
// as Medium or Twitter.
const contacts = [
  { name: "Email", url: "mailto:uathiya4@gmail.com", icon: "fas fa-envelope" },
  { name: "Website", url: "https://ummeathiya.com", icon: "fas fa-globe" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/umme-athiya-1a8673172", icon: "fab fa-linkedin" },
  { name: "GitHub", url: "https://github.com/UMMEATHIYA", icon: "fab fa-github" },
];