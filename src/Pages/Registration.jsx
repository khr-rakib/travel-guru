import React, { useImperativeHandle, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import appAuth from "../firebase.config";

const Registration = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    f_name: "",
    l_name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    appAuth
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((res) => {
        updateUserInfo(userInfo.f_name, userInfo.l_name);
        sendVerifyMail();
        toast.info("Please check your email. We send a verification mail");
        history.push("/login");
      })
      .catch((err) => alert(err.message));
  };

  const updateUserInfo = (f_name, l_name) => {
    const user = appAuth.currentUser;
    user
      .updateProfile({
        displayName: `${f_name} ${l_name}`,
      })
      .catch((err) => alert(err.message));
  };

  const sendVerifyMail = () => {
    const user = appAuth.currentUser;
    user.sendEmailVerification().catch((err) => {
      alert(err.message);
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
                      type="text"
                      name="f_name"
                      onChange={handleInput}
                      value={userInfo.f_name}
                      placeholder="enter your first name"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="l_name"
                      onChange={handleInput}
                      value={userInfo.l_name}
                      placeholder="enter your last name"
                      className="form-control"
                      required
                    />
                  </div>

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

                  <button className="booking__form__btn btn-block">
                    Sign Up
                  </button>
                  <p className="text-center mt-3">
                    Already Have Account?
                    <Link to="/login"> Login.</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
