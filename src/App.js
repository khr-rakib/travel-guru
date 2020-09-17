import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Booking from "./Pages/Booking";
import Login from "./Pages/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ReadyGo from "./Pages/ReadyGo";
import Registration from "./Pages/Registration";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./Pages/ForgotPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <PrivateRoute path="/ready-to-go">
            <ReadyGo />
          </PrivateRoute>
          <Route exact path="/:slug" component={Booking} />
          <Route path="*" component={NotFound} />
        </Switch>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
