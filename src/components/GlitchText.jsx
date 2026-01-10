import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

const GlitchText = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            setDisplayText(text);
            return;
        }

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2; // Speed of decoding
        }, 40);

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return (
        <span
            className={`inline-block truncate ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText}
        </span>
    );
};

GlitchText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default GlitchText;
