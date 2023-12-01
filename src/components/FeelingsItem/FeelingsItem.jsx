import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingsItem() {
  const dispatch = useDispatch();

  const [feelingInput, setFeelingInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "FEELINGS_INFO",
      payload: { feelingInput },
    });

    history.push("/checkout");
  };

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFeelingInput(e.target.value)}
          value={feelingInput}
          type="number"
          placeholder="Feeling?"
        />
      </form>
    </div>
  );
}

export default FeelingsItem;
