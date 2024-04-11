import MainIcon from "../icons/NavbarGeld";
import { Avatar } from "@mui/material";
import { useRouter } from 'next/router'; 
import CreateRecordModal from "../records/CreateRecordModal";

export default function NavbarComponent() {
  const router = useRouter(); 

  const handleRecordsButtonClick = () => {
    router.push('/records'); 
  };
  const handleDashboardButtonClick = () => {
    router.push('/')
  }

const toggleLogin = ()=>  router.push('/login');

  return (
    <div className="navbar-container">
      <div className="navbar-front">
        <MainIcon />
        <button className="navbar-btn" onClick={handleDashboardButtonClick}>Dashboard</button>
        <button className="navbar-btn" onClick={handleRecordsButtonClick}>Records</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingRight: '120px', gap: '24px' }}>
        <CreateRecordModal/>
       <div onClick={toggleLogin}>
       <Avatar  src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSEkV4v7iQZ1bT6xha8ER-2Kan0HkSA2wiMMmx5M9PzpvYZtE2Ix5gfyobkyW9KwlkCxKpq6EBtATLjHbPrStvnLiLalJytF3vtz7RMIGv86zg5icLyDrIUfpMAGwRkrVThi2IZk8TgC55-83bNW68hQPyhFBnfkwBusr-9NqhBMKVkmHFSIgMYrSlol6foBWhhtvbXQSfAw-QonV3r7BnxHYspicVvoHOVc~H0Tk1CflxFu~Uz4UgoV6xZnJQdK7AJHCdoaP4KLb4EJyIvEMJ1NxREmas8faYLXmStSektIE4MHC3ksjOVu6dtHqKcbUU2pw5Kb-LxaRCy9r~gVsA__"></Avatar>
       </div>
      </div>
    </div>
  );
}
