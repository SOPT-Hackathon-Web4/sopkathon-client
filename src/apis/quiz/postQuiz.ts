import { AxiosError } from 'axios';
import instance from '../index';

interface QuizDetail {
  question: string;
  answer: boolean;
}

interface QuizData {
  quizDetails: QuizDetail[];
}

export const postQuiz = async (data: QuizData) => {
  try {
    const response = await instance.post(`/quiz`, data, {
      headers: {
        memberId: 1,
      },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
