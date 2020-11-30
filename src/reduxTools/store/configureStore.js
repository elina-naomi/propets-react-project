import {applyMiddleware, createStore} from "redux";
import {accountReducer} from "../reducers/accountReducer";
import thunk from "redux-thunk";

export const store = createStore(accountReducer, {}, applyMiddleware(thunk));