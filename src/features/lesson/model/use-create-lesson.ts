import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { CreateLessonFormDto } from "../types/create-lesson-form.dto";
import { useCreateLessonQuery } from "@/entities/lesson";
export function useCreateLesson(initialValues?: Partial<CreateLessonFormDto>) {
  const { handleSubmit, register, watch, reset, formState, setValue } =
    useForm<CreateLessonFormDto>({
      defaultValues: initialValues,
    });

  const createLessonMutation = useCreateLessonQuery();
  const navigate = useNavigate();

  return {
    handleSubmit: handleSubmit((data) => {
      createLessonMutation.mutate(data, {
        onSuccess(response) {
          reset();
        },
        onError(error) {
          console.log(error);
        },
      });
    }),
    isLoading: createLessonMutation.isPending,
    register,
    formState,
    watch,
    setValue,
    error: createLessonMutation.error,
  };
}
