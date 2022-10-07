import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { signInReducer } from "./Reducers";
import thunk from "redux-thunk";

const Reducer = combineReducers({
    signIn: signInReducer
});
const Store = createStore(Reducer, compose(applyMiddleware(thunk)));

export default Store