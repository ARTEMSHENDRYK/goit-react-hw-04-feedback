import PropTypes from "prop-types";
import css from "./FeedbaclOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          className={css.button}
        >{option}
        </button>
      )) 
      }
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;