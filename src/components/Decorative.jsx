import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Refined to be subtle and technical - "System thinking"
export const CodeCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-10 right-0 md:-right-10 z-0 hidden md:block"
        >
            <div className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-white/5 rounded-sm p-4 w-64 transform transition-transform hover:translate-x-1 duration-700">
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>
                    <span className="font-mono text-[9px] text-white/20">SYS.MONITOR</span>
                </div>

                <div className="space-y-2 font-mono text-[10px] text-secondary/40 leading-relaxed">
                    <p>{'>'} initializing <span className="text-emerald-500/60">core</span>...</p>
                    <p>{'>'} pattern: <span className="text-cyan-500/60">"Architect"</span></p>
                    <p>{'>'} status: <span className="text-white/60">online</span></p>
                    <div className="h-1 w-full bg-white/5 mt-2 overflow-hidden rounded-full">
                        <motion.div
                            className="h-full bg-emerald-500/20"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const GradientShape = ({ className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute blur-[100px] pointer-events-none opacity-[0.08] mixes-blend-screen ${className}`}
    />
);

GradientShape.propTypes = {
    className: PropTypes.string,
    delay: PropTypes.number
};

export const NeuralLines = () => {
    // A simplified visual representation of connections
    // that occasionally pulse or fade
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]" aria-hidden="true">
            <motion.path
                d="M100,200 Q400,100 600,400"
                fill="none"
                stroke="url(#gradient-line-1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.path
                d="M800,100 Q600,300 900,600"
                fill="none"
                stroke="url(#gradient-line-2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 10, delay: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />

            <defs>
                <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
        </svg>
    )
}
