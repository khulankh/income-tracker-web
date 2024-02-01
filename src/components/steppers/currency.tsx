import { CurrencyIcon } from "../icons/currencyIcon"
const currencyOptions = [
    "MNT - Mongolian Tugrik",
    "USD - United States Dollar",
    "EUR - Euro",
    "GBP - British Pound Sterling",
    "JPY - Japanese Yen",
    "CHF - Swiss Franc",
    "CAD - Canadian Dollar",
    "AUD - Australian Dollar",
    "CNY - Chinese Yuan",
    "INR - Indian Rupee",
    "BRL - Brazilian Real",
    "ZAR - South African Rand",
    "RUB - Russian Ruble ",
    "MXN - Mexican Peso",
    "SGD - Singapore Dollar",
    "NZD - New Zealand Dollar"
]
export function Currency({ onNext }: { onNext: () => void }) {
    return (
        <div style={{ width: '384px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <CurrencyIcon />
            <h1 style={{ fontSize: '24px', color: '#0F172A' }}>Select base currency</h1>
            <div style={{ gap: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                    <select className="select-option">
                        {currencyOptions.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                    <p style={{ color: '#475569' }}>Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </p>
                </div>
                <button className="confirm-btn" onClick={onNext}>Confirm</button>
            </div>
        </div>
    )
}