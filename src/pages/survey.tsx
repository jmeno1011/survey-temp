import React, { FormEvent, useState } from 'react'
import { QuestionList } from '@/data';
import Question from '@/components/survey/Question';
import { v4 as uuidv4 } from "uuid";
import { score } from '@/types';
import { ref, set } from 'firebase/database';
import { database } from '../../firebaseInit';
import { useRouter } from 'next/router';

const survey = () => {
  let router = useRouter();
  const [scoreArray, setScoreArray] = useState<score[]>([]);
  const saveScoreInArray = ()=>{

  }
  const onSubmit = (e:FormEvent) => {
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
        // email: email,
        // phone: phone,
        // sex: sex,
        // scores: scoreArr,
        // total: total,
        // dmslsLevel: setDmslsLevel(scoreArr, total),
        // createAt: Date.now(),
        // agreement: check ? "동의" : "비동의",
        // event: "비동의",
        // ageRange: ages,
      };
      set(ref(database, `dslsCollection/` + uuid), data)
        .then(() => {
          router.push(`${uuid}/result`);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
            <div>
              {QuestionList.map((question, index) => (
                <Question
                  key={question.id}
                  index={index + 1}
                  questionId={question.id}
                  questionText={question.question}
                  scoreArray={scoreArray}
                  saveScoreInArray={saveScoreInArray}
                />
              ))}
            </div>
            <div className="form-button">
              <button>결과 저장</button>
            </div>
          </form>
    </div>
  )
}

export default survey