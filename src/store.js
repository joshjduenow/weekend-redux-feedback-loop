import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const FeelingReducer = (state = "", action) => {
  if (action.type === "HANDLE_FEELINGS") {
    const feelingsReduce = action.payload;
    return feelingsReduce;
  }

  return state;
};

const UnderstandingReducer = (state = "", action) => {
  if (action.type === "HANDLE_UNDERSTANDING") {
    const understandingReduce = action.payload;
    return understandingReduce;
  }
  return state;
};

const SupportReducer = (state = "", action) => {
  if (action.type === "HANDLE_SUPPORT") {
    const supportingReduce = action.payload;
    return supportingReduce;
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
