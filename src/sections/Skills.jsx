import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { SystemLabel } from '../components/Technical';

const skills = [
    { category: "Programming", items: ["Python", "SQL", "Java", "C++"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "RESTful APIs", "React.js"] },
    { category: "Artificial Intelligence", items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"] },
    { category: "Core CS", items: ["Data Structures", "DBMS (SQL)", "OS Concepts", "Computer Networks"] }
];

const Skills = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">

            <div className="absolute top-12 left-6 hidden md:block opacity-20">
                <SystemLabel>SYS.SKILLS_ANALYSIS</SystemLabel>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <ScrollReveal width="100%">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-sm font-mono text-accent">01. TECHNICAL PROFICIENCY</h2>
                        <div className="h-px w-24 bg-accent/20"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {skills.map((skillGroup, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="group">
                                <h3 className="text-lg font-display font-medium text-white mb-6 border-l-2 border-emerald-500/50 pl-4 group-hover:border-emerald-400 transition-colors duration-300">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-3">
                                    {skillGroup.items.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="text-secondary/70 hover:text-white text-sm font-mono cursor-default block w-full border-b border-white/5 pb-2 last:border-0 hover:border-white/20 transition-all duration-300"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
