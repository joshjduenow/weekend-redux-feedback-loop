import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ReviewItem() {
  const dispatch = useDispatch();

  const feeling = useSelector((store) => store.FeelingReducer);
  const understanding = useSelector((store) => store.UnderstandingReducer);
  const support = useSelector((store) => store.SupportReducer);
  const comments = useSelector((store) => store.CommentReducer);
  const FeedbackReducer = useSelector((store) => store.FeedbackReducer);
  const history = useHistory();

  const postFeedback = () => {
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments,
      },
    }).then((res) => {
      dispatch({
        type: "CLEAR_INPUTS",
      });

      history.push("/finish");
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
