import React from 'react';
import Lending from "./Lending";

type RecordData = {
    title: string;
    time: string;
    amount: number;
};

export default function LastRecords() {

    const recordData: RecordData[] = [
        { title: "Lending & Renting1", time: "3 hours ago", amount: - 1000 },
        { title: "Lending & Renting2", time: "5 hours ago", amount: - 1500 },
        { title: "Lending & Renting3", time: "1 day ago", amount: - 2000 },
        { title: "Lending & Renting4", time: "9 day ago", amount: - 10.000 },
        { title: "Lending & Renting5", time: "12 day ago", amount: - 90000 },
        { title: "Lending & Renting6", time: "1 month ago", amount: - 2076500 },
    ];

    return (
        <div className='lastrec-container'>
            <h3 className='lastrec-p'>Last Records</h3>
            <hr style={{color:'#f3f4f5', opacity:'0.6'}}></hr>
            {recordData.map((record, index) => (
                <Lending key={index} data={record} />
            ))}
        </div>
    );
}
