import {
    newsControllerFindAll,
    newsControllerFindOne,
    newsControllerCreate,
    newsControllerRemove,
    newsControllerUpdate,
    UpdateNewsDto,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const NewsKey = ["news-key"] as unknown[];
const NewsOneKey = ["news-one-key"] as unknown[];

export function useNewsQuery() {
    return useQuery({
        queryKey: NewsKey,
        queryFn: () => newsControllerFindAll(),
    });
}

export function useNewsOneQuery(id: string) {
    return useQuery({
        queryKey: [NewsOneKey, id],
        queryFn: () => newsControllerFindOne(id),
    });
}

export function useAddNewsMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: newsControllerCreate,
        async onSettled() {
            await queryClient.invalidateQueries({ queryKey: NewsKey });
        },
    });
}

export function useRemoveNewsMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: newsControllerRemove,
        async onSettled() {
            await queryClient.invalidateQueries({ queryKey: NewsKey });
        },
    });
}

export function useUpdateNewsMutation(id: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: UpdateNewsDto) => newsControllerUpdate(id, data),
        async onSettled() {
            await queryClient.invalidateQueries({ queryKey: [NewsOneKey, id] });
            await queryClient.invalidateQueries({ queryKey: NewsKey });
        },
    });
}
