import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24">
                <ScrollReveal>
                    <h2 className="text-sm font-mono text-accent mb-6">01. ABOUT</h2>
                    <h3 className="text-3xl md:text-4xl font-display text-white max-w-2xl leading-tight">
                        Transitioning from <span className="text-white/40">theory</span> to <span className="text-white/40">impact</span>. I stay at the frontier of <span className="text-white">Generative AI</span> and <span className="text-white">Agents</span>, continuously evaluating <span className="text-white">models</span> to build intelligent systems.
                    </h3>
                </ScrollReveal>

                <div className="w-full h-px bg-white/10 mt-16" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div className="space-y-8">
                    <ScrollReveal width="100%">
                        <p className="text-lg text-secondary leading-relaxed">
                            I am a <span className="text-white">Final-Year B.E. Student</span> specializing in <span className="text-white">AI & Machine Learning</span>. I combine strong foundational knowledge in Python and Data Structures with practical full-stack development skills.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} width="100%">
                        <p className="text-lg text-secondary leading-relaxed">
                            My focus is on building scalable applications, from REST API integration to deploying AI-powered solutions that solve real-world problems.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} width="100%">
                        <div className="pt-8 md:pt-12">
                            <h4 className="text-accent text-xs font-semibold tracking-wider mb-8">EDUCATION</h4>
                            <div className="space-y-8">
                                <div>
                                    <h5 className="text-white font-medium mb-1">Bachelor of Engineering</h5>
                                    <p className="text-secondary text-sm">Artificial Intelligence & Machine Learning</p>
                                    <p className="text-secondary/50 text-xs mt-1">NMIT, Bengaluru • 2023 — 2026</p>
                                </div>
                                <div>
                                    <h5 className="text-white font-medium mb-1">Diploma in Engineering</h5>
                                    <p className="text-secondary text-sm">Computer Science</p>
                                    <p className="text-secondary/50 text-xs mt-1">Government Polytechnic, Gadag • 2020 — 2023</p>
                                </div>
                            </div>


                        </div>
                    </ScrollReveal>
                </div>

                <div className="space-y-12">
                    <ScrollReveal delay={0.3} width="100%">
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-accent text-xs font-semibold tracking-wider mb-6">CORE TECHNOLOGIES</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Python & SQL",
                                        "JavaScript (ES6+)",
                                        "React.js & Next.js",
                                        "REST APIs",
                                        "Git & GitHub"
                                    ].map(tech => (
                                        <span key={tech} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-secondary hover:text-white hover:border-white/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-accent text-xs font-semibold tracking-wider mb-6">DOMAIN KNOWLEDGE</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Machine Learning",
                                        "Data Structures",
                                        "Algorithm Design",
                                        "System Architecture"
                                    ].map(item => (
                                        <span key={item} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-secondary hover:text-white hover:border-white/20 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 md:pt-0">
                                <h4 className="text-accent text-xs font-semibold tracking-wider mb-8">PROFESSIONAL EXPERIENCE</h4>
                                <div className="space-y-8 border-l border-white/10 pl-6 ml-1">
                                    <div className="relative">
                                        <span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent"></span>
                                        <h5 className="text-white font-medium mb-1">Full Stack Developer Intern</h5>
                                        <p className="text-secondary text-sm mb-2">GTTC, Hubli • Feb 2023 — Jun 2023</p>
                                        <p className="text-secondary/60 text-sm leading-relaxed">
                                            Developed a robust music streaming app, integrating REST APIs and ensuring backend reliability via Postman testing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
