import { Link, NavLink } from "react-router-dom";

const Home = () => {
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
        <div>
          <h1>Welcome to Remix!</h1>
          <p>
            Remix is a full stack web framework by the creators of React Router.
          </p>
          <Link to="/users" className="btn btn-primary">
            Go to Record
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
