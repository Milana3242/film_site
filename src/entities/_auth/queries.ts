import { authControllerLogin } from "../../shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authControllerRegister } from "../../shared/api/generated";

const AuthKey = ["auth-key"];

export function useAuthRegisterQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authControllerRegister,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: AuthKey });
    },
  });
}

export function useAuthLoginQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authControllerLogin,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: AuthKey });
    },
  });
}
