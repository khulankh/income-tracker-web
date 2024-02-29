import React from 'react';
import HouseIcon from "../icons/HouseIcon";

type RecordData = {
    title: string;
    time: string;
    amount: number;
};

type Props = {
    data: RecordData;
};

export default function Lending({ data }: Props) {
    const { title, time, amount } = data;

    return (
        <div className='lending-container'>
            <div style={{display:'flex', gap:"16px"}}>
                <HouseIcon />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ margin: 0, color: 'black', fontSize: '16px' }}>{title}</p>
                    <p style={{ margin: 0, color: '#6B7280', fontSize: '12px' }}>{time}</p>
                </div>
            </div>
            <p style={{ color: '#84CC16' }}>{amount}₮</p>
        </div>
    );
}
