import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../db";
import { bookingInformationFun } from "../Redux/appActions";

const Booking = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [content, setContent] = useState([]);
  const bookingInformation = useSelector((state) => state.bookingInformation);
  const [bookingInfo, setBookingInfo] = useState({
    origin: "",
    destination: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    const paramsItem = db.filter((item) => item.slug === slug);
    setContent(paramsItem);
    setBookingInfo({
      ...bookingInfo,
      destination: paramsItem[0].name,
    });
  }, [slug]);

  const { name, description } = content[0] ? content[0] : [];

  const handleInput = (e) => {
    setBookingInfo({
      ...bookingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookingInformationFun(bookingInfo));
    history.replace("/ready-to-go");
  };

  return (
    <div className="app__homepage">
      <div className="container pd__top">
        <div className="row">
          <div className="col-md-7">
            <div className="home__item__description">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="booking__form">
              <form onSubmit={handleSubmit}>
                <div className="booking__form__group">
                  <label htmlFor="origin">Origin</label>
                  <input
                    name="origin"
                    value={bookingInfo.origin}
                    onChange={handleInput}
                    className="booking__form__control"
                    type="text"
                    required
                  />
                </div>
                <div className="booking__form__group">
                  <label htmlFor="destination">Destination</label>
                  <input
                    name="destinitaion"
                    onChange={handleInput}
                    value={name}
                    className="booking__form__control"
                    type="text"
                  />
                </div>

                <div className="booking__form__calendar">
                  <div className="booking__form__group">
                    <label htmlFor="from">From</label>
                    <input
                      name="from"
                      value={bookingInfo.from}
                      onChange={handleInput}
                      className="booking__form__control"
                      type="date"
                      required
                    />
                  </div>
                  <div className="booking__form__group">
                    <label htmlFor="to">To</label>
                    <input
                      name="to"
                      value={bookingInfo.to}
                      onChange={handleInput}
                      className="booking__form__control"
                      type="date"
                      required
                    />
                  </div>
                </div>

                <button className="btn-block booking__form__btn">
                  Start Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
