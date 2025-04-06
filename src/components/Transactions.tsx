/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate, formatMoney, isTransactionDebit } from "../utils/utils";
import { GoArrowDownLeft } from "react-icons/go";
import Button from "./Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionFilterModal from "./TransactionFilterModal";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const Btn = (props: any) => {
  return (
    <Button
      className="bg-[#EFF1F6] pt-4 pb-4 text-[14px] font-semibold pl-7 pr-7"
      {...props}
    >
      <div className="flex items-center gap-2">
        <p>{props?.title}</p>
        {props.icon ? (
          <>{props.icon}</>
        ) : (
          <MdOutlineKeyboardArrowDown style={{ fontSize: "20px" }} />
        )}
      </div>
    </Button>
  );
};

export default function Transactions({ transactions }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Transaction Filter Modal */}
      <TransactionFilterModal
        isOpen={isOpen}
        toggle={toggle}
        transactions={transactions}
      />
      {/* End of Transaction Filter Modal */}

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
          <Btn title="Filter" onClick={toggle} />
          <Btn
            title="Export list"
            icon={<AiOutlineDownload style={{ fontSize: "20px" }} />}
          />
        </div>
      </div>

      <div className="h-[1px] bg-[#EFF1F6] mt-5 mb-9"></div>

      <div>
        {transactions?.length ? (
          <div className="flex gap-6 flex-col">
            {transactions?.map((transaction: any, index: number) => {
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
                      {isDebit ? <GoArrowUpRight /> : <GoArrowDownLeft />}
                    </div>
                    <div>
                      <p className="font-medium text-[#131316] font-degular">{`${
                        isDebit
                          ? "Cash Withdrawal"
                          : transaction?.metadata?.product_name
                      }`}</p>
                      <p
                        className={`capitalize font-medium font-degular ${
                          isDebit && transaction?.status.includes("success")
                            ? "text-[#0EA163]"
                            : "text-[#56616B]"
                        }  text-[14px] leading-10`}
                      >
                        {isDebit
                          ? transaction?.status
                          : transaction?.metadata.name}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold font-degular">{`USD ${formatMoney({
                      number: transaction?.amount,
                    })}`}</p>
                    <p className="text-left text-[#56616B] text-[14px] font-degular">
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
