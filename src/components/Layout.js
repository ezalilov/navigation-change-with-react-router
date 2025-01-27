import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Link className="mr-3" to="/">
          Home
        </Link>
        <Link to="/testing">Testing</Link>
      </Navbar>
      {children}
    </>
  );
};

export default Layout;
