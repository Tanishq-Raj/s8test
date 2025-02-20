import DashCharts from "../../dashComponent/DashCharts/dashCharts";
import Header from "../../dashComponent/nav/header/Header";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import "./dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="sideContainerdash">
      <Sidebar />
    </div>
    <div className="dashContainer">
     <Header />
     <div className="mainDashboard">
     {/* Top header */}
     <DashCharts/>
      </div>
     </div>
    </div>
  )
}

export default Dashboard
