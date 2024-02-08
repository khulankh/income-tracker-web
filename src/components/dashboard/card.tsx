import CardChip from "../icons/card-chip";
import GeldWhite from "../icons/icon-white";

export default function Card() {

    return (
        <div className="card-container">
            <div style={{ paddingLeft: '32px', paddingTop: '32px' }}> <GeldWhite /> </div>
            <div style={{ display: 'flex', flexDirection:'column' }}>
                <p style={{ color: 'white', opacity: '50%', fontSize: '16px' }}>Cash</p>
                <p style={{ fontSize: '24px' }}>10,000.00</p>
            </div>
            <CardChip />
        </div>
    )
}