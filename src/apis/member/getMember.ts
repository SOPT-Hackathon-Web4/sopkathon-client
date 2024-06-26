import instance from '../index';

export const getMember = async (id: string) => {
  try {
    const response = await instance.get(`/member`, {
      headers: {
        instaId: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching member data:', error);
    throw error;
  }
};
