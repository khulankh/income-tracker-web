import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import IncomeExpense from "@/components/dashboard/Expense";
import { Card } from "@/components/dashboard/Card";
import CircleChart from "@/components/dashboard/CircleChart";
import LastRecords from "@/components/dashboard/LastRecords";
import BarChart from "@/components/dashboard/BarChart";
import NavbarComponent from "@/components/dashboard/NavbarComponent";

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

  return (
    <div className="main-container">
      <NavbarComponent />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', justifyContent: 'center', paddingTop: '32px', paddingLeft: '120px', paddingRight: '120px' }}>
          <Card />
          <IncomeExpense type="Income" value={120000} />
          <IncomeExpense type="Expense" value={120000} />
        </div>
        <div style={{ display: 'flex', gap: '150px', alignItems: 'center', justifyContent: 'center', paddingTop: '32px', paddingLeft: '120px', paddingRight: '120px' }}>
          <BarChart />
          <CircleChart />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '32px', paddingLeft: '120px', paddingRight: '120px' }}>
          <LastRecords />
        </div>
      </div>
    </div>
  );
}
