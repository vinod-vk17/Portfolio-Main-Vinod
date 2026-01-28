import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Profile
  app.get(api.profile.get.path, async (_req, res) => {
    const profile = await storage.getProfile();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  });

  // Experience
  app.get(api.experiences.list.path, async (_req, res) => {
    const list = await storage.getExperiences();
    res.json(list);
  });

  // Education
  app.get(api.education.list.path, async (_req, res) => {
    const list = await storage.getEducation();
    res.json(list);
  });

  // Projects
  app.get(api.projects.list.path, async (_req, res) => {
    const list = await storage.getProjects();
    res.json(list);
  });

  // Skills
  app.get(api.skills.list.path, async (_req, res) => {
    const list = await storage.getSkills();
    res.json(list);
  });

  // Seed Data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProfile = await storage.getProfile();
  if (existingProfile) return;

  console.log("Seeding database...");

  // Profile
  await storage.createProfile({
    name: "Vinod Prakash",
    headline: "Data Scientist & Software Engineer | AI/ML Specialist",
    about: `I’m a backend, AI, and ML engineer who builds production‑grade machine learning systems and the software products around them. My work sits at the intersection of scalable backend engineering, applied machine learning, and modern SaaS delivery. I take messy data, experimental models, and research‑grade ideas and turn them into robust APIs, automated workflows, and user‑facing applications that perform reliably in real‑world environments.

With a Master’s in Data Science and a Bachelor’s in Computer Engineering, I bring a blend of strong engineering fundamentals and practical ML expertise. I enjoy designing clean data pipelines, deploying ML models at scale, and building cloud‑native systems that are fast, reliable, and maintainable.

My recent work spans:

Data Engineering: ETL pipelines, Airflow, Spark, SQL

Cloud & Backend: AWS, serverless workflows, FastAPI, Docker

AI/ML: LLM‑powered applications, RAG systems, vector databases, applied ML models

SaaS Engineering: API‑driven architectures, real‑time features, production monitoring`,
    location: "Stony Brook, New York, United States",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vinod-kumar-prakash/",
      github: "https://github.com/vinod-kumar-prakash",
      buyMeACoffee: "https://buymeacoffee.com/vinodprakash",
      email: "vinodkumar.prakash@stonybrook.edu"
    }
  });

  // Experience
  await storage.createExperience({
    title: "Graduate Research Assistant",
    company: "Stony Brook University",
    duration: "Jan 2025 - Present",
    location: "Stony Brook, New York",
    description: "Working on Python, Large Language Models (LLM) and research initiatives.",
    skills: ["Python", "LLM", "Research"]
  });

  await storage.createExperience({
    title: "AI Intern",
    company: "Accion Labs",
    duration: "May 2025 - Aug 2025",
    location: "Philadelphia, Pennsylvania",
    description: "Focused on Large Language Models (LLM), Retrieval-Augmented Generation (RAG).",
    skills: ["LLM", "RAG", "AI"]
  });

  await storage.createExperience({
    title: "Software Engineer",
    company: "Zoho",
    duration: "Jun 2022 - Jul 2024",
    location: "Chennai, Tamil Nadu, India",
    description: "Software Engineer working with Python, Apache Spark, and large-scale data systems.",
    skills: ["Python", "Apache Spark", "Software Engineering"]
  });

  await storage.createExperience({
    title: "Software Engineer Intern",
    company: "Zoho", // Inferred
    duration: "Jan 2022 - May 2022",
    location: "Chennai, India",
    description: "Internship focused on Java and SQL development.",
    skills: ["Java", "SQL"]
  });

  // Education
  await storage.createEducation({
    school: "Stony Brook University",
    degree: "Master's degree, Data Science",
    duration: "Aug 2024 - Dec 2025",
    description: "Coursework in Big Data Analysis, Data Management, Algorithms, Distributed Systems, ML, Statistical Computing."
  });

  await storage.createEducation({
    school: "Anna University Chennai",
    degree: "Bachelor's degree, Electronics and Communications Engineering",
    duration: "Jun 2018 - Jun 2022",
    description: "Focused on Python, DSA, OOP, Computer Networks, DBMS, OS, ML."
  });

  // Skills
  await storage.createSkill({
    category: "Languages & Core",
    items: ["Python", "SQL", "Java", "C++", "JavaScript"]
  });

  await storage.createSkill({
    category: "Data & AI",
    items: ["Apache Spark", "AWS", "Large Language Models (LLM)", "RAG", "Data Engineering", "Machine Learning"]
  });

  await storage.createSkill({
    category: "Tools & Platforms",
    items: ["Git", "Docker", "PostgreSQL", "Linux", "Jira"]
  });

  // Projects (Inferred/Generic based on skills)
  await storage.createProject({
    title: "RAG-based Knowledge Assistant",
    description: "Built a Retrieval-Augmented Generation system using Python and OpenAI API to answer queries from custom document sets with high accuracy.",
    techStack: ["Python", "LangChain", "OpenAI", "Vector DB"],
    githubLink: "#",
    link: "#"
  });

  await storage.createProject({
    title: "Real-time Data Pipeline",
    description: "Designed a scalable ETL pipeline using Apache Spark and AWS to process streaming data for real-time analytics dashboards.",
    techStack: ["Apache Spark", "AWS", "Python", "Kafka"],
    githubLink: "#",
    link: "#"
  });

  await storage.createProject({
    title: "Customer Data Platform Module",
    description: "Contributed to the development of a CDP module at Zoho, enabling unified customer profiles and improved data accessibility.",
    techStack: ["Java", "SQL", "Distributed Systems"],
    githubLink: "#",
    link: "#"
  });
  
  console.log("Seeding complete.");
}
