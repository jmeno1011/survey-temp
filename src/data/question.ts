interface QuestionList {
  id: string;
  question: string;
}
export const questionList: QuestionList[] = [
  {
    id: "test01",
    question: "첫번째 질문입니다.",
  },
  {
    id: "test02",
    question: "두번째 질문입니다.",
  },
  {
    id: "test03",
    question: "세번째 질문입니다.",
  },
  {
    id: "test04",
    question: "네번째 질문입니다.",
  },
  {
    id: "test05",
    question: "다섯번째 질문입니다.",
  },
];

interface ScoreRange {
  id: string;
  score: number;
  text: string;
}

/**
 * {
    id: "1번",
    score: 1,
    text: "1점",
  },
  {
    id: "2번",
    score: 2,
    text: "2점",
  },
  {
    id: "3번",
    score: 3,
    text: "3점",
  },
  {
    id: "4번",
    score: 4,
    text: "4점",
  },
  {
    id: "5번",
    score: 5,
    text: "5점",
  },
 */

export const scoreRange: ScoreRange[] = [
  {
    id: "1번",
    score: 1,
    text: "1점",
  },
  {
    id: "2번",
    score: 2,
    text: "2점",
  },
  {
    id: "3번",
    score: 3,
    text: "3점",
  },
  {
    id: "4번",
    score: 4,
    text: "4점",
  },
  {
    id: "5번",
    score: 5,
    text: "5점",
  },
];
