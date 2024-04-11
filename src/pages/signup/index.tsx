import axios, { AxiosError } from "axios";
import { useRouter } from 'next/navigation';
import { MutatingDots } from 'react-loader-spinner'
import { ChangeEvent, useState } from "react";
import { Icon } from "../../components/icons/Icon";

export default function SignUp() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [required, setRequired] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value

        if (name.length <= 3) {
            setNameError("Name must be more than 4 characters");
        } else {
            setNameError('')
        }
        setName(name)
    };

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value
        if (email.includes('@')) {
            setEmailError("");
        } else {
            setEmailError('Please enter valid email address')
        }
        setEmail(email)
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value
        if (password.length <= 7) {
            setPasswordError("Password must be more than 8 characters");
        } else {
            setPasswordError('')
        }
        setPassword(password)

    }

    const handleChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = event.target.value
        if (confirmPassword === '') {
            setConfirmPasswordError('Please confirm password')
        } else if (confirmPassword === password) {
            setConfirmPasswordError('')
        }
        setConfirmPassword(confirmPassword)
    }
    const handleSignUp = async (): Promise<void> => {
        if (
            name === '' ||
            email === ' ' ||
            password === '' ||
            confirmPassword === ''
        ) {
            setRequired('Please enter all inputs');
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Confirm Password must match with Password');
            setRequired('');
        } else {
            try {
                setLoading(true)
                const response = await axios.post("https://income-tracker-service.onrender.com/signup", {
                    name: name,
                    password: password,
                    email: email
                });
                setLoading(false)
                console.log(response);
                router.push("/");
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    setLoading(false);
                    setRequired(axiosError.response?.data as string)
                }
            }
        }
    };

    return (
        <div className="signup-container" >
            <div style={{ height: '100vh', width: '50vw', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                <Icon />
                <div style={{ fontSize: '24px', color: '#0F172A' }}>
                    Create Geld account
                </div>
                <div style={{ fontSize: '16px', color: '#334155' }}>
                    Sign up below to create your Wallet account
                </div>
                <div className="sign-inputs">

                    <input placeholder="Name" value={name} onChange={handleChangeName} id="sign-input" />
                    <div style={{ color: "red" }}>{nameError}</div>

                    <input placeholder="Email" value={email} onChange={handleChangeEmail} id="sign-input" />
                    <div style={{ color: "red" }}>{emailError}</div>

                    <input placeholder="Password" type="password" value={password} onChange={handleChangePassword} id="sign-input" />
                    <div style={{ color: "red" }}>{passwordError}</div>

                    <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} id="sign-input" />
                    <div style={{ color: "red" }}>{confirmPasswordError}</div>

                </div>
                <div style={{ display: "flex", flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                    {loading ? <MutatingDots
                        visible={true}
                        height="100"
                        width="100"
                        color="#6f2dbd"
                        secondaryColor="#6f2dbd"
                        radius="12.5"
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : <button onClick={handleSignUp} className="sign-btn">Sign Up</button>}

                    <div style={{ color: "red" }}>{required}</div>
                    <p>Already have account? <a href="../login" style={{ color: '#6f2dbd' }}>Log In</a></p>
                </div>

            </div>
            <div style={{ backgroundColor: '#6f2dbd', height: '100vh', width: '50vw' }}></div>
        </div>
    )
}