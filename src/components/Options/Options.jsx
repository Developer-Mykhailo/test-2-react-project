import s from "./Options.module.css";

const Options = () => {
  return (
    <div className={s.options_wrap}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button className={s.reset}>Reset</button>
    </div>
  );
};

export default Options;
