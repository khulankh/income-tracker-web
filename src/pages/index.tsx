import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import MainIcon from "@/components/icons/navbar-geld";

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
        </div>
        <button className="add-record">+Record</button>
      </div>
      <Card/>
    </div>
  );
}
