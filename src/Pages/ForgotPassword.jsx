import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import authApp from "../firebase.config";
const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    authApp
      .sendPasswordResetEmail(email)
      .then(() => {
        toast.info("Please check your email. We send a password reset Link.");
        history.push("/login");
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="enter your email"
                      className="form-control"
                    />
                  </div>

                  <button className="booking__form__btn btn-block">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
