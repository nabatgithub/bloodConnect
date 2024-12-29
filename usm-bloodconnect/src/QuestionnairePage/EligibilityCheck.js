import React, { useState } from 'react';
import styles from './EligibilityCheck.module.css';
import AnswerOptions from './AnswerOptions';
import Button from '../HomePage/Button';
import Popup from './Popup';
import IneligiblePopup from './IneligiblePopup';

const EligibilityCheck = () => {
  // List of questions
  const questions = [
    "Do you know or suspect that you may have HIV?",
    "Do you know or suspect that you may have Syphilis?",
    "Are you suffering from / carrier of Hepatitis B or Hepatitis C?"
    // "Have you been infected by other Sexually Transmitted Diseases?",
    // "Do you lead or had led a lifestyle involving changing multiple sexual partners?",
    // "Are you a man who have had sex with another man or bisexual?",
    // "Have you ever made payment or received payment for having sex?",
    // "Have you ever had sex with a commercial sex worker (prostitute)?",
    // "Have you ever taken any illegal drugs intravenously?",
    // "Have you ever had sex with any of the previous groups?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showEligiblePopup, setShowEligiblePopup] = useState(false);
  const [showIneligiblePopup, setShowIneligiblePopup] = useState(false);

  // Handle answer selection
  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle next button click
  const handleNext = () => {
    if (selectedAnswer !== null) {
      const updatedAnswers = [...answers, selectedAnswer];
      setAnswers(updatedAnswers);

      // Move to the next question if it's not the last one
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      }
    }
  };

  // Handle submit button click
  const handleSubmit = () => {
    const updatedAnswers = [...answers, selectedAnswer];
    setAnswers(updatedAnswers);

    // Check if all answers are "No" and show the eligible popup
    if (updatedAnswers.every((ans) => ans === "No")) {
      setShowEligiblePopup(true);
    } else {
      setShowIneligiblePopup(true);
    }
  };

  // Handle back button click
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedAnswer(null);
      setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
    }
  };

  // Handle popup close
  const handleClosePopup = () => {
    setShowEligiblePopup(false);
    setShowIneligiblePopup(false);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <main className={styles.eligibilityContent}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className={styles.questionContainer}>
        <h2 className={styles.questionTitle}>Are you eligible to donate?</h2>
        <p className={styles.questionText}>
          {questions[currentQuestionIndex]}
        </p>
      </div>

      <AnswerOptions
        options={['Yes', 'No']}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
      />

      <div className={styles.buttonContainer}>
        <Button text="Back" variant="backButton" onClick={handleBack} />
        {currentQuestionIndex < questions.length - 1 ? (
          <Button
            text="Next"
            variant="nextButton"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          />
        ) : (
          <Button
            text="Submit"
            variant="nextButton"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          />
        )}
      </div>

      {/* Eligible Popup */}
      {showEligiblePopup && (
        <Popup
          message="Let's schedule your appointment so you can make a difference."
          onClose={handleClosePopup}
        />
      )}

      {/* Ineligible Popup */}
      {showIneligiblePopup && (
        <IneligiblePopup
          onClose={handleClosePopup}
        />
      )}
    </main>
  );
};

export default EligibilityCheck;
