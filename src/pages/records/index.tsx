import Lending from "@/components/dashboard/Lending";
import NavbarComponent from "@/components/dashboard/NavbarComponent";
import Sidebar from "@/components/records/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";


type RecordData = {
    title: string;
    createdAt: string;
    amount: number;
    category: string;
    transactionType: string;
};

export default function Records() {

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
        <div className="records-container">
            <NavbarComponent />
            <div style={{display:"flex"}}>
                <Sidebar />
                <div style={{display:"flex", flexDirection:'column', gap:'12px', marginTop: '24px'}}>
                {data.map((record, index) => (
                    <Lending key={index} data={record} />
                ))}
                </div>
                
            </div>
        </div>
    )
}
