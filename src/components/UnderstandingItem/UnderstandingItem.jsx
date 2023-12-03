import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function UnderstandingItem() {
  let [understanding, setUnderstanding] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const HandleUnderstanding = (e) => {
    e.preventDefault();

    dispatch({
      type: "HANDLE_UNDERSTANDING",
      payload: understanding,
    });
    history.push("./support");
  };

  return (
    <div>
      <h1>How well are you understanding the content ?</h1>
      <form>
        <input
          data-testid="input"
          placeholder={"1-5"}
          value={understanding}
          type={"number"}
          onChange={(e) => setUnderstanding(e.target.value)}
        />
        <button 
          data-testid="next" 
          onClick={HandleUnderstanding}>
          Next
        </button>
      </form>
    </div>
  );
}
export default UnderstandingItem;
