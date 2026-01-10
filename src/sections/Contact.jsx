import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { SystemLabel } from '../components/Technical';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ icon: Icon, value, href, download }) => (
    <a
        href={href}
        target={href.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        download={download}
        className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors"
    >
        <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                <Icon size={20} className="text-secondary group-hover:text-white transition-colors" />
            </div>
            <span className="text-xl md:text-2xl font-display text-white group-hover:text-emerald-400 transition-colors">
                {value}
            </span>
        </div>
        <ArrowUpRight className="text-white/20 group-hover:text-emerald-400 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={24} />
    </a>
);

ContactItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.bool
};

const CopyEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = "deepakparagi03@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="py-6 border-b border-white/10 flex items-center justify-between group cursor-pointer" onClick={handleCopy}>
            <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                    <Mail size={20} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <span className="text-xl md:text-2xl font-display text-white group-hover:text-emerald-400 transition-colors">
                    {email}
                </span>
            </div>
            <button className="text-white/20 group-hover:text-emerald-400 transition-colors">
                {copied ? <Check size={24} /> : <Copy size={24} />}
            </button>
        </div>
    );
}

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-surface relative overflow-hidden">

            <div className="absolute top-12 right-6 hidden 2xl:block opacity-20">
                <SystemLabel>SYS.LINK_ESTABLISHED</SystemLabel>
            </div>

            <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-16 md:gap-32 items-end">

                {/* Left Column: Headline */}
                <div className="space-y-12">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">Available for work</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] text-white">
                            Let's <br /> engineer <br /> <span className="text-white/20">the future.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="text-secondary/60 font-light max-w-sm leading-relaxed">
                            <p>
                                Always interested in discussing new projects, opportunities, or just chatting about AI and system architecture.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Column: Links List */}
                <div className="w-full">
                    <ScrollReveal delay={0.3} width="100%">
                        <div className="border-t border-white/10">
                            <div className="py-2">
                                <CopyEmail />
                            </div>
                            <ContactItem
                                icon={FileText}
                                value="Download CV"
                                href="Deepak_Paragi_Resume.pdf"
                                download={true}
                            />
                            <ContactItem
                                icon={Github}
                                value="GitHub"
                                href="https://github.com/deepakparagi"
                            />
                            <ContactItem
                                icon={Linkedin}
                                value="LinkedIn"
                                href="https://www.linkedin.com/in/deepak-paragi-501140261/"
                            />
                            <ContactItem
                                icon={Twitter}
                                value="Twitter / X"
                                href="https://x.com/Deepak_Paragi"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <footer className="mt-16 flex justify-between text-xs text-secondary/30 font-mono uppercase tracking-widest">
                            <span>Deepak Paragi</span>
                            <span>© 2026</span>
                        </footer>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default Contact;
