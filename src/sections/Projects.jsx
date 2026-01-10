import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { SystemLabel } from '../components/Technical';
import PropTypes from 'prop-types';

const projects = [
    {
        id: "01",
        title: "Music Streaming App",
        category: "Full Stack Engineering",
        tags: ["Java", "MongoDB", "JS", "Apache", "REST API"],
        gradient: "bg-blue-600",
        link: "https://github.com/deepakparagi"
    },
    {
        id: "02",
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        tags: ["Next.js", "OpenAI", "Tailwind CSS"],
        gradient: "bg-emerald-600",
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/"
    },
    {
        id: "03",
        title: "Bipin Chikkatti School",
        category: "Web Development",
        tags: ["HTML", "CSS", "JS", "Vercel"],
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
            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-white/5 hover:border-white/10 transition-colors duration-700 cursor-pointer"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
        >
            {/* Hover Background Highlight (Subtle) */}
            <div className="absolute inset-0 bg-white/[0.03] scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-center" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 md:w-1/2 relative z-10 w-full">
                <span className="font-display text-3xl text-white/10 group-hover:text-white/30 transition-colors duration-500">
                    {project.id}
                </span>
                <div>
                    <h3 className="text-3xl md:text-5xl font-display font-medium text-white group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                        {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary/60 mt-2 font-light group-hover:text-secondary transition-colors duration-500">
                        {project.category}
                    </p>
                </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/3 flex flex-wrap gap-2 justify-end opacity-60 group-hover:opacity-100 transition-opacity duration-500 relative z-10">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] md:text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-secondary group-hover:border-white/20 transition-colors duration-500">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hidden md:block">
                <ArrowUpRight size={32} className="text-white font-light" strokeWidth={1.5} />
            </div>

            <div className="mt-8 md:hidden relative z-10 flex w-full justify-end">
                <ArrowUpRight size={20} className="text-white/50" />
            </div>
        </motion.a>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        link: PropTypes.string,
        gradient: PropTypes.string
    }).isRequired,
    setHoveredProject: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="work" className="relative py-32 bg-background min-h-screen flex flex-col justify-center overflow-hidden">

            {/* Ambient Background - Smoother Transition */}
            <div className="absolute inset-0 bg-background">
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div
                            key={hoveredProject.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.08 }} // Lower opacity for more subtlety
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className={`absolute inset-0 ${hoveredProject.gradient} blur-[180px]`}
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
                    <ScrollReveal>
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-sm font-mono text-accent">02. SELECTED WORK</h2>
                                <div className="h-px w-24 bg-accent/20"></div>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display text-white max-w-2xl leading-[1.1] tracking-tight">
                                Crafting digital experiences with <span className="text-white/40">precision</span> and <span className="text-white/40">intelligence</span>.
                            </h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="hidden md:block">
                        <div className="text-right">
                            <p className="text-xs font-mono text-secondary/60 uppercase tracking-widest mb-2">
                                LATEST PROJECTS
                            </p>
                            <p className="text-4xl font-display text-white">
                                {new Date().getFullYear()}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="border-t border-white/10">
                    {projects.map((proj, i) => (
                        <ProjectItem
                            key={i}
                            index={i}
                            project={proj}
                            setHoveredProject={setHoveredProject}
                        />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <ScrollReveal delay={0.4}>
                        <a
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 group"
                        >
                            <span className="font-mono text-xs tracking-widest uppercase">VIEW ALL REPOSITORIES</span>
                            <Github size={16} />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Projects;
