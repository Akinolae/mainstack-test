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
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Popover } from "antd";
import PopoverContent from "./PopoverContent";

export default function Topbar() {
  const [active, setActive] = useState(false);
  const iconStyle = {
    fontSize: "20px",
  };

  const toggle = () => setActive(!active);

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

  const contentList = [
    {
      title: "Link In Bio",
    },
    {
      title: "Store",
    },
    {
      title: "Media Kit",
    },
    {
      title: "Invoicing",
    },
    {
      title: "Bookings",
    },
  ];

  return (
    <div className="flex shadow bg-white h-[64px] justify-between items-center rounded-[100px] w-full pl-6 pr-3 max-w-screen-2xl m-auto fixed left-0 right-0 ">
      <div>
        <img src={logo} alt="mainstack logo" />
      </div>
      <div className="flex gap-6 items-center h-full ">
        {routes.map((route, index) => {
          return (
            <>
              {route.name === "Apps" ? (
                <Popover
                  open={active}
                  content={<PopoverContent list={contentList} />}
                >
                  <div
                    onClick={toggle}
                    className={`flex transition-all duration-[0.3s]  text-[16px] gap-2 font-medium items-center pl-4 pr-4 pt-2 pb-2 rounded-[100px] ${
                      active ? "bg-[#131316] text-white" : "hover:bg-[#EFF1F6]"
                    }`}
                  >
                    <div
                      className={`flex w-full gap-5 ${
                        active ? "w-auto" : "w-full"
                      }`}
                    >
                      <div className="flex gap-2">
                        <div style={iconStyle}>{route.icon}</div>
                        <p>{route.name}</p>
                      </div>
                      {active ? (
                        <div className="flex gap-5 items-center">
                          <div className="h-full w-[1px] bg-white"></div>
                          <div className="flex gap-2 items-center">
                            <p>Link in bio</p>
                            <div>
                              <FiChevronDown />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Popover>
              ) : (
                <NavLink
                  key={index}
                  to={route.path}
                  onClick={() => setActive(false)}
                  className={({ isActive }) =>
                    `flex transition-all duration-[0.3s]  text-[16px] gap-2 font-medium items-center pl-4 pr-4 pt-2 pb-2 rounded-[100px] ${
                      isActive && !active
                        ? "bg-[#131316] text-white"
                        : "text-[#56616B] hover:bg-[#EFF1F6]"
                    }`
                  }
                >
                  <div style={iconStyle}>{route.icon}</div>
                  <p>{route.name}</p>
                </NavLink>
              )}
            </>
          );
        })}
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
