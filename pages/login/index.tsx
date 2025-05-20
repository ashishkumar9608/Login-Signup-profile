import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FormInput from '../../core/formInput/form-input';
import { useState } from 'react';
import Button from '../../core/button/button';
const Login = () => {
    const [loginForm, setLoginForm] = useState({
        userName: "",
        password: ""

    });
    return (
        <div>
            <div className="min-h-[100vh] p-4 flex items-center justify-center text-white"
                style={{
                    background: "linear-gradient(90deg,rgba(54, 77, 92, 1) 0%, rgba(32, 212, 212, 1) 100%)"
                }}

            >
                <div className='w-[500px] flex flex-col items-center gap-5 p-8 rounded-md shadow backdrop-blur-md bg-white/10'>
                    <p className='text-xl font-[700]'>Login</p>

                    <div className='flex flex-col gap-4 w-full'>
                        <FormInput
                            Icon={<PersonIcon />}
                            placeholder={"Username"}
                            value={loginForm.userName}
                            className={"placeholder:text-white"}
                            onChange={(e) => setLoginForm((prev) => ({
                                ...prev,
                                userName: e.target.value
                            }))}
                            type={"text"}
                        />
                        <FormInput
                            Icon={<LockIcon />}
                            placeholder={"Password"}
                            value={loginForm.password}
                            className={"placeholder:text-white"}
                            onChange={(e) => setLoginForm((prev) => ({
                                ...prev,
                                password: e.target.value
                            }))}
                            type={"password"}
                        />
                    </div>

                    <Button
                        text={"Submit"}
                        onClick={() => {
                            console.log(loginForm)
                        }}
                    />

                </div>
            </div>
        </div>
    )
}

export default Login;