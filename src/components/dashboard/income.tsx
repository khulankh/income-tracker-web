import IncomeDugui from "../icons/income-dugui"
export default function Income() {
    return (
        <div className="income-container">
            <div style={{display:'flex'}}>
                <IncomeDugui/>
                <p>Your Income</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4' }}>
                <h6 style={{ fontSize: '36px' }}>1,200,000₮</h6>
                <p style={{ fontSize: '18px', color:'#64748B' }}>Your Income Amount</p>
            </div>
            <div>
                <p>32% from last month</p>
            </div>
        </div>
    )
}