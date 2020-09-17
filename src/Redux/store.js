import { createStore } from "redux";
import appReducer from "./appReducers";

const store = createStore(appReducer);

export default store;
