import React, { useState } from "react";
import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import appAuth from "../firebase.config";
import { loggedInUserFun } from "../Redux/appActions";
import googleIcon from "../Assets/google.png";
import fbIcon from "../Assets/fb.png";

const Login = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isloggedIn = useSelector((state) => state.loggedInUserInformation);
  const { from } = location.state || { from: { pathname: "/ready-to-go" } };

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "email") {
      const rex = /\S+@\S+\.\S+/;
      rex.test();
    }
    if (e.target.name === "password") {
      const rex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
      rex.test();
    }
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  if (isloggedIn.email) {
    history.push("/ready-to-go");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    appAuth
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((res) => {
        dispatch(loggedInUserFun(userInfo));
        toast.success("You have successfully logged In.");
        history.replace(from);
      })
      .catch((err) => toast.error(err.message));
  };

  const handleFBLogin = () => {
    appAuth
      .signInWithPopup(fbProvider)
      .then((res) => {
        dispatch(loggedInUserFun(res.user));
        toast.success("You have successfully logged In.");
        history.replace(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGoogleLogin = () => {
    appAuth
      .signInWithPopup(googleProvider)
      .then((res) => {
        dispatch(loggedInUserFun(res.user));
        toast.success("You have successfully logged In.");
        history.replace(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="app__homepage">
      <div className="container pd__top">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      onChange={handleInput}
                      value={userInfo.email}
                      placeholder="enter your email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      onChange={handleInput}
                      value={userInfo.password}
                      placeholder="enter your password"
                      className="form-control"
                      required
                    />
                  </div>
                  <button
                    className="booking__form__btn btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="text-center mt-3">
                    Don't Have Account?
                    <Link to="/registration">Create an Account.</Link>
                    <br />
                    <Link to="/forgot">Forgot Password?</Link>
                  </p>

                  <div className="login__social">
                    <button onClick={handleFBLogin}>
                      <img src={fbIcon} alt="" />
                      Login with Facebook
                    </button>
                    <button onClick={handleGoogleLogin} type="button">
                      <img src={googleIcon} alt="" />
                      Login with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
