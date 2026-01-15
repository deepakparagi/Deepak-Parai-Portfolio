import { GradientShape } from '../components/Decorative';
import { SystemLabel, Crosshair } from '../components/Technical';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden bg-background">

            <div className="absolute top-12 left-6 hidden 2xl:block opacity-20">
                <SystemLabel>SYS.IDENTITY_VERIFIED</SystemLabel>
            </div>
            <Crosshair className="absolute bottom-12 right-6 hidden 2xl:block opacity-20" />
            <GradientShape className="top-1/4 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto w-full z-10 relative">

                {/* header */}
                <div className="mb-24 md:mb-32">
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-sm font-mono text-accent">01. ABOUT</h2>
                            <div className="h-px w-24 bg-accent/20"></div>
                        </div>
                        <h3 className="text-4xl md:text-7xl font-display font-light text-white leading-[1] tracking-tight max-w-4xl">
                            Engineered for <span className="text-white/30">impact</span>. <br />
                        </h3>
                        <div className="mt-12 grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-6 md:col-start-7">
                                <p className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed mb-6">
                                    I am Deepak Paragi, a final-year B.E. student in Artificial Intelligence & Machine Learning, based in Bengaluru, India. I come from a hands-on engineering background with a strong focus on building real, working software.
                                </p>
                                <p className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed mb-6">
                                    My core strength lies in full-stack web development combined with AI-assisted applications. I don’t treat AI as magic; I focus on practical usage, integrating APIs and tools to build intelligent, user-centric applications.
                                </p>
                                <p className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed">
                                    I value clean code, structured logic, and reliability over flashy demos that fall apart under real use.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Experience - Clean Row */}
                <div className="mb-24 border-t border-white/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-3">
                                <SystemLabel className="mb-4">EXPERIENCE</SystemLabel>
                                <span className="text-sm font-mono text-white/50">Feb 2023 — Jun 2023</span>
                            </div>
                            <div className="md:col-span-9 flex flex-col md:flex-row gap-8 md:gap-16">
                                <div>
                                    <h4 className="text-3xl text-white font-display mb-2">Full Stack Developer Intern</h4>
                                    <p className="text-sm text-accent font-mono mb-4">GTTC, Hubli</p>
                                    <p className="text-lg text-secondary/70 font-light leading-relaxed max-w-2xl mb-4">
                                        Worked on a web-based music streaming application, gaining real exposure to production-style development.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-secondary/70 font-light">
                                        <li>Developed responsive UI components with structured navigation.</li>
                                        <li>Integrated REST APIs to fetch and display dynamic content.</li>
                                        <li>Tested and validated APIs using Postman.</li>
                                        <li>Assisted with SQL-based database operations to maintain data consistency.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Education - Split Grid */}
                <div className="mb-24 border-t border-white/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-3">
                                <SystemLabel>EDUCATION</SystemLabel>
                            </div>
                            <div className="md:col-span-9 grid md:grid-cols-2 gap-12">
                                <div>
                                    <span className="block text-xs font-mono text-secondary/40 mb-3">2023 — 2026</span>
                                    <h4 className="text-2xl text-white font-display mb-1">Bachelor of Engineering</h4>
                                    <p className="text-secondary text-sm mb-4">NMIT, Bengaluru</p>
                                    <p className="inline-block text-[10px] font-mono border border-emerald-500/30 text-emerald-400 px-2 py-1 rounded">AI & MACHINE LEARNING</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-mono text-secondary/40 mb-3">2020 — 2023</span>
                                    <h4 className="text-2xl text-white font-display mb-1">Diploma in Engineering</h4>
                                    <p className="text-secondary text-sm mb-4">Government Polytechnic, Gadag</p>
                                    <p className="inline-block text-[10px] font-mono border border-blue-500/30 text-blue-400 px-2 py-1 rounded">COMPUTER SCIENCE</p>
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
