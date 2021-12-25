import { createStore } from "redux";
import reducer from "./reduxconfig/reducers";

const store = createStore(reducer);

export default store;
