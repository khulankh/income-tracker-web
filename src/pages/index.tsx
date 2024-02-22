import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import MainIcon from "@/components/icons/NavbarGeld";

import { Avatar } from "@mui/material";
import IncomeExpense from "@/components/dashboard/expense";
import Card from "@/components/dashboard/card";


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
      <div className="navbar-container">
        <div className="navbar-front">
          <MainIcon />
          {/* <Image style={{borderRadius:'100%'}} src={'/user.png'} width={40} height={40} alt=""/> */}
          <button className="selected-nav-btn">Dashboard</button>
          <button className="navbar-btn">Records</button>
          {/* <Link href='/recored'> Records</Link> */}
        </div>
        <div>
          <button className="add-record">+ Record</button>
          <Avatar src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSEkV4v7iQZ1bT6xha8ER-2Kan0HkSA2wiMMmx5M9PzpvYZtE2Ix5gfyobkyW9KwlkCxKpq6EBtATLjHbPrStvnLiLalJytF3vtz7RMIGv86zg5icLyDrIUfpMAGwRkrVThi2IZk8TgC55-83bNW68hQPyhFBnfkwBusr-9NqhBMKVkmHFSIgMYrSlol6foBWhhtvbXQSfAw-QonV3r7BnxHYspicVvoHOVc~H0Tk1CflxFu~Uz4UgoV6xZnJQdK7AJHCdoaP4KLb4EJyIvEMJ1NxREmas8faYLXmStSektIE4MHC3ksjOVu6dtHqKcbUU2pw5Kb-LxaRCy9r~gVsA__"></Avatar>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', paddingTop:'32px', paddingLeft:'120px', paddingRight:'120px'}}>
        <Card />
        <IncomeExpense type="Income" value={120000}/>
        <IncomeExpense type="Expense" value={120000}/>
      </div>
    </div>
  );
}
