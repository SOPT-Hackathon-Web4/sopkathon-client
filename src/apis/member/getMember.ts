import instance from '../index';

export const getMeber = async (id: number) => {
  const response = await instance.get('/member', {
    headers: {
      'insta-id': id,
    },
  });
  return response;
};
