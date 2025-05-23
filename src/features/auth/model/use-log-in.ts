import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { AuthLoginRequest } from "../types/login-form.dto";
import { useLoginMutation } from "@/entities/auth";

export function useLogIn() {
  const { handleSubmit, register, watch, reset, formState, setValue } =
    useForm<AuthLoginRequest>({
      defaultValues: {},
    });

  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  return {
    handleSubmit: handleSubmit((data) => {
      console.log(data);

      loginMutation.mutate(data, {
        onSuccess(response) {
          reset();
          if (response.accessToken) {
            localStorage.setItem("auth-data", JSON.stringify(response));
            navigate({ to: "/" });
          }
        },
        onError(error) {
          console.log(error);
        },
      });
    }),
    isLoading: loginMutation.isPending,
    register,
    formState,
    watch,
    setValue,
    error: loginMutation.error?.response?.data,
  };
}
