import instance from '../index';

export const getPasswordCheck = async (id: string, password: string) => {
  try {
    const response = await instance.get(`/member/password-check`, {
      headers: {
        instaId: id,
        pass: password,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching member data:', error);
    throw error;
  }
};
