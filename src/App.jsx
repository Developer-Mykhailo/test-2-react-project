import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  // state
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem("feedback");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });
  const { good, neutral, bad } = feedback;

  // local Storage
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // derived values
  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  // handlers
  const handleClilck = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedbsck = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  //JSX
  return (
    <Container>
      <Description />

      <Options
        handleClilck={handleClilck}
        resetFeedbsck={resetFeedbsck}
        total={total}
      />

      {total ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
