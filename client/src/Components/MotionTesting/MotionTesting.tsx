import { motion, useMotionValue, useTransform, useScroll, useSpring } from "framer-motion";

import "./MotionTesting.css";
import { useState } from "react";

const MotionTesting = () => {
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const x = useMotionValue(0);
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    );

    const handleXButton = () => {
        setXValue(xValue + 100);
    };

    const handleyButton = () => {
        setYValue(yValue + 100);
    };

    const handleRotateButton = () => {
        setRotateValue(rotateValue + 10);
    };

    return (
        <div className="motion-container">
            <button onClick={handleXButton}>Add X</button>
            <button onClick={handleyButton}>Add Y</button>
            <button onClick={handleRotateButton}>Add Y</button>

            <motion.div
                animate={{ x: xValue, y: yValue, rotate: rotateValue }}
                className="blue-box"
            ></motion.div>
            <br></br>
            <motion.div
                className="blue-box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            />

            <motion.div
                className="blue-box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            />
            <motion.div style={{ background }}>
                <motion.div
                    className="blue-box"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    style={{ x }}
                ></motion.div>
            </motion.div>

            <motion.div className="progress-bar" style={{ scaleX }} />
        </div>
    );
};

export default MotionTesting;
