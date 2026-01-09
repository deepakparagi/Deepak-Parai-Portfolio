import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, FileText, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const SocialIcon = ({ Icon, href, label, delay }) => {
    return (
        <motion.a
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.3 }}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white text-secondary hover:text-black transition-all duration-300"
        >
            <Icon size={20} />
        </motion.a>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 min-h-screen flex flex-col justify-between bg-surface relative overflow-hidden">
            {/* Background Texture similar to Hero for consistency */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20 pointer-events-none" />

            <div>
                <ScrollReveal>
                    <div className="flex items-center gap-3 mb-16">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-sm text-emerald-400 tracking-wider">AVAILABLE FOR NEW OPPORTUNITIES</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <h2 className="text-[12vw] md:text-[8vw] font-display font-medium tracking-tighter leading-none mb-16 text-white">
                        Let's engineer <br /> the <span className="text-white/40">future</span>.
                    </h2>
                </ScrollReveal>

                <div className="mt-12 md:mt-24">
                    <ScrollReveal delay={0.2}>
                        <a
                            href="mailto:deepakparagi03@gmail.com"
                            className="block text-2xl md:text-4xl lg:text-5xl font-display text-white hover:text-white/60 transition-colors mb-12 tracking-tight"
                        >
                            deepakparagi03@gmail.com
                        </a>
                    </ScrollReveal>

                    <div className="flex flex-wrap gap-4">
                        <SocialIcon
                            Icon={FileText}
                            href="/resume.pdf"
                            label="Resume"
                            delay={0.3}
                        />
                        <SocialIcon
                            Icon={Github}
                            href="https://github.com/deepakparagi"
                            label="GitHub"
                            delay={0.4}
                        />
                        <SocialIcon
                            Icon={Linkedin}
                            href="https://www.linkedin.com/in/deepak-paragi-501140261/"
                            label="LinkedIn"
                            delay={0.5}
                        />
                        <SocialIcon
                            Icon={Instagram}
                            href="https://www.instagram.com/deepak_paragi/"
                            label="Instagram"
                            delay={0.6}
                        />
                        <SocialIcon
                            Icon={Twitter}
                            href="https://x.com/Deepak_Paragi"
                            label="Twitter"
                            delay={0.7}
                        />
                    </div>
                </div>
            </div>

            <footer className="flex justify-between items-end text-xs md:text-sm text-secondary/40 font-mono mt-24">
                <div>
                    DEEPAK PARAGI © {new Date().getFullYear()}
                </div>
            </footer>
        </section>
    );
};

export default Contact;
