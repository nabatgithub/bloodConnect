// AnswerOptions.js
import React from 'react';
import styles from './EligibilityCheck.module.css';

const AnswerOptions = ({ options, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className={styles.answerContainer}>
      <div className={styles.answerContent}>
        {options.map((option, index) => (
          <div key={index} className={styles.answerOption}>
            <input
              type="radio"
              id={option}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(option)}
              className={styles.radioButton}
            />
            <label htmlFor={option} className={styles.answerText}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerOptions;
