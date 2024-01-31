import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';

import styles from './authorization.module.css';

type Inputs = {
    email: string;
    password: string;
};

export function SignIn() {
    const { signIn } = useAuth();
    const { register, handleSubmit } = useForm<Inputs>();

    return (
        <form className={styles.form} onSubmit={handleSubmit(signIn)}>
            <label>Email</label>
            <input type="email" {...register('email', { required: true })} />
            <label>Password</label>
            <input type="password" {...register('password', { required: true })} />
            <button type="submit">Submit</button>
        </form>
    );
}
