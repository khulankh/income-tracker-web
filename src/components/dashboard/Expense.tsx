import DownPer from "../icons/DownPercent"
import UpPer from "../icons/UpPercent"
import ExpenseDugui from "../icons/ExpenseDugui"
import IncomeDugui from "../icons/incomeDugui"

type Props = {
    type: 'Income' | 'Expense';
    value: number
}

export default function IncomeExpense({ type, value }: Props) {
    const icon = type === 'Expense' ? <DownPer /> : <UpPer />
    const dugui = type === 'Expense' ? <ExpenseDugui /> : <IncomeDugui />

    return (
        <div className="income-container">
            <div style={{ display: 'flex', border: '1px solid #E2E8F0', alignItems: 'center', paddingLeft: "20px" , borderRadius:'5px'  }}>
                {dugui}
                <p style={{ fontSize: '16px', marginLeft: '10px' }}> Total {type}s</p>
            </div>
            <div style={{ paddingLeft: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4' }}>
                    <p style={{ fontSize: '36px', fontWeight: 700, margin: 0 }}>{type === 'Expense' && '-'} {value}₮</p>
                    <p style={{ fontSize: '18px', color: '#64748B' }}>Your {type} Amount</p>
                </div>
                <div style={{ display: "flex", alignItems: 'center', gap: '8px' }}>
                    {icon}
                    <p style={{ fontSize: '18px' }}>32% from last month</p>
                </div>
            </div>
        </div>
    )
}