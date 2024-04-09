import Lending, { RecordData } from "@/components/dashboard/Lending";
import NavbarComponent from "@/components/dashboard/NavbarComponent";
import Sidebar from "@/components/records/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Records() {
    const [data, setData] = useState<RecordData[]>([]);
    const [transactionType, setTransactionType] = useState('all');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<RecordData[]>('https://income-tracker-service.onrender.com/getTransactions');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filteredByType = transactionType === 'all' ? data : data.filter(transaction => transaction.transactionType === transactionType);
    const filteredByCategory = category === '' ? filteredByType : filteredByType.filter(transaction => transaction.category === category);

    return (
        <div className="records-container">
            <NavbarComponent />
            <div style={{ display: "flex" }}>
                <Sidebar transactionType={transactionType} setTransactionType={setTransactionType} category={category} setCategory={setCategory} />
                <div style={{ display: "flex", flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                    {filteredByCategory.map((record, index) => (
                        <Lending key={index} data={record} setData={setData} />
                    ))}
                </div>
            </div>
        </div>
    )
}
