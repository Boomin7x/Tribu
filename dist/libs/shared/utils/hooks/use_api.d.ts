import { AxiosResponse } from 'axios';
interface UseApiProps<T> {
    queryKey: string[];
    showLoader?: boolean;
    showErrorToast?: boolean;
    onProgress?: (progress: number) => void;
    onSuccess?: (data: T) => void;
    callBack: (data?: any) => Promise<AxiosResponse<T, any>>;
}
export declare const query: <T>({ queryKey, onProgress, showLoader, showErrorToast, callBack, }: UseApiProps<T>) => import('@tanstack/react-query').UseQueryResult<T, Error>;
export declare const mutate: <T>({ queryKey, showLoader, showErrorToast, callBack, onSuccess, }: UseApiProps<T>) => import('@tanstack/react-query').UseMutationResult<T, Error, any, unknown>;
export declare const useApi: {
    query: <T>({ queryKey, onProgress, showLoader, showErrorToast, callBack, }: UseApiProps<T>) => import('@tanstack/react-query').UseQueryResult<T, Error>;
    mutate: <T>({ queryKey, showLoader, showErrorToast, callBack, onSuccess, }: UseApiProps<T>) => import('@tanstack/react-query').UseMutationResult<T, Error, any, unknown>;
};
export default useApi;
