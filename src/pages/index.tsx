import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
