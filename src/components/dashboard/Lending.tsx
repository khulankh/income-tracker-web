import React from 'react';
import HouseIcon from "../icons/HouseIcon";

type RecordData = {
    title: string;
    createdAt: string;
    amount: number;
};

type Props = {
    data: RecordData;
};

export default function Lending({ data }: Props) {
    const { title, createdAt, amount } = data;
    const currentDate = new Date();
    console.log(currentDate)
    const date1 = new Date(currentDate) 
    const date2 = new Date(createdAt);

    const differenceInMilliseconds = Number(date2) - Number(date1);

    const millisecondsInOneSecond = 1000;
    const millisecondsInOneMinute = millisecondsInOneSecond * 60;
    const millisecondsInOneHour = millisecondsInOneMinute * 60;
    const millisecondsInOneDay = millisecondsInOneHour * 24;

    const hours = Math.floor((differenceInMilliseconds % millisecondsInOneDay) / millisecondsInOneHour);


    return (
        <div className='lending-container'>
            <div style={{ display: 'flex', gap: "16px" }}>
                <HouseIcon />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ margin: 0, color: 'black', fontSize: '16px' }}>{title}</p>
                    <p style={{ margin: 0, color: '#6B7280', fontSize: '12px' }}>{Math.abs(hours)} hours ago</p>
                </div>
            </div>
            <p style={{ color: '#84CC16' }}>- {amount}₮</p>
        </div>
    );
}
