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
  if (action.type === "SET_UNDERSTANDING") {
    const understandingReduce = action.payload;
    return understandingReduce;
  }
  return state;
};

const SupportReducer = (state = "", action) => {
  if (action.type === "SET_SUPPORT") {
    const supportingReduce = action.payload;

    return supportingReduce;
  }
  return state;
};

const CommentReducer = (state = "", action) => {
  if (action.type === "SET_COMMENT") {
    const comment = action.payload;
    console.log("comment:", comment);
    return comment;
  }
  return state;
};

const getFeedback = (state = [], action) => {
  if (action.type === "SET_FEEDBACK") {
    const feedback = action.payload;
    console.log("review of feed back", feedback);
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
    getFeedback,
  }),
  applyMiddleware(logger)
);

export default store;
