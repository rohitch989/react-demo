import { NavLink } from "react-router-dom";
const Home = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          Remix
        </NavLink>

        <ul className="nav">
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  );
};

export default Home;
