import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  profileControllerGetLessons,
  lessonsControllerCreate,
} from "../../shared/api/generated";

const queryKey = ["lessons"];

export function useLessonQuery() {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => profileControllerGetLessons(),
  });
}

export function useCreateLessonQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: lessonsControllerCreate,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });
}
