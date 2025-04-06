/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiSettings } from "react-icons/ci";
import { VscBug } from "react-icons/vsc";
import { RiFilePaper2Line } from "react-icons/ri";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { BsGift } from "react-icons/bs";

export default function PopoverContent({ user, initial }: any) {
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
    <div className="w-[350px]">
      <div className="p-4">
        <div className="flex gap-4 items-center">
          <div className="w-[32px] h-[32px] bg-gradient-to-l from-[#131316] to-[#5C6670] rounded-full flex items-center justify-center">
            <p className="text-[12px] text-white font-semibold text-center">
              {initial}
            </p>
          </div>
          <div>
            <p className="text-[18px]">{`${user.first_name} ${user.last_name}`}</p>
            <p className="mt-1">{user.email}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {contentList.map((item, index) => (
          <div
            className="flex items-center gap-4 p-4 hover:bg-[#EFF1F6] cursor-pointer"
            key={index}
          >
            <div className="text-[22px]">{item.icon}</div>
            <p className="text-[16px]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
