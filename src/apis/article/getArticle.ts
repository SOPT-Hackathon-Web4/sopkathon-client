import instance from '../index';

export const getArticle = async (id: number) => {
  const response = await instance.get('/member/info', {
    headers: {
      id: id,
    },
  });
  return response;
};
