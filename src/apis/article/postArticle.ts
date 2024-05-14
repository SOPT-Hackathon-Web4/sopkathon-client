import { AxiosError } from 'axios';
import instance from '../index';

export const postArticle = async (data: string) => {
  try {
    const response = await instance.post(`/article`, data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
