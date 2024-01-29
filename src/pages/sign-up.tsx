import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '../hooks/useAuth';

type Inputs = {
    email: string;
    password: string;
};

export function SignUp() {
    const { signUp } = useAuth();

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => signUp(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email', { required: true })} />
            <input type="password" {...register('password')} />
            <button type="submit">Submit</button>
        </form>
    );
}
