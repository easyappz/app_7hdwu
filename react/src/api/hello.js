import instance from './axios';

export async function getHello() {
  const response = await instance.get('/api/hello/');
  return response.data;
}

export default getHello;
