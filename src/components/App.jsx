import React from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import css from "./App.module.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }  

  handleIncrement = evt => {
    const { name } = evt.target;      
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
    
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100);
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);

    return (
      <div>
        <h1 className={css.title}>Cafe Expresso</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleIncrement}
          />   
        </Section>
        <Section title="Ststistics">
          {this.countTotalFeedback() > 0
            ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()} />
            )
            : (  <Notification message={"There is no feedback"}/> )          
          }
         </Section> 
      </div>
    )
  }
};

export default App;