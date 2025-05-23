import {
  authControllerLogin,
  authControllerRegister,
} from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AuthKey = ["auth-key"] as unknown[];

export function useLoginMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authControllerLogin,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: AuthKey });
    },
  });
}

export function useRegisterMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authControllerRegister,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: AuthKey });
    },
  });
}

 export function useLoginOutMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authControllerRegister,
    async onSettled() {
      // await queryClient.invalidateQueries({ queryKey: AuthKey });
      await queryClient.removeQueries();
    },
  });
} 
