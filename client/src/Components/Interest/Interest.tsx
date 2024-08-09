import "./Interest.css";

const Interest = () => {
    return (
        <div className="container">
            <h1>Interest</h1>
            <div className="table-container">
                <ul className="row-container">
                    <li className="column-1"><h2>Computational Biology</h2></li>
                    <li className="column-2"><h2>Data Visualization</h2></li>
                </ul>
                <ul className="row-container">
                    <li className="column-1"><h2>Software Engineering</h2></li>
                    <li className="column-2"><h2>Research & Teaching</h2></li>
                </ul>
            </div>
        </div>
    );
};

export default Interest;
