import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import css from "./App.module.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleIncrement = evt => {
    switch (evt.target.name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
    
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);
  }
  
  return (
    <div>
      <h1 className={css.title}>Cafe Expresso</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleIncrement}
        />   
      </Section>
      <Section title="Ststistics">
        {countTotalFeedback() > 0
          ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
          )
          : (  <Notification message={"There is no feedback"}/> )          
        }
        </Section> 
    </div>
  )
}

export default App;