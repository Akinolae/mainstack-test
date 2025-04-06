import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full h-full">
        <div>
          <Topbar />
        </div>
        <div className="flex flex-col w-full h-full mt-32 mb-20 max-w-screen-xl m-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
