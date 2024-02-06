import BalanceIcon from "../icons/balance";
export default function Balance({ onNext }:  { onNext: () => void }) {

    return (
        <div className="balance-container">
            <BalanceIcon />
            <h1 style={{ fontSize: '24px', color: '#0F172A' ,textAlign:'center' }}>Set up your cash Balance</h1>
            <input placeholder="Email"  id="sign-input" />
            <p style={{ color: '#475569',fontSize: '12px',textAlign:'center' }}> How much cash do you have in your wallet? </p>
            <button className="confirm-btn" onClick={onNext}>Confirm</button>
        </div>
    )
}