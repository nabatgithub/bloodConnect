import React from "react";
import { Link } from "react-router-dom";
import Button from "../HomePage/Button";
import styles from './QuestionnaireStartPage.module.css';

function StartPageContent() {
  return (
    <main className={styles.questionnaire}>
        <div className={styles.mainContent}>
      <h2 className={styles.mainTitle}>Are you eligible to donate?</h2>
      <p className={styles.mainDescription}>
        Let's find out together. Answer a few simple questions to check if you meet the necessary requirements to help save lives through blood donation.
      </p>
      <p className={styles.disclaimer}>
        Please answer all questions truthfully—your honesty helps protect both you and the receiver.
      </p>
      <div className={styles.actionArea}>
        <Link to="/questions">
            <Button text="Start" variant="cta" />
          </Link>
        </div>
        </div>
    </main>
  );
}

export default StartPageContent;