import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

  function ReviewItem() {
    const dispatch = useDispatch();

  const FeelingRating = useSelector((store) => store.FeelingRating);
  const UnderstandingRating = useSelector((store) => store.UnderstandingRating);
  const SupportRating = useSelector((store) => store.SupportRating);
  const comment = useSelector((store) => store.Comment);
  const history = useHistory();
  const getFeedback = useSelector((store) => store.getFeedback);

  const postFeedbackToServer = () => {
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: FeelingRating,
        understanding: UnderstandingRating,
        support: SupportRating,
        comments: comment,
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

      <p>Feelings :{FeelingRating}</p>
      <p>Understanding: {UnderstandingRating}</p>
      <p>Support: {SupportRating}</p>
      <p>Comments: {comment}</p>

      <button data-testid="next" onClick={postFeedbackToServer}>
        Submit
      </button>
    </div>
  );
}
export default ReviewItem;
