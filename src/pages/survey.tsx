import React, { ChangeEvent, FormEvent, useState } from "react";
import { QuestionList } from "@/data";
import Question from "@/components/survey/Question/Question";
import { v4 as uuidv4 } from "uuid";
import { Score } from "@/types";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/modules";
import styles from "../styles/Survey.module.css";
import Button from "@/components/common/Button/Button";

const Survey = () => {
  let router = useRouter();
  const [scoreArray, setScoreArray] = useState<Score>({});
  const { userInfo } = useSelector((state: RootState) => state);
  console.log("userInfo - redux::", userInfo);

  const saveScoreInArray = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScoreArray((prev: Score) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.keys(scoreArray).length !== 6) {
      alert("문진을 모두 진행해주세요!");
    } else {
      const uuid = uuidv4();
      // const total = Object.values(scoreArray).reduce(
      //   (prev, curr) => prev + curr.score,
      //   0
      // );

      const data = {
        ...userInfo,
        // scores: scoreArr,
        // total: total,
        // dmslsLevel: setDmslsLevel(scoreArr, total),
        // createAt: Date.now(),
        // agreement: check ? "동의" : "비동의",
        // event: "비동의",
      };
    }
  };
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div>
        {QuestionList.map((question, index) => (
          <Question
            key={question.id}
            index={index + 1}
            questionId={question.id}
            questionTitle={question.question}
            scoreArray={scoreArray}
            saveScoreInArray={saveScoreInArray}
          />
        ))}
      </div>
      <Button text={"결과 저장"} onClick={onSubmit} />
    </form>
  );
};

export default Survey;
