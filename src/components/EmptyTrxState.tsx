import Button from "./Button";
import { RiFilePaper2Line } from "react-icons/ri";

export default function EmptyTrxState() {
  return (
    <div className="w-full flex justify-center items-center pt-28 pb-28">
      <div className="w-full max-w-[35%] m-auto justify-center items-center flex flex-col gap-3">
        <div className="w-full mb-8">
          <div className="w-[48px] h-[48px] bg-[#DBDEE5] flex justify-center items-center rounded-[16px]">
            <RiFilePaper2Line />
          </div>
        </div>
        <p className="text-[28px] font-bold">
          No matching transaction found for the selected filter
        </p>
        <p
          className="text-[#56616B] text-[16px] pr-3"
          style={{ lineHeight: "24px" }}
        >
          Change your filters to see more results, or add a new product.
        </p>
        <div className="w-full mt-6">
          <Button
            text="Clear Filter"
            className="bg-[#EFF1F6] font-semibold h-[48px] w-[117px]"
          />
        </div>
      </div>
    </div>
  );
}
