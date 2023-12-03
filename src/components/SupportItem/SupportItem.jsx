import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';


function SupportItem() {
  let [supportRating, setSupportRating] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const HandleSupport = (e) => {
    e.preventDefault();

    dispatch({
      type: "HANDLE_SUPPORT",
      payload: supportRating,
    });
    history.push("./comment");
  };

  return (
    <div>
      <h1>How well are you being supported ?</h1>
      <form>
        <h5>Support?</h5>
        <input
          data-testid="input"
          placeholder={"1-5"}
          value={supportRating}
          type={"number"}
          onChange={(e) => setSupportRating(e.target.value)}
        />
        <Button 
          size="small"
          variant="contained" 
          data-testid="next" 
          onClick={HandleSupport}>
          Next
        </Button>
      </form>
    </div>
  );
}
export default SupportItem;
