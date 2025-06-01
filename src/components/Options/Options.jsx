import s from "./Options.module.css";

const Options = ({ handleClilck, resetFeedbsck, total }) => {
  return (
    <div className={s.options_wrap}>
      <button onClick={() => handleClilck("good")}>Good</button>
      <button onClick={() => handleClilck("neutral")}>Neutral</button>
      <button onClick={() => handleClilck("bad")}>Bad</button>

      {total > 0 && (
        <button className={s.reset} onClick={resetFeedbsck}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
