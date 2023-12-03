import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const FeelingReducer = (state = "", action) => {
  if (action.type === "HANDLE_FEELINGS") {
    const feelings = action.payload;
    return feelings;
  }

  return state;
};

const UnderstandingReducer = (state = "", action) => {
  if (action.type === "HANDLE_UNDERSTANDING") {
    const understanding = action.payload;
    return understanding;
  }
  return state;
};

const SupportReducer = (state = "", action) => {
  if (action.type === "HANDLE_SUPPORT") {
    const supporting = action.payload;
    return supporting;
  }
  return state;
};

const CommentReducer = (state = "", action) => {
  if (action.type === "HANDLE_COMMENT") {
    const comment = action.payload;
    return comment;
  }
  return state;
};

const FeedbackReducer = (state = [], action) => {
  if (action.type === "HANDLE_FEEDBACK") {
    const feedback = action.payload;
    return [...state, feedback];
  }

  if (action.type === "CLEAR_INPUTS") {
    return [];
  }

  return state;
};

const store = createStore(
  combineReducers({
    FeelingReducer,
    UnderstandingReducer,
    SupportReducer,
    CommentReducer,
    FeedbackReducer,
  }),
  applyMiddleware(logger)
);

export default store;
