import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full py-6 px-6 md:px-12 bg-surface border-t border-primary/10">
            <div className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-secondary/40 font-medium uppercase tracking-widest">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Deepak Paragi
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    © 2026
                </motion.span>
            </div>
        </footer>
    );
};

export default Footer;
