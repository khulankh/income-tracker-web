import DownPer from "../icons/DownPercent"
import UpPer from "../icons/UpPercent"
import ExpenseDugui from "../icons/ExpenseDugui"
import { IncomeCircle } from "../icons/IncomeCircle"
import { RecordData } from "./Lending"

type Props = {
    type: 'Income' | 'Expense';
    data: RecordData[]
}

const IncomeExpense = ({ type, data }: Props) => {
    const icon = type === 'Expense' ? <DownPer /> : <UpPer />
    const dugui = type === 'Expense' ? <ExpenseDugui /> : <IncomeCircle />

    let incomeAmount = 0
    let expenseAmount = 0
    data.map((transaction) => {
        if (transaction.transactionType === 'income') {
            incomeAmount = incomeAmount + transaction.amount
        } else {
            expenseAmount = expenseAmount + transaction.amount
        }

    })
    const renderTotalAmount = (type: string) => {
        if (type === 'Income') {
            return <p style={{ fontSize: '36px', fontWeight: 700, margin: 0 }}>{incomeAmount}₮</p>
        } else {
            return <p style={{ fontSize: '36px', fontWeight: 700, margin: 0 }}>-{expenseAmount}₮</p>
        }
    }
    return (
        <div className="income-container">
            <div style={{ display: 'flex', border: '1px solid #E2E8F0', alignItems: 'center', paddingLeft: "20px", borderRadius: '5px' }}>
                {dugui}
                <p style={{ fontSize: '16px', marginLeft: '10px' }}> Total {type}s</p>
            </div>
            <div style={{ paddingLeft: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4' }}>
                    {renderTotalAmount(type)}
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

export default IncomeExpense