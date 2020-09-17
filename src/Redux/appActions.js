import { BOOKING_INFO, LOGGEDIN_USER_INFO } from "./appTypes";

export const bookingInformationFun = (info) => {
  return {
    type: BOOKING_INFO,
    payload: info,
  };
};

export const loggedInUserFun = (info) => {
  return {
    type: LOGGEDIN_USER_INFO,
    payload: info,
  };
};
