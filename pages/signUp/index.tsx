import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../src/firebase/login-auth';
import { signupSchema } from '../../src/validation/signup-validation';
import FormInput from '../../core/formInput/form-input';
import Button from '../../core/button/button';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(signupSchema),
    mode: 'all',
  });

  const onSubmit = async (data: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        createdAt: new Date().toISOString(),
      });
      toast.success('Signup successful! Redirecting...');
      router.push('/login');
    } catch (err: any) {
      toast.error(err.message || 'Signup failed');
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
        <p className="text-xl font-[700]">Sign Up</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
          <FormInput
            placeholder="Enter the First Name"
            type="text"
            label="First Name"
            style={{ root: '!rounded' }}
            error={errors.firstName?.message as string}
            {...register('firstName')}
          />
          <FormInput
            placeholder="Enter the Last Name"
            type="text"
            label="Last Name"
            style={{ root: '!rounded' }}
            error={errors.lastName?.message as string}
            {...register('lastName')}
          />
          <FormInput
            placeholder="Enter the Email Id"
            type="email"
            label="Email"
            style={{ root: '!rounded' }}
            error={errors?.email?.message as string}
            {...register('email')}
          />
          <FormInput
            placeholder="Enter the Password"
            type="password"
            label="Password"
            style={{ root: '!rounded' }}
            error={errors?.password?.message as string}
            {...register('password')}
          />
          <Button
            text={isSubmitting ? 'Submitting...' : 'Submit'}
            isLoading={isSubmitting}
            type="submit"
          />
        </form>
        <p className='underline cursor-pointer text-sm' onClick={() => router.push("/login")}>Already registered user?</p>
      </div>
    </div>
  );
};

export default SignUp;
