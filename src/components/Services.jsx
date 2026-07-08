
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Database, Server, BrainCircuit, BarChart3, Zap } from "lucide-react";

const skills = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Frontend Development",
    description: "React.js, Next.js, TypeScript, JavaScript, Redux Toolkit, Context API, Vite, Responsive Design.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Backend Development",
    description: "FastAPI, Python, REST APIs. Scalable backend services and automated ingestion pipelines.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Databases",
    description: "PostgreSQL, pgvector, Redis. Vector databases for semantic search and AI workflows.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "AI / ML",
    description: "RAG systems, LLM Integration, NLP, hybrid search, Claude, GitHub Copilot, Gemini.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Data Visualization",
    description: "AG Grid, D3.js, Vega-Lite, Chart.js. Large dataset visualization (5M+ records) and dashboard engineering.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Performance & Tools",
    description: "Lazy Loading, Code Splitting, Chunk-based Loading, Virtualization. Git, GitHub, VS Code, Agile, CI/CD.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A glimpse into my technical toolkit and areas of expertise.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full service-card">
                <CardHeader>
                  <div className="mb-4 flex justify-center md:justify-start">{skill.icon}</div>
                  <CardTitle className="text-xl text-center md:text-left">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center md:text-left">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
