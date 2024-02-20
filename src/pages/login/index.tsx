import { Icon } from "@/components/icons/icon";
import { ChangeEvent, useState } from "react"
import axios from "axios"
import { Vortex } from "react-loader-spinner";
import { useRouter } from 'next/navigation'
export default function LogIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [required, setRequired] = useState('')
    const [loading, setLoading] = useState(false)


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
    const handleLogIn = async () => {
        if (
            email === ' ' ||
            password === ''
        ) {
            setRequired('Please enter all inputs')
        } else {
            await axios.post("https://income-tracker-service.onrender.com/login", {
                email: email,
                password: password,
            })
                .then((response) => {
                    console.log(response)
                    localStorage.setItem('user', 'true')
                    localStorage.setItem('userId', response.data.userId)
                    router.push("/")
                })
                .catch((error) => {
                    if (axios.isAxiosError(error)) {
                        const axiosError = error;
                        setLoading(false);
                        setRequired(axiosError.response?.data as string)
                    }
                })
        }


    };
    return (
        <div className="signup-container" >
            <div style={{ height: '100vh', width: '50vw', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                    <Icon />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <div style={{ fontSize: '24px', color: '#0F172A' }}>
                            Welcome Back
                        </div>
                        <div style={{ fontSize: '16px', color: '#334155' }}>
                            Welcome back, Please enter your details
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                    <div className="sign-inputs">

                        <input placeholder="Email" value={email} onChange={handleChangeEmail} id="sign-input" />
                        <div style={{ color: "red" }}>{emailError}</div>

                        <input type="password" placeholder="Password" value={password} onChange={handleChangePassword} id="sign-input" />
                        <div style={{ color: "red" }}>{passwordError}</div>

                        {loading ? <Vortex
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="vortex-loading"
                            wrapperStyle={{}}
                            wrapperClass="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        /> : <button onClick={handleLogIn} className="sign-btn">Log In</button>}
                        <div style={{ color: "red" }}>{required}</div>
                    </div>
                    <p> Dont have account? <a href="../signup" style={{ color: '#0166FF' }}>Sign Up</a></p>
                </div>

            </div>
            <div style={{ backgroundColor: '#0166FF', height: '100vh', width: '50vw' }}></div>
        </div>
    )
}