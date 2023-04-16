import { useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/UserSlice";
import { Link } from "react-router-dom";

export const Navigator = ({ logged, user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetUser());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark rounded mt-1">
        <div className="container-fluid">
          <li className="nav-item">
            <Link className="m-2 text-white" to="/">
              Home
            </Link>
          </li>
          {!logged && (
            <div className="nav-item">
              <Link className="btn btn-secondary m-2 text-white" to="/login">
                Login
              </Link>
              <Link
                className="btn btn-secondary m-2 text-white"
                to="/registration"
              >
                Registration
              </Link>
            </div>
          )}
          {logged && (
            <div className="nav-item">
              <span className="navbar-text text-white">
                {user.firstName} {user.lastName}
              </span>
              <button
                className="m-2 btn btn-secondary text-white position-relative"
                to="/logout"
              >
                Carrito
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
              </button>
              <button
                className="m-2 btn btn-secondary text-white"
                to="/logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
