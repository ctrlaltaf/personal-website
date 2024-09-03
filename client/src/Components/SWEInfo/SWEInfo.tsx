import "./SWEInfo.css";
import { motion, Variants } from "framer-motion";

const SWEInfo = () => {
    const itemVariants: Variants = {
        open: {
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
        closed: { opacity: 0, transition: { duration: 0.2 } },
    };

    return (
        <div className="envelope-container">
            <motion.nav
                initial={"closed"}
                animate={"open"}
                className="menu"
                variants={itemVariants}
            >
                <motion.div
                    className="card-container"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 1,
                                delayChildren: 0.5,
                                staggerChildren: 0.1,
                            },
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            },
                        },
                    }}
                >
                    <motion.ul className="column-container">
                        <ul>
                            <h3 className="description-title">Description</h3>
                            <motion.li
                                variants={itemVariants}
                                className="description-column"
                            >
                                I have a strong foundation in software
                                engineering from my experience as a{" "}
                                <b>software engineer intern at Amazon</b>, where
                                I worked on a{" "}
                                <b>full-stack development project</b> to create
                                a web-based tool for optimizing supply and
                                demand decisions. This role involved technical
                                development, collaborating on design documents,
                                proposing new features, and managing large
                                codebases. I am confident with using version
                                control tools, such as GitHub. My experience in
                                both technical and collaborative tasks enables
                                me to contribute effectively to any software
                                development team.
                            </motion.li>
                        </ul>
                        <ul className="skills-column">
                            <h3 className="skills-title">Skills</h3>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/React-React?logo=react&logoColor=white&labelColor=%2361dbfb&color=%2361dbfb"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/TypeScript-TypeScript?style=flat&logo=typescript&color=white"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/AWS-AWS?logo=amazonwebservices&color=yellow"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/API_Gateway-API_Gateway?logo=amazonapigateway&color=purple"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/HTML5-HTML5?logo=html5"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/MySQL-MySQL?logo=mysql"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/GitHub-GitHub?logo=github&color=black"
                                />
                            </motion.li>
                        </ul>
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </div>
    );
};

export default SWEInfo;
