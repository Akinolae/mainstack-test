import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getUserInitials } from "../utils/utils";
import { Popover } from "antd";
import PopoverContent from "./PopoverContent";
import { CiSettings } from "react-icons/ci";
import { VscBug } from "react-icons/vsc";
import { RiFilePaper2Line } from "react-icons/ri";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { BsGift } from "react-icons/bs";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const context = useContext(AppContext);
  const userInitial = getUserInitials(context?.user);

  const toggle = () => setOpen(!open);

  const contentList = [
    {
      title: "Settings",
      icon: <CiSettings />,
    },
    {
      title: "Purchase history",
      icon: <RiFilePaper2Line />,
    },
    {
      title: "Refer and Earn",
      icon: <BsGift />,
    },
    {
      title: "Integrattions",
      icon: <AiOutlineAppstoreAdd />,
    },
    {
      title: "Report Bug",
      icon: <VscBug />,
    },
    {
      title: "Switch Account",
      icon: <MdOutlineSwitchAccount />,
    },
    {
      title: "Sign Out",
      icon: <LuLogOut />,
    },
  ];
  return (
    <Popover
      open={open}
      content={
        <PopoverContent
          list={contentList}
          user={context?.user}
          initial={userInitial}
        />
      }
    >
      <div
        className="w-[81px] h-[40px] bg-[#EFF1F6] flex items-center gap-2 rounded-[100px] p-1 cursor-pointer"
        onClick={toggle}
      >
        <div className="w-[32px] h-[32px] bg-gradient-to-l from-[#131316] to-[#5C6670] rounded-full flex items-center justify-center">
          <p className="text-[12px] text-white font-semibold text-center">
            {userInitial}
          </p>
        </div>
        <div>
          <RxHamburgerMenu style={{ fontSize: "20px" }} />
        </div>
      </div>
    </Popover>
  );
}
