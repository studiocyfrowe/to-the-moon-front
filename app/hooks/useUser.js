import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useUser = (id) => {
  const { data, error } = useSWR(id ? `/api/user/${id}` : null, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
