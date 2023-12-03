import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingsItem() {
  let [feelings, setFeelings] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const HandleFeeling = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_FEELINGS",
      payload: feelings,
    });
    history.push("./understandInfo");
  };

  return (
    <div>
      <h1>How well are you feeling today ?</h1>
      <form>
        <input
          data-testid="input"
          placeholder={"1-5"}
          value={feeling}
          type={"number"}
          onChange={(e) => setFeelings(e.target.value)}
        />
        <button
          data-testid="next" 
          onClick={HandleFeeling}>
          Next
        </button>
      </form>
    </div>
  );
}
export default FeelingsItem;
