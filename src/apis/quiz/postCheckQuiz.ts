import { AxiosError } from 'axios';
import instance from '../index';

interface QuizData {
  instaId: string;
  quizDetails: boolean[];
}

export const postCheckQuiz = async (data: QuizData) => {
  try {
    const response = await instance.post(`/quiz/${`1`}`, data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
