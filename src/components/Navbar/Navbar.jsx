import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo-white.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appAuth from "../../firebase.config";
import { toast } from "react-toastify";
import { loggedInUserFun } from "../../Redux/appActions";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.loggedInUserInformation);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    appAuth
      .signOut()
      .then(() => {
        dispatch(loggedInUserFun({}));
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light app__navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className=" app__logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            type="text"
            className="form-control app__search__bar ml-auto w-25"
            placeholder="Search your destination..."
          />

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <span className="nav-link white__color" href="#">
                News
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link white__color" href="#">
                Destination
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link white__color" href="#">
                Blog
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link white__color" href="#">
                Contact
              </span>
            </li>

            <li className="nav-item">
              {isLoggedIn.email ? (
                <button onClick={handleLogout} className="nav-link  app__btn">
                  Logout
                </button>
              ) : (
                <Link className="nav-link  app__btn" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
