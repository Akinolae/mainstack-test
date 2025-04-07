/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer } from "antd";
import { IoMdClose } from "react-icons/io";

export default function CustomDrawer(props: any) {
  return (
    <Drawer
      open={props?.isOpen}
      push={false}
      size="large"
      onClose={props?.toggle}
      {...props}
    >
      <div className="flex w-full items-center justify-between mt-3 mb-6">
        <p className="text-[24px] text-[#131316]">{props?.title}</p>
        <div
          onClick={props?.toggle}
          className="h-[34px] flex items-center justify-center cursor-pointer transition-all w-[34px] rounded-[50%] hover:bg-[#eff1f6]"
        >
          <IoMdClose fontSize={"20px"} />
        </div>
      </div>
      {props?.children}
    </Drawer>
  );
}
