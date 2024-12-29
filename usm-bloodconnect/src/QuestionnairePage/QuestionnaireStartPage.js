import React from "react";
import styles from './QuestionnaireStartPage.module.css';
import StartPageContent from './StartPageContent';

function QuestionnaireStartPage() {
  return (
    <div className={styles.questionnaire}>
      <StartPageContent />
    </div>
  );
}

export default QuestionnaireStartPage;