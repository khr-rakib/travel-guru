import React from "react";
import { Link } from "react-router-dom";
import { db } from "../db";

const Home = () => {
  return (
    <div className="app__homepage">
      <div className="container pd__top">
        <div className="row">
          <div className="col-md-4">
            <div className="home__item__description">
              <h1>Cox's Bazar</h1>
              <p>
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it ...
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tour__item__container">
              {db.map((item) => (
                <Link
                  key={Math.random()}
                  to={`/${item.slug}`}
                  className="tour__item"
                >
                  <img src={item.banner} alt="" />
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
