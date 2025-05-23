import { useNavigate } from '@tanstack/react-router';
import { useLoginOutMutation } from '@/entities/auth';

export function useLogOut() {
    const loginMutation = useLoginOutMutation();
    const navigate = useNavigate();

    const fn = () => {
        let isDelete = confirm('Вы действительно хотите выйти из системы?');
        if (isDelete) {
            loginMutation.mutate(undefined, {
                onSuccess() {
                    localStorage.removeItem('auth-data');
                    console.log('logout');
                    navigate({ to: '/auth' });
                },
                onError(error) {
                    console.log(error);
                },
            });
        }
    };

    return {
        handleClick: fn,
        isLoading: loginMutation.isPending,
        error: loginMutation.error?.response?.data,
    };
}
