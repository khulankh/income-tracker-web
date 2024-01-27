import { Icon } from "@/components/icons/icon";

export default function SignUp() {
    return (
        <div className="signup-container" >
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Icon />
                <div style={{ fontSize: '24px' }}>
                    Create Geld account
                </div>
                <div style={{ fontSize: '16px' }}>
                    Sign up below to create your Wallet account
                </div>
                <div className="sign-inputs">
                    <input id="sign-input"/>
                    <input id="sign-input"/>
                    <input id="sign-input"/>
                    <input id="sign-input"/>
                </div>
            </div>
            <div style={{ backgroundColor: '#0166FF', height: '100vh', width: '50vw' }}></div>
        </div>
    )
}