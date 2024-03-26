import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import IncomeExpense from "@/components/dashboard/IncomeExpense";
import CircleChart from "@/components/dashboard/CircleChart";
import LastRecords from "@/components/dashboard/LastRecords";
import BarChart from "@/components/dashboard/BarChart";
import NavbarComponent from "@/components/dashboard/NavbarComponent";
import { Card } from "@/components/icons/Card";
import axios from "axios";

type RecordData = {
  title: string;
  createdAt: string;
  amount: number;
  category: string;
  transactionType: string;
}

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const isUserLoggedIn = () => {
      const user = localStorage.getItem("user");
      if (!user) {
        router.replace('/login')
      }
    };
    isUserLoggedIn();
  }, [router]);

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
    <div className="main-container">
      <NavbarComponent />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', justifyContent: 'center', paddingTop: '32px', paddingLeft: '120px', paddingRight: '120px' }}>
          <Card />
          <IncomeExpense type="Income" data={data} />
          <IncomeExpense type="Expense" data={data} />
        </div>
        <div style={{ display: 'flex', gap: '150px', alignItems: 'center', justifyContent: 'center', paddingTop: '32px', paddingLeft: '120px', paddingRight: '120px' }}>
          <BarChart />
          <CircleChart />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '32px', paddingLeft: '120px', paddingRight: '120px' }}>
          <LastRecords data={data}/>
        </div>
      </div>
    </div>
  );
}
