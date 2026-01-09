import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-background relative overflow-hidden pt-20">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Typography */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="font-mono text-sm text-emerald-400 tracking-wider">AVAILABLE FOR WORK</span>
                        </div>

                        <h1 className="text-[13vw] md:text-8xl font-display font-medium tracking-tight leading-[0.9] md:leading-[1.1] mb-8 text-white">
                            Building <br />
                            <span className="text-white/50">Intelligent</span> <br />
                            Systems
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl text-secondary max-w-lg leading-relaxed font-light"
                    >
                        Designing interfaces that feel increasingly human.
                    </motion.p>
                </div>

                {/* Right Column: Bio / Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="md:pl-0"
                >
                    <div className="relative">
                        <div className="text-secondary/80 text-lg leading-relaxed space-y-6">
                            <p>
                                <span className="text-2xl md:text-3xl font-display font-medium block mb-4 text-white">I am Deepak Paragi</span>
                                <span className="text-white block text-xl mb-2 font-light">Architecting the <span className="text-emerald-400">Intelligent Web</span>.</span>
                                I believe code is more than logic—it’s <span className="text-white">structure, clarity, and intent</span>.
                            </p>
                            <p>
                                By fusing <span className="text-white font-medium">Generative AI</span> and <span className="text-white font-medium">Modern Development Tools</span> with robust architecture, I build systems that are <span className="text-white">scalable and intuitive</span>.
                                I don't just write code; I engineer solutions that solve complex problems with elegance.
                            </p>
                            <p>
                                From Bengaluru, I am bringing the <span className="text-white">precision of machine learning</span> to the <span className="text-white">fluidity of the modern web</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section >
    );
};

export default Hero;
