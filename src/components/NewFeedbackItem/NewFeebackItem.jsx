import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

function NewFeedbackItem() {
  const history = useHistory();

  const goToHome = () => {
    history.push("./");
  };

  return (
    <>
      <h1>Thanks !</h1>
      <Button 
            size="large"
            variant="contained" 
            data-testid="next" 
            onClick={goToHome}>
        Leave New Feedback
      </Button>
    </>
  );
}
export default NewFeedbackItem;
