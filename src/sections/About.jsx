import { motion } from 'framer-motion';
import { GradientShape } from '../components/Decorative';
import { SystemLabel, Crosshair } from '../components/Technical';
import ScrollReveal from '../components/ScrollReveal';
import PropTypes from 'prop-types';

const Card = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.04)", borderColor: "rgba(255, 255, 255, 0.1)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={`bg-white/[0.02] backdrop-blur-md border border-white/5 p-5 md:p-6 rounded-3xl relative group overflow-hidden ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        <div className="relative z-10 h-full flex flex-col justify-between">
            {children}
        </div>
    </motion.div>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number
};

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-background">

            <div className="absolute top-12 left-6 hidden 2xl:block opacity-20">
                <SystemLabel>SYS.IDENTITY_VERIFIED</SystemLabel>
            </div>
            <Crosshair className="absolute bottom-12 right-6 hidden 2xl:block opacity-20" />
            <GradientShape className="top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto w-full z-10">

                {/* 1. Header */}
                <div className="mb-20 max-w-4xl">
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-sm font-mono text-accent">01. ABOUT</h2>
                            <div className="h-px w-24 bg-accent/20"></div>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-display font-light text-white leading-[1.1] tracking-tight">
                            Engineered for <span className="text-white/40">impact</span>. <br />
                            Combining <span className="text-white">AI precision</span> with <span className="text-white">Full Stack versatility</span>.
                        </h3>
                        <p className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed max-w-2xl mt-8">
                            I build systems where data meets design, transforming complex algorithms into seamless digital experiences. My focus is on scalable architectures that bridge the gap between machine learning models and intuitive user interfaces.
                        </p>
                    </ScrollReveal>
                </div>

                {/* 2. Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Row 1: Experience (Wide) */}
                    <Card className="md:col-span-12 border-l-2 border-l-accent hover:border-l-accent" delay={0.1}>
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                            <div>
                                <SystemLabel className="mb-2">EXPERIENCE</SystemLabel>
                                <h4 className="text-2xl md:text-3xl text-white font-display">Full Stack Developer Intern</h4>
                                <p className="text-sm text-secondary/60 font-mono mt-1">GTTC, Hubli</p>
                            </div>
                            <span className="font-mono text-accent text-sm mt-2 md:mt-0">Feb 2023 — Jun 2023</span>
                        </div>
                        <p className="text-lg text-secondary font-light leading-relaxed max-w-3xl">
                            Developed a robust music streaming app, integrating REST APIs and ensuring backend reliability via Postman testing.
                        </p>
                    </Card>

                    {/* Row 2: Education (Two Cols) */}
                    <Card className="md:col-span-6" delay={0.2}>
                        <SystemLabel className="mb-6">EDUCATION . 01</SystemLabel>
                        <div>
                            <span className="block text-xs font-mono text-secondary/60 mb-2">2026</span>
                            <h4 className="text-xl text-white font-display mb-2">Bachelor of Engineering</h4>
                            <p className="text-secondary text-sm">NMIT, Bengaluru</p>
                            <p className="text-xs text-emerald-400 mt-4 font-mono tracking-wider">AI & MACHINE LEARNING</p>
                        </div>
                    </Card>

                    <Card className="md:col-span-6" delay={0.3}>
                        <SystemLabel className="mb-6">EDUCATION . 02</SystemLabel>
                        <div>
                            <span className="block text-xs font-mono text-secondary/60 mb-2">2023</span>
                            <h4 className="text-xl text-white font-display mb-2">Diploma in Engineering</h4>
                            <p className="text-secondary text-sm">Government Polytechnic, Gadag</p>
                            <p className="text-xs text-blue-400 mt-4 font-mono tracking-wider">COMPUTER SCIENCE</p>
                        </div>
                    </Card>

                    {/* Row 3: Skills (Split Languages / Tools) */}
                    <Card className="md:col-span-5" delay={0.4}>
                        <SystemLabel className="mb-8">LANGUAGES & FRAMEWORKS</SystemLabel>
                        <ul className="space-y-4">
                            {[
                                "Python & SQL",
                                "JavaScript (ES6+)",
                                "React.js & Next.js"
                            ].map(skill => (
                                <li key={skill} className="flex items-center gap-3 text-white/90">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    <span className="text-lg font-light">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="md:col-span-7" delay={0.5}>
                        <SystemLabel className="mb-8">SYSTEMS & TOOLS</SystemLabel>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "REST APIs", "Git & GitHub", "Postman", "Vite",
                                "Machine Learning", "Data Structures", "Algorithm Design", "System Architecture"
                            ].map(tool => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 text-sm text-secondary bg-white/5 border border-white/5 rounded hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default About;
