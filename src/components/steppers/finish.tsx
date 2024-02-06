import FinishIcon from "../icons/finishIcon"
import { useRouter } from 'next/router';
export default function Finish () {
    const router = useRouter();

    const handleGoToDashboard = () => {
        router.push("/");
    };
    return (
        <div className="finish-container">
            <FinishIcon/>
            <h1 style={{ fontSize: '24px', color: '#0F172A',textAlign:'center' }}>Good Job!</h1>
            <div style={{display:'flex',flexDirection:'column', gap:'32px'}}>
            <p style={{ color: '#475569',fontSize: '12px',textAlign:'center'}}> Your very first account has been created. Now continue to dashboard and start tracking </p>
            <button className="confirm-btn" onClick={handleGoToDashboard}>Go to Dashboard</button>
            </div>
        </div>
    )
}