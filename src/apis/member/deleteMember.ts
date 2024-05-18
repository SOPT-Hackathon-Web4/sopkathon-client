import { AxiosError } from 'axios';
import instance from '../index';

export const deleteMember = async (id: number) => {
  try {
    const response = await instance.delete(`/member/delete`, {
      headers: { memberId: id },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
