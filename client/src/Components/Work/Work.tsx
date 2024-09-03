import { useEffect } from "react";
import "./Work.css";
import { motion, useAnimation } from "framer-motion";
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { type: "spring", duration: 1, bounce: 0 },
            // opacity: { duration: 0.01 },
        },
    },
};
const Work = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Start the first animation
            await controls1.start("visible");
            // Start the second animation after the first one finishes
            await controls2.start("visible");
        };
        sequence();
    }, [controls1, controls2]);
    return (
        <div style={{ height: "300vh" }}>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={0}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="90%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="column-2"></div>
            </div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={0}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="90%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="column-2"></div>
            </div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={0}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="90%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="column-2"></div>
            </div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={0}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="90%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="column-2"></div>
            </div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={0}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="90%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="column-2"></div>
            </div>
        </div>
    );
};

export default Work;
