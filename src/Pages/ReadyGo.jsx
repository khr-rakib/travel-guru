import React from "react";
import { useSelector } from "react-redux";
import { hotelDB } from "../db";
import star_1 from "../Assets/star_1_.png";

const ReadyGo = () => {
  const bookingInfo = useSelector((state) => state.bookingInformation);

  const hotels = hotelDB.filter(
    (hotel) => hotel.hname === bookingInfo.destination
  );

  return (
    <div className="app__homepage scroll">
      <div className="container pd__top">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="hotel__item__container">
                    <p className="text-muted mb-0">
                      252 stays {bookingInfo.to} guest
                    </p>
                    <h5>Stay in {bookingInfo.destination}</h5>
                    {hotels.map((hotel) => (
                      <div className="hotel__item">
                        <div className="hotel__item__left">
                          <img src={hotel.banner} alt="" />
                        </div>
                        <div className="hotel__item__right">
                          <h5>{hotel.name}</h5>
                          <p className="text-muted">
                            4 guests 2 bedrooms 2 beds 2 baths <br />
                            Wif Air conditioning Kitchen <br />
                            Cancellation fexibility availiable
                          </p>
                          <p>
                            <img src={star_1} alt="" />{" "}
                            <strong>4.9 (20)</strong> &emsp;{" "}
                            <strong>$35</strong>/night $167/total
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <iframe
                    className="app__iframe"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBSXAXzXMNFi1m25vlMxw83djmZUo2FwPM&q=${bookingInfo.destination}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyGo;
