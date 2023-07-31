import { Score } from "@/types";
import React from "react";
import { scoreRange } from "../../../data/question";
import styles from "./Question.module.css";

interface QuestionProps {
  index: number;
  questionId: string;
  questionTitle: string;
  scoreArray: Score[];
  saveScoreInArray: () => void;
}

const Question = ({
  index,
  questionId,
  questionTitle,
  scoreArray,
  saveScoreInArray,
}: QuestionProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{questionTitle}</h3>
      <div className={styles.btnGroup}>
        {scoreRange.map((score) => (
          <label
            className={styles.radioLabel}
            key={`${questionId}_${score.id}`}
          >
            {score.score}
            <input type={"radio"} name={questionId} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;