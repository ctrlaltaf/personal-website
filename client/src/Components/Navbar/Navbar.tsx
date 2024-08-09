import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-ul">
        {/* <li>
          <p className="navbar-p">Altaf</p>
        </li> */}
        <div className="navbar-menu">
          <li>
            <Link className="navbar-link" to={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to={`/about`}>
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to={`/blog`}>
              Blog
            </Link>
          </li>
        </div>
{/* 
        <li className="navbar-last">
          <p className="navbar-p">Github/Linkedin</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
