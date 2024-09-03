import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
