import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingsItem() {
  let [feelings, setFeelings] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const HandleFeelings = (e) => {
    e.preventDefault();

    dispatch({
      type: "HANDLE_FEELINGS",
      payload: feelings,
    });
    history.push("./understand");
  };

  return (
    <div>
      <h1>How well are you feeling today ?</h1>
      <form>
        <h5>Feeling?</h5>
        <input
          data-testid="input"
          placeholder={"1-5"}
          value={feelings}
          type={"number"}
          onChange={(e) => setFeelings(e.target.value)}
        />
        <button
          data-testid="next" 
          onClick={HandleFeelings}>
          Next
        </button>
      </form>
    </div>
  );
}
export default FeelingsItem;
