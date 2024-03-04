import { useInfiniteQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetPost = (searchTerm = '', page = 1) => {
  return useInfiniteQuery({
    queryKey: ['postloop', searchTerm, page],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      const params = { _page: page, _limit: 12 };
      if (searchTerm) {
        params.q = searchTerm; 
      }
      return request.get("/posts", { params }).then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages, params) => {
      return lastPage;
    }
  });
}
