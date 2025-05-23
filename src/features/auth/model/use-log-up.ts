import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { RegisterFormDto } from "../types/register-form.dto";
import { useRegisterMutation } from "@/entities/auth";

export function useLogUp() {
  const { handleSubmit, register, watch, reset, formState, setValue } =
    useForm<RegisterFormDto>({
      defaultValues: {},
    });

  const registerMutation = useRegisterMutation();
  const navigate = useNavigate();

  return {
    handleSubmit: handleSubmit((data) => {
      console.log(data);

      registerMutation.mutate(data, {
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
    isLoading: registerMutation.isPending,
    register,
    formState,
    watch,
    setValue,
    error: registerMutation.error,
  };
}
