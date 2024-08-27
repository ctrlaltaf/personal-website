import { useState } from "react";
import "./Envelope.css";
import { animate, motion, Variants } from "framer-motion";

const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonX, setButtonX] = useState(0);

    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 30 },
            x: -100,
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    };

    return (
        <div className="envelope-container">
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
            >
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.97 }}
                    animate={{ x: buttonX }}
                    onClick={() => {
                        if (isOpen) {
                            setButtonX(buttonX + 200);
                        } else setButtonX(buttonX -200);
                        setIsOpen(!isOpen);
                    }}
                >
                    Area of Interest{" "}
                </motion.button>
                <motion.div
                    className="card-container"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05,
                            },
                            x: buttonX,
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            },
                            x: buttonX,
                        },
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <motion.ul className="column-container">
                        <motion.li variants={itemVariants}>
                            Description
                            <p>blah blah blah bah</p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            Skills
                            <motion.ul>
                                {" "}
                                <motion.li variants={itemVariants}>
                                    Skill 1
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    Skill 2
                                </motion.li>
                            </motion.ul>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </div>
    );
};

export default Envelope;
