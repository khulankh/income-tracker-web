import React from 'react';
import Lending, { RecordData } from "./Lending";

export default function LastRecords({data}: {data: RecordData[]}) {

    return (
        <div className='lastrec-container'>
            <h3 className='lastrec-p'>Last Records</h3>
            <hr style={{ color: '#f3f4f5', opacity: '0.6' }}></hr>
            {data.map((record, index) => (
                <Lending key={index} data={record} />
            ))}
        </div>
    );
}
