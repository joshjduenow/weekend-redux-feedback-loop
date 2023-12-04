import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function NewFeedbackItem() {
  const history = useHistory();

  const goToHome = () => {
    history.push("./");
  };

  return (
    <>
      <h1>Thank You !</h1>
      <Button 
            size="large"
            variant="contained"
            color="success" 
            data-testid="next" 
            onClick={goToHome}>
        Leave New Feedback
      </Button>
    </>
  );
}
export default NewFeedbackItem;
