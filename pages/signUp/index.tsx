import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FormInput from '../../core/formInput/form-input';
import { useState } from 'react';
import Button from '../../core/button/button';
const SignUp = () => {
    const [FormData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
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
                    <p className='text-xl font-[700]'>Sign Up</p>

                    <div className='flex flex-col gap-2 w-full'>
                        <FormInput
                            placeholder={"Enter the First Name"}
                            value={FormData.firstName}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                firstName: e.target.value
                            }))}
                            type={"text"}
                            label={"First Name"}
                            style={{
                                input:"placeholder:text-white",
                                root:"!rounded"
                            }}

                        />
                        <FormInput

                            placeholder={"Enter the Last Name"}
                            value={FormData.lastName}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                lastName: e.target.value
                            }))}
                            label={"Last Name"}
                            type={"text"}
                            style={{
                                input:"placeholder:text-white",
                                root:"!rounded"
                            }}
                        />
                        <FormInput

                            placeholder={"Enter the Email Id"}
                            value={FormData.email}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))}
                            label={"Email"}
                            type={"text"}
                            style={{
                                input:"placeholder:text-white",
                                root:"!rounded"
                            }}
                        />
                        <FormInput

                            placeholder={"Enter the Password"}
                            value={FormData.password}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                password: e.target.value
                            }))}
                            label={"Password"}
                            type={"text"}
                            style={{
                                input:"placeholder:text-white",
                                root:"!rounded"
                            }}
                        />
                    </div>

                    <Button
                        text={"Submit"}
                        onClick={() => {
                            console.log(FormData)
                        }}
                    />

                </div>
            </div>
        </div>
    )
}

export default SignUp;