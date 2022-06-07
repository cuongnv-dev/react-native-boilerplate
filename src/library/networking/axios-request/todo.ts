import { ApiService } from '@networking';

export const getTodos = async () => {
  const response = await ApiService.Get({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  });
  await new Promise(resolve => setTimeout(resolve, 2000));
  return response;
};
