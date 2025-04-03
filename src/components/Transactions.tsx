/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { formatDate, isTransactionDebit } from "../utils/utils";
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import Button from "./Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Btn = (props: any) => {
  return (
    <Button className="bg-[#EFF1F6] text-[14px] font-semibold" {...props}>
      <div className="flex items-center">
        <p>{props?.title}</p>
        <MdOutlineKeyboardArrowDown style={{ fontSize: "20px" }} />
      </div>
    </Button>
  );
};

export default function Transactions() {
  const context = useContext(AppContext);

  const transactions = context?.transactions;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[24px] font-extrabold font-degular">{`${
            transactions?.length ?? 0
          } Transactions`}</p>
          <p className="text-[14px] text-[#56616B] font-medium font-degular">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3">
          <Btn title="Filter" />
          <Btn title="Export list" />
        </div>
      </div>

      <div className="h-[1px] bg-[#EFF1F6] mt-8 mb-8"></div>

      <div>
        {transactions?.length ? (
          <div className="flex gap-8 flex-col">
            {transactions?.map((transaction: any, index) => {
              const isDebit = isTransactionDebit(transaction);
              const date = formatDate(transaction.date);

              return (
                <div className="flex items-center justify-between" key={index}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-[50px] w-[50px] text-[20px] flex justify-center items-center rounded-full ${
                        isDebit
                          ? "bg-[#F9E3E0] text-[#961100]"
                          : "bg-[#E3FCF2] text-[#075132]"
                      }`}
                    >
                      {isDebit ? <GoArrowDownRight /> : <GoArrowDownLeft />}
                    </div>
                    <div>
                      <p className="font-medium text-[#131316] font-degular">{`${
                        isDebit
                          ? "Cash Withdrawal"
                          : transaction?.metadata?.product_name
                      }`}</p>
                      <p className="font-degular text-[#56616B] text-[14px] leading-10">
                        {isDebit
                          ? transaction?.status
                          : transaction?.metadata.name}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold font-degular">{`USD ${transaction?.amount}`}</p>
                    <p className="text-left text-[#56616B] text-[14px]">
                      {date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
