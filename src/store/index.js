import thunk from "redux-thunk";
import reducers from "./reducers/rootReducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
