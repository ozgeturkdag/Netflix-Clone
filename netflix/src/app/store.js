import { createStore, combineReducers, applyMiddleware } from "redux";
import { movieReducer } from "./reducers/movieReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
