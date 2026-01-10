import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { NeuralLines } from './Decorative';

const Background = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Heavy easing for "inertial" feel
    const springConfig = { damping: 50, stiffness: 40, mass: 2 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Dynamic background gradient based on heavy cursor
    const background = useMotionTemplate`radial-gradient(400px at ${x}px ${y}px, rgba(29, 78, 216, 0.05), transparent 80%)`;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a] pointer-events-none">

            {/* 1. Base Gradient Follower */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ background }}
            />

            {/* 2. Soft Grain / Noise */}
            <div className="absolute inset-0 opacity-[0.03] z-10 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
            />

            {/* 3. Subtle Grid System */}
            <div
                className="absolute inset-0 opacity-[0.05] z-0"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Neural Connections */}
            <NeuralLines />

            {/* 4. Inertial Abstract Shapes - Slowly fading/moving lines */}
            <div className="absolute inset-0 z-0">
                {/* Vertical thin line drifting */}
                <motion.div
                    animate={{ x: [0, 50, 0], opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
                />

                {/* Horizontal drifting line */}
                <motion.div
                    animate={{ y: [0, 100, 0], opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
                    className="absolute top-[40%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                />

                {/* Floating soft shape */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        rotate: [0, 10, 0],
                        opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[15%] bottom-[20%] w-96 h-96 bg-violet-900/10 rounded-full blur-[120px]"
                />
            </div>

        </div>
    );
};

export default Background;
