import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';

import styles from './authorization.module.css';

type Inputs = {
    email: string;
    password: string;
};

export function SignUp() {
    const { signUp } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors },
    } = useForm<Inputs>({ mode: 'all' });

    const onSubmit: SubmitHandler<Inputs> = (data) => signUp(data);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
                type="text"
                {...register('email', {
                    required: true,
                    pattern: { value: /[\w.-]+@[\w.-]+\.[\w.-]{2,}/gi, message: 'Incorrect email' },
                })}
            />
            <span>{errors?.email?.message || ''}</span>
            <label>Password</label>
            <input type="password" {...register('password', { required: 'Password is required' })} />
            <span>{errors?.password?.message || ''}</span>
            <button type="submit" disabled={!isDirty || !isValid}>
                Submit
            </button>
        </form>
    );
}
