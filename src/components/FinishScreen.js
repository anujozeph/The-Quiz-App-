import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percantage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percantage === 100) emoji = "💰";
  if (percantage >= 80 && percantage <= 100) emoji = "🎉";
  if (percantage >= 50 && percantage <= 80) emoji = "🙂";
  if (percantage >= 0 && percantage <= 50) emoji = "🤔";
  if (percantage === 0) emoji = "💣";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percantage)}% )
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
