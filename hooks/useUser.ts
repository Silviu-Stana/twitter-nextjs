import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useUser = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/users/${userId}` : null, //null = won't call
        fetcher
    );

    return { data, error, isLoading, mutate };
};

export default useUser;
