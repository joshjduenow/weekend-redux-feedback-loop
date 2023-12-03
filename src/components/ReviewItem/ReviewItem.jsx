import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ReviewItem() {
  const dispatch = useDispatch();

  const FeelingReducer = useSelector((store) => store.FeelingReducer);
  const UnderstandingReducer = useSelector((store) => store.UnderstandingReducer);
  const SupportReducer = useSelector((store) => store.SupportReducer);
  const CommentReducer = useSelector((store) => store.CommentReducer);
  const history = useHistory();
  // const FeedbackReducer = useSelector((store) => store.FeedbackReducer);

  const postFeedback = () => {
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: FeelingReducer,
        understanding: UnderstandingReducer,
        support: SupportReducer,
        comments: CommentReducer,
      },
    }).then((res) => {
      dispatch({
        type: "CLEAR_INPUTS",
      });

      history.push("./finish");
    });
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>

      <p>Feelings :{FeelingReducer}</p>
      <p>Understanding: {UnderstandingReducer}</p>
      <p>Support: {SupportReducer}</p>
      <p>Comments: {CommentReducer}</p>

      <button data-testid="next" onClick={postFeedback}>
        Submit
      </button>
    </div>
  );
}
export default ReviewItem;
