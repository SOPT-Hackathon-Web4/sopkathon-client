import instance from '../index';

export const getMemberDetail = async (id: string) => {
  try {
    const response = await instance.get(`/member/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching member data:', error);
    throw error;
  }
};
