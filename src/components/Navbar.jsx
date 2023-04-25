import { useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export const Navigator = ({ logged, user, cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/")
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black border border-3 border-white rounded my-2">
        <div className="container-fluid">
          <li className="nav-item">
            <Link className="m-2 text-white" to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: "150px", height: "150px" }}
              />
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
              <Link
                className="m-2 btn btn-secondary text-white position-relative"
                to="/cart"
              >
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.totalCount}
                </span>
              </Link>
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
