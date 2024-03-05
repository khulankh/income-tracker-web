import React, { useState, useEffect } from 'react';
import Lending from "./Lending";
import axios from 'axios';

type RecordData = {
    title: string;
    createdAt: string;
    amount: number;
};

export default function LastRecords() {
    const [data, setData] = useState<RecordData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<RecordData[]>('http://localhost:8080/getTransactions');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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


