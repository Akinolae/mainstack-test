import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getUserInitials } from "../utils/utils";

export default function Profile() {
  const context = useContext(AppContext);
  const userInitial = getUserInitials(context?.user);
  return (
    <div className="w-[81px] h-[40px] bg-[#EFF1F6] flex items-center gap-2 rounded-[100px] p-1 cursor-pointer">
      <div className="w-[32px] h-[32px] bg-gradient-to-l from-[#131316] to-[#5C6670] rounded-full flex items-center justify-center">
        <p className="text-[12px] text-white font-semibold text-center">
          {userInitial}
        </p>
      </div>
      <div>
        <RxHamburgerMenu style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
}
