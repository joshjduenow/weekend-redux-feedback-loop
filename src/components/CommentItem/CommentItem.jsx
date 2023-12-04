import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CommentItem() {
  let [comment, setComment] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const HandleComment = (e) => {
    e.preventDefault();

    dispatch({
      type: "HANDLE_COMMENT",
      payload: comment,
    });
    history.push("./review");
  };

  return (
    <div>
      <h1>Any comments you want to leave ?</h1>
      <form>
        
        <TextField 
          id="filled-basic"
          helperText="Tell us how we're doing" 
          variant="standard"
          color="success"
          data-testid="input"
          placeholder={"text"}
          value={comment}
          type={"text"}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button 
          size="small"
          variant="contained" 
          data-testid="next" 
          onClick={HandleComment}>
          Next
        </Button>
      </form>
    </div>
  );
}
export default CommentItem;
