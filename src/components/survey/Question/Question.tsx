import { Score } from "@/types";
import React, { ChangeEvent } from "react";
import { scoreRange } from "../../../data/question";
import styles from "./Question.module.css";

interface QuestionProps {
  index: number;
  questionId: string;
  questionTitle: string;
  scoreArray: Score;
  saveScoreInArray: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Question = ({
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
            <input
              type={"radio"}
              name={questionId}
              value={score.score}
              onChange={saveScoreInArray}
              checked={scoreArray[questionId] === score.score}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
