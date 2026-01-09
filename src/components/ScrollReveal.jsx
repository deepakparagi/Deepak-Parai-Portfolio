import { motion } from "framer-motion";

const ScrollReveal = ({ children, width = "fit-content", delay = 0, className = "" }) => {
    return (
        <div style={{ width, overflow: "hidden" }} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 75, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.4, 0.25, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
