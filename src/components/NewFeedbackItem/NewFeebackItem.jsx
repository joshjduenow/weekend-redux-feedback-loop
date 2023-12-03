import { useHistory } from "react-router-dom";

function NewFeedbackItem() {
  const history = useHistory();

  const goToHome = () => {
    history.push("./");
  };

  return (
    <>
      <h1>Thanks !</h1>
      <button data-testid="next" onClick={goToHome}>
        Leave New Feedback
      </button>
    </>
  );
}
export default NewFeedbackItem;
