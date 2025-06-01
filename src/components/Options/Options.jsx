import s from "./Options.module.css";
import { clsx } from "clsx";

const Options = ({ handleClilck, resetFeedbsck, total }) => {
  return (
    <div className={s.options_wrap}>
      <button onClick={() => handleClilck("good")}>Good</button>
      <button onClick={() => handleClilck("neutral")}>Neutral</button>
      <button onClick={() => handleClilck("bad")}>Bad</button>

      <button
        className={clsx(s.reset, { [s.show]: total > 0 })}
        onClick={resetFeedbsck}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
