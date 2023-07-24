export interface Score {
  [key: string]: string;
}

export interface User {
  email?: string;
  phone: string;
  ages: string;
  sex: string;
  check: boolean;
}

export interface QuestionList {
  id: string;
  question: string;
}
