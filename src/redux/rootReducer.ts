import { combineReducers } from "redux";
import pizzaReducer from "./reducers/pizzaReducer";

const rootReducer = combineReducers({ pizzaReducer });

export default rootReducer;
