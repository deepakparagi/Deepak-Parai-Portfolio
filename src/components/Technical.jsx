import PropTypes from 'prop-types';

export const Crosshair = ({ className }) => (
    <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 h-4 opacity-30 text-white ${className}`}
    >
        <path d="M10 0V20M0 10H20" stroke="currentColor" strokeWidth="0.5" />
    </svg>
);

export const CornerBracket = ({ position = "top-left", className }) => {
    const rotation = {
        "top-left": "rotate(0)",
        "top-right": "rotate(90)",
        "bottom-right": "rotate(180)",
        "bottom-left": "rotate(270)",
    }[position];

    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-12 h-12 opacity-30 text-white absolute ${className}`}
            style={{ transform: rotation }}
        >
            <path d="M1 40V1H40" stroke="currentColor" strokeWidth="1" />
        </svg>
    );
};

export const SystemLabel = ({ children, className }) => (
    <div className={`flex items-center gap-2 font-mono text-[10px] tracking-wider text-secondary/60 select-none ${className}`}>
        <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse" />
        {children}
    </div>
);

Crosshair.propTypes = {
    className: PropTypes.string
};

CornerBracket.propTypes = {
    position: PropTypes.string,
    className: PropTypes.string
};

SystemLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
