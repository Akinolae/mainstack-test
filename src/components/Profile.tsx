import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getUserInitials } from "../utils/utils";
import { Popover } from "antd";
import PopoverContent from "./PopoverContent";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const context = useContext(AppContext);
  const userInitial = getUserInitials(context?.user);

  const toggle = () => setOpen(!open);
  return (
    <Popover
      open={open}
      content={<PopoverContent user={context?.user} initial={userInitial} />}
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
