import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('INITIALIZING SYSTEM...');

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        const textTimer = setTimeout(() => {
            setText('LOADING MODULES...');
        }, 800);

        const textTimer2 = setTimeout(() => {
            setText('ESTABLISHING CONNECTION...');
        }, 1600);

        return () => {
            clearInterval(timer);
            clearTimeout(textTimer);
            clearTimeout(textTimer2);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                onComplete();
            }, 500);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center text-white"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="w-64 space-y-4">
                <div className="flex justify-between text-xs font-mono text-emerald-400">
                    <span>SYS.BOOT_SEQ</span>
                    <span>{Math.min(100, Math.floor(progress))}%</span>
                </div>

                <div className="h-1 w-full bg-white/10 overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-emerald-400"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="text-xs font-mono text-secondary/50 text-center uppercase tracking-widest">
                    {text}
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
