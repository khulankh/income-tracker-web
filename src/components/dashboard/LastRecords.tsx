import React, { useState, useEffect } from 'react';
import Lending, { RecordData } from "./Lending";
import axios from 'axios';


export default function LastRecords() {
    const [lendingData, setLendingData] = useState<RecordData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<RecordData[]>('https://income-tracker-service.onrender.com/getTransactions');
                const id = localStorage.getItem("userId")
                const userData = response.data.filter((transaction) => {
                    console.log(transaction.userId)
                    console.log(id)
                    return transaction.userId === id
                })
                console.log(userData)
                setLendingData(userData);
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
            {lendingData.map((record, index) => (
                <Lending key={index} data={record} setData={setLendingData} />
            ))}
        </div>
    );
}
