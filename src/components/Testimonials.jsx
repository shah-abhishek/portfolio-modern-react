
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, CalendarDays, Building, Users, CheckCircle } from "lucide-react";

const experiences = [
  {
    company: "VARAISYS PVT. LTD., Noida",
    role: "Software Engineer",
    duration: "Jan 2022 - Jun 2026 (Intern: Jan 2022 - May 2022)",
    description: "Building scalable SaaS dashboards and enterprise client applications using React.js, Next.js, and TypeScript, with a focus on high-performance visualization of large datasets and reusable frontend architecture.",
    responsibilities: [
      "Developed high-performance visualization systems handling datasets of 5M-10M records using AG Grid, D3.js, and Vega-Lite.",
      "Improved UI responsiveness and reduced rendering latency through chunk-based loading, lazy loading, and optimized rendering strategies.",
      "Led frontend development for the VRC (Visual Reliability Chart) project with reusable component architecture.",
      "Built analytics platform (MAT) with custom chart editor, reporting workflows, and export functionality.",
      "Integrated REST APIs and optimized frontend data flows for large-scale enterprise dashboards.",
      "Contributed to AI-driven systems including Annotator, APS, and Quark9 for data annotation and interview automation.",
      "Collaborated in Agile development workflows with cross-functional product and backend teams.",
    ],
    logo: "varaisys-logo"
  },
  {
    company: "Veryon",
    role: "Software Engineer (Contract)",
    duration: "Jan 2025 - Jan 2026",
    description: "Delivered production-grade features across enterprise aviation platforms, combining modern React frontends with AI-powered capabilities inside a legacy .NET MVC architecture.",
    responsibilities: [
      "Developed ALICE, an AI-powered enterprise chatbot using AWS Bedrock trained on confidential aviation datasets.",
      "Built a Global Search module using React, Vite, and TypeScript inside a legacy .NET MVC architecture.",
      "Integrated modern frontend applications into legacy systems using iframe and .cshtml architecture.",
      "Delivered production-grade features used across enterprise aviation platforms.",
    ],
    logo: "veryon-logo"
  },
  // Add more experiences if available
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-sky-50 dark:from-gray-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A summary of my professional journey and key contributions.
          </motion.p>
        </div>

        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <Card className="overflow-hidden shadow-xl card-hover border-primary/20 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md">
                <CardHeader className="bg-primary/5 dark:bg-primary/10 p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <CardTitle className="text-2xl gradient-text">{exp.role}</CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Building className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="mb-6 text-base leading-relaxed">{exp.description}</CardDescription>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
