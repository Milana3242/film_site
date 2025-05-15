import { authControllerLogin, lessonsControllerCreate, RegisterDto } from './../../6shared/api/generated';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authControllerRegister, filmsControllerFindAll, filmsControllerFindOne } from "../../6shared/api/generated";

const AuthKey=['auth-key']

export function useFilmsQuery() {
  return useQuery({
    queryKey: ["films"],
    queryFn: () => filmsControllerFindAll(),
  });
}

export function useOneFilmQuery(id:string) {
  return useQuery({
    queryKey: [`onefilm-${id}`],
    queryFn: () => filmsControllerFindOne(id),
  });
}

export function useAuthRegisterQuery() {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: authControllerRegister,
    async onSettled(){
      await queryClient.invalidateQueries({queryKey:AuthKey})
    }
  });
}

export function useAuthLoginQuery() {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: authControllerLogin,
    async onSettled(){
      await queryClient.invalidateQueries({queryKey:AuthKey})
    }
  });
}
export function useLessonQuery() {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: lessonsControllerCreate,
    async onSettled(){
      await queryClient.invalidateQueries({queryKey:['LessonKey']})
    }
  });
}
