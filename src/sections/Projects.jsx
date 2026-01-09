import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// ... (projects array remains unchanged)


const projects = [
    {
        id: "01",
        title: "Music Streaming App",
        category: "Full Stack Engineering",
        description: "Full-stack platform with structured navigation, integrating REST APIs for dynamic content and validated via Postman testing.",
        tags: ["Java", "MongoDB", "JS", "Apache", "REST API"],
        gradient: "bg-blue-600",
        link: "https://github.com/deepakparagi"
    },
    {
        id: "02",
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        description: "Intelligent fitness tracking application that leverages GPT models to generate hyper-personalized workout plans.",
        tags: ["Next.js", "OpenAI", "Tailwind CSS"],
        gradient: "bg-emerald-600",
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/"
    },
    {
        id: "03",
        title: "Bipin Chikkatti School",
        category: "Web Development",
        description: "Official website for the educational institution, featuring a responsive design, gallery, and academic resource portal.",
        tags: ["React", "Vite", "Tailwind CSS"],
        gradient: "bg-purple-600",
        link: "https://deepakparagi.github.io/bipin-chikkatti-school/"
    },


];

const ProjectItem = ({ project, setHoveredProject, index }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col py-12 md:py-16 border-t border-white/10 transition-colors hover:border-white/20 cursor-pointer"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 z-10">
                <div className="flex items-baseline gap-6 md:w-1/3">
                    <span className="font-mono text-sm text-white/40 group-hover:text-white transition-colors">/{project.id}</span>
                    <h3 className="text-3xl md:text-5xl font-display font-medium text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
                        {project.title}
                    </h3>
                </div>

                <div className="md:w-1/3">
                    <p className="text-white/60 group-hover:text-white transition-colors mb-4">
                        {project.category}
                    </p>
                    <div className="flex flex-wrap gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono px-2 py-1 rounded-full border border-white/20 text-white/60">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/6 flex justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:-translate-x-4 md:group-hover:translate-x-0">
                    <div className="p-4 rounded-full bg-white text-black">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
            </div>

            <p className="md:hidden text-secondary mt-6 text-sm leading-relaxed">
                {project.description}
            </p>
        </motion.a>
    );
};

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="work" className="relative py-24 md:py-32 bg-background min-h-screen overflow-hidden">

            {/* Ambient Background - Dynamic Gradient */}
            <div className="absolute inset-0 transition-colors duration-1000 ease-in-out bg-background">
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div
                            key={hoveredProject.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`absolute inset-0 ${hoveredProject.gradient} blur-[150px]`}
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-24 md:flex justify-between items-end">
                    <ScrollReveal>
                        <div>
                            <h2 className="text-sm font-mono text-accent mb-6">02. SELECTED WORK</h2>
                            <h3 className="text-3xl md:text-4xl font-display text-white max-w-lg leading-tight">
                                Crafting digital experiences with <span className="text-white/40">precision</span> and <span className="text-white/40">intelligence</span>.
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="hidden md:block text-right">
                        <ScrollReveal delay={0.2}>
                            <p className="text-secondary text-sm font-mono">
                                LATEST PROJECTS <br /> {new Date().getFullYear()}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="flex flex-col">
                    {projects.map((proj, i) => (
                        <ProjectItem
                            key={i}
                            index={i}
                            project={proj}
                            setHoveredProject={setHoveredProject}
                        />
                    ))}
                    <div className="w-full h-px bg-white/10" />
                </div>

                <div className="mt-24 text-center">
                    <a
                        href="https://github.com/deepakparagi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-secondary hover:text-white transition-colors group"
                    >
                        <span className="font-mono text-sm border-b border-transparent group-hover:border-white pb-1">VIEW ALL REPOSITORIES</span>
                        <Github size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
