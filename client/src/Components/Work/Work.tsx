import { useEffect } from "react";
import "./Work.css";
import { motion, useAnimation } from "framer-motion";
import Reed from "../../assets/reed-logo.png";
import Amazon from "../../assets/amazon-logo.png";
import Lewis from "../../assets/lewis-logo.png";

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
    section: {
        opacity: 1,
        x: 10,
        transition: {
            duration: 0.5,
        },
    },
};
const Work = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();

    const work1 = useAnimation();
    const work2 = useAnimation();
    const work3 = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Start the first animation
            await controls1.start("visible");
            // Start the second animation after the first one finishes
            await controls2.start("visible");
        };
        sequence();
    }, [controls1, controls2]);

    useEffect(() => {
        const sequence = async () => {
            await work1.start("section");
            await work2.start("section");
            await work3.start("section");
        };
        sequence();
    }, [work1, work2, work3]);
    return (
        <div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        variants={draw}
                        initial="hidden"
                        animate={work1}
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
                            y2="99%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="column-2">
                    <h2>Computational Biology Researcher - Reed College</h2>

                    <div className="location-time">
                        <img
                            src={Reed}
                            style={{
                                height: "50px",
                            }}
                        ></img>
                        <h3> Portland, Oregon (July 2023 - Present)</h3>
                    </div>
                    <ul>
                        <li>
                            Working under Dr. Anna Ritz’s lab to support ongoing
                            research in network biology{" "}
                        </li>
                        <li>
                            Co-leading a web tool project, ProteinWeaver, to
                            enhance visualization and analysis of protein
                            interaction networks through the integration of
                            ontological information. Presented poster at UCLA's
                            Regulatory & Systems Genomics conference. Data
                            driven project supporting three non-human species
                            interactomes.
                        </li>
                        <li>
                            Collaborating with UW-Madison in a project, SPRAS,
                            to create a streamlined framework for handling
                            multiple pathway reconstruction algorithms that
                            connect genes and proteins of interest in the
                            context of a general PPI network. Familiar with
                            complex pathway reconstruction algorithms with large
                            network data.
                        </li>
                        <li>
                            Working in a collaborative research group with
                            diverse backgrounds in computer science, biology,
                            and neuroscience through sharing scientific
                            literature and ideas
                        </li>
                    </ul>
                </div>
            </div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        variants={draw}
                        initial="hidden"
                        animate={work2}
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={2}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="99%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={3}
                        />
                    </motion.svg>
                </div>
                <div className="column-2">
                    <h2>Software Development Engineer Intern - Amazon, Inc.</h2>
                    <div className="location-time">
                        <img
                            src={Amazon}
                            style={{
                                height: "50px",
                            }}
                        ></img>
                        <h3> Bellevue, Washington (May 2022 - August 2022)</h3>
                    </div>
                    <ul>
                        <li>
                            Led a project that improved a website's user
                            experience and added features for the Supply Chain
                            and Optimisation Technology division.
                        </li>
                        <li>
                            Implemented new API calls in the backend for new
                            feature support. (DynamoDB, AWS Lambda)
                        </li>
                        <li>
                            Redesigned UI to a more user-friendly design.
                            (React.js, TypeScript)
                        </li>
                        <li>
                            Collaborated with a team of engineers to gain
                            feedback and effectively communicate progress and
                            blockers
                        </li>
                    </ul>
                </div>
            </div>
            <div className="work-container">
                <div className="column-1">
                    {" "}
                    <motion.svg
                        width="100%"
                        height="100%"
                        // viewBox="0 0 0% 0%"
                        variants={draw}
                        initial="hidden"
                        animate={work3}
                    >
                        <motion.circle
                            cx="50%"
                            cy="10%"
                            r="5%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls1}
                            custom={4}
                        />
                        <motion.line
                            x1="50%"
                            y1="15%"
                            x2="50%"
                            y2="99%"
                            stroke="black"
                            variants={draw}
                            initial="hidden"
                            animate={controls2}
                            custom={5}
                        />
                    </motion.svg>
                </div>
                <div className="column-2">
                    <h2>
                        Unity Game Developer Researcher - Lewis & Clark College
                    </h2>
                    <div className="location-time">
                        <img
                            src={Lewis}
                            style={{
                                height: "50px",
                            }}
                        ></img>
                        <h3> Portland, Oregon (May 2021 - July 2021)</h3>
                    </div>
                    <ul>
                        <li>
                            Worked on an interdisciplinary team to evaluate the
                            effectiveness of video games as risk communication
                            tools.
                        </li>
                        <li>
                            Continued working on a Unity-based game, called
                            Cascadia 9.1, which is an education-style game about
                            earthquake preparedness.
                        </li>
                        <li>
                            Communicated and divided daily tasks between our
                            programmers.
                        </li>
                        <li>
                            Presented our research findings and game development
                            at the annual Rogers Poster Presentations.
                        </li>
                        <li>
                            Won Best Student Poster competition at CCSC-NW, a
                            regional computer science conference.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Work;
