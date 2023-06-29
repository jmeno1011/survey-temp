import { score } from '@/types';
import React from 'react'

interface QuestionProps {
  index: number;
  questionId: string;
  questionText: string;
  scoreArray: score[];
  saveScoreInArray: ()=>void;
}

const Question = ({
  index, 
  questionId,
  questionText,
  scoreArray,
  saveScoreInArray
}:QuestionProps) => {
  const scores = [
    {
        id: "0score",
        score: 0,
        text: "전혀 그렇지 않다.",
        css: "vbBtn"
    },
    {
        id: "1score",
        score: 1,
        text: "가끔 그렇다.",
        css: "bBtn"
    },
    {
        id: "2score",
        score: 2,
        text: "보통이다.",
        css: "nBtn"
    },
    {
        id: "3score",
        score: 3,
        text: "자주 그렇다.",
        css: "gBtn"
    },
]
  return (
    <div>Question</div>
  )
}

export default Question