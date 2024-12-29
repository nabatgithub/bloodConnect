import React from 'react';
import styles from './EligibilityCheck.module.css';

const Question = ({ title, question }) => {
  return (
    <section className={styles.questionContainer}>
      <h2 className={styles.questionTitle}>{title}</h2>
      <p className={styles.questionText}>{question}</p>
    </section>
  );
};

export default Question;