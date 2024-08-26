import { useEffect, useState } from "react";
import "./Collapse.css";

const Collapse = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    // Handler to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        console.log(isVisible);
    }, [isVisible]);

    return (
        <div className="collapse-container">
            <button onClick={toggleVisibility}>Software Engineering</button>

            <div className={`content-container ${isVisible ? "" : "hidden"}`}>
                <ul>
                    <li>
                        <h3>Sumamry</h3>
                    </li>
                    <li>
                        <h3>Tools</h3>
                    </li>
                </ul>
                Text is showing
            </div>
        </div>
    );
};

export default Collapse;
