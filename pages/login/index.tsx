import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FormInput from '../../core/formInput/form-input';
import Button from '../../core/button/button';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../src/firebase/login-auth';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import loginSchema from "../../src/validation/login-validation-schema"

type LoginFormData = {
    email: string;
    password: string;
};

const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: joiResolver(loginSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            toast.success('Login successful!');
            router.push('/profile');
        } catch (error: any) {
            toast.error(error.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success('Logged out successfully');
            router.push('/login');
        } catch (error: any) {
            toast.error(error.message || 'Logout failed');
        }
    };

    return (
        <div
            className="min-h-[100vh] p-4 flex items-center justify-center text-white"
            style={{
                background:
                    'linear-gradient(90deg,rgba(54, 77, 92, 1) 0%, rgba(32, 212, 212, 1) 100%)',
            }}
        >
            <Toaster position="top-right" reverseOrder={false} />
            <div className="w-[500px] flex flex-col items-center gap-5 p-8 rounded-md shadow backdrop-blur-md bg-white/10">
                <p className="text-xl font-[700]">Login</p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 w-full"
                    noValidate
                >
                    <FormInput
                        Icon={<PersonIcon />}
                        placeholder="Email"
                        type="text"
                        error={errors.email?.message}
                        {...register('email')}
                        style={{ input: 'placeholder:text-white' }}
                    />

                    <FormInput
                        Icon={<LockIcon />}
                        placeholder="Password"
                        type="password"
                        error={errors.password?.message}
                        {...register('password')}
                        style={{ input: 'placeholder:text-white' }}
                    />

                    <Button
                        type="submit"
                        text={loading || isSubmitting ? 'Logging in...' : 'Submit'}
                        isLoading={loading || isSubmitting}
                    />
                </form>
                <p className='underline cursor-pointer' onClick={() => router.push("/signUp")}>SignUp</p>
            </div>
        </div>
    );
};

export default Login;
