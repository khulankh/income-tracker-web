
import React from 'react';

import DeleteModal from '../records/DeleteRecordModal';

export type RecordData = {
    _id: string;
    title: string;
    createdAt: string;
    amount: number;
    category: string;
    transactionType: string;
};

type Props = {
    data: RecordData;
    setData: React.Dispatch<React.SetStateAction<RecordData[]>>;
};

export default function Lending({ data, setData }: Props) {

    const IncomeExpense = (transactionType: string) => {
        if (transactionType === "income") {
            return "green";
        } else {
            return "red";
        }
    };

    const { title, createdAt, amount, category, transactionType } = data;
    const currentDate = new Date();
    const date1 = new Date(currentDate);
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ margin: 0, fontSize: '16px', color: '#84CC15' }}>{title}</p>
                    <p style={{ margin: 0, color: '#B6BBC4', fontSize: '12px' }}>{category}</p>
                    <p style={{ margin: 0, color: '#6B7280', fontSize: '12px' }}>{Math.abs(hours)} hours ago</p>
                </div>
            </div>
            <div style={{display:'flex', gap: "20px"}}>
                <p style={{ color: IncomeExpense(transactionType) , margin : 0 }}>{amount}₮</p>
                <DeleteModal data={data} setData={setData} />
            </div>
        </div>
    );
}
