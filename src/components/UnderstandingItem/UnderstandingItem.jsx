import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
        
        <TextField 
          id="filled-basic"
          helperText="Tell us how well you understood todays content" 
          variant="standard"
          color="success"
          data-testid="input"
          placeholder={"1-5"}
          value={understanding}
          type={"number"}
          onChange={(e) => setUnderstanding(e.target.value)}
        />
        <Button 
          size="small"
          variant="contained" 
          data-testid="next" 
          onClick={HandleUnderstanding}>
          Next
        </Button>
      </form>
    </div>
  );
}
export default UnderstandingItem;
