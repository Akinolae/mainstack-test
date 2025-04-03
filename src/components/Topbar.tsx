import { NavLink } from "react-router-dom";
import logo from "../assets/images/mainstack-logo.svg";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { BsChatRightText } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import Profile from "./Profile";

export default function Topbar() {
  const iconStyle = {
    fontSize: "20px",
  };

  const routes = [
    { name: "Home", path: "/", icon: <GoHome /> },
    {
      name: "Analytics",
      path: "analytics",
      icon: <MdOutlineAnalytics />,
    },
    {
      name: "Revenue",
      path: "revenue",
      icon: <FaMoneyBills />,
    },
    {
      name: "CRM",
      path: "crm",
      icon: <MdOutlinePeopleAlt />,
    },
    {
      name: "Apps",
      path: "apps",
      icon: <AiOutlineAppstoreAdd />,
    },
  ];

  return (
    <div className="flex mt-2 shadow h-[64px] justify-between items-center rounded-[100px] w-full pl-6 pr-3 max-w-screen-2xl m-auto">
      <div>
        <img src={logo} alt="mainstack logo" />
      </div>
      <div className="flex gap-6 items-center h-full ">
        {routes.map((route, index) => (
          <NavLink
          key={index}
            to={route.path}
            className={({ isActive }) =>
              `flex text-[16px] gap-2 font-medium items-center pl-4 pr-4 pt-2 pb-2 rounded-[100px] ${
                isActive ? "bg-[#131316] text-white" : "text-[#56616B]"
              }`
            }
          >
            <div style={iconStyle}>{route.icon}</div>
            <p>{route.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="h-full">
        <div className="flex h-full gap-8 items-center">
          <FaRegBell style={iconStyle} />
          <BsChatRightText style={iconStyle} />
          <Profile />
        </div>
      </div>
    </div>
  );
}
