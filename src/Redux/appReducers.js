import { BOOKING_INFO, LOGGEDIN_USER_INFO } from "./appTypes";
const initialState = {
  bookingInformation: {},
  loggedInUserInformation: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_INFO:
      return {
        ...state,
        bookingInformation: action.payload,
      };

    case LOGGEDIN_USER_INFO:
      return {
        ...state,
        loggedInUserInformation: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
