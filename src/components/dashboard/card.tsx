import bg from '../../../public/card.png'

export const Card = () => {
    return (
        <div className='card-container' style={{
            backgroundImage: `url(${bg.src})`, width: '384px',
            height: '216px',
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', position: 'absolute', left: 30, bottom: 20 }}>
                <p style={{ margin: 0, opacity: '50%', fontSize: '16px' }}>Cash</p>
                <p style={{ margin: 0, fontSize: '24px' }}>10,000,000</p>
            </div>
        </div>
    )
}