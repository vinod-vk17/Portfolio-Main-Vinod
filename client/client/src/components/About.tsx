import { Section } from "./Section";
import { useProfile, useSkills } from "@/hooks/use-portfolio";
import profileImg from "@/assets/profile.png";

export function About() {
  const { data: profile } = useProfile();
  const { data: skills } = useSkills();

  if (!profile) return null;

  // Extract top skills for the about section (e.g., first category)
  const topSkills = skills?.[0]?.items || ["Python", "SQL", "Java", "C++", "Go"];

  return (
    <Section id="about" number="01" title="About Me">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 text-muted-foreground leading-relaxed space-y-6">
          <div className="whitespace-pre-wrap space-y-4">
            <p>
              I build production-grade machine learning systems and the software products around them. My work sits at the intersection of <strong>scalable backend engineering, applied machine learning, and modern SaaS delivery</strong>. I take messy data, experimental models, and research-grade ideas and turn them into <strong>robust APIs, automated workflows, and user-facing applications</strong> that perform reliably in real-world environments.
            </p>
            <p>
              With a Master’s in Data Science and a Bachelor’s in Computer Engineering, I bring a blend of strong engineering fundamentals and practical ML expertise. I enjoy designing clean data pipelines, deploying ML models at scale, and building cloud-native systems that are fast, reliable, and maintainable.
            </p>
            <p>
              My recent work spans:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Data Engineering:</strong> ETL pipelines, Airflow, Spark, SQL</li>
              <li><strong>Cloud & Backend:</strong> AWS, serverless workflows, FastAPI, Docker</li>
              <li><strong>AI/ML:</strong> LLM-powered applications, RAG systems, vector databases, applied ML models</li>
              <li><strong>SaaS Engineering:</strong> API-driven architectures, real-time features, production monitoring</li>
            </ul>
          </div>
        </div>

        <div className="relative group mx-auto md:mx-0 max-w-xs">
          <div className="absolute top-4 left-4 w-full h-full border border-white/20 rounded-sm -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
          <div className="rounded-sm overflow-hidden relative bg-[#1a1a1a] aspect-square p-1 border border-white/10">
            <div className="absolute inset-0 bg-purple-500/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10" />
            <img 
              src={profileImg}
              alt="Vinod Prakash"
              className="w-full h-full object-cover filter grayscale sepia-[.2] hue-rotate-[280deg] group-hover:grayscale-0 group-hover:sepia-0 group-hover:sepia-0 group-hover:hue-rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
