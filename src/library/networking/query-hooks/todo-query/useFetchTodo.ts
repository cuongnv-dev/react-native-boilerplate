import { useQuery } from 'react-query';

import { getTodos } from '../../axios-request';

export const useGetTodoList = () => {
  return useQuery<Array<any>, any>(
    'todos',
    async () => {
      const res: any = await getTodos();
      return res;
    },
    {
      staleTime: 3 * 60 * 1000,
    },
  );
};
