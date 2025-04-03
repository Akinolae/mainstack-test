/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import Transactions from "../components/Transactions";
import { AppContext } from "../context/AppContext";
import { CiCircleInfo } from "react-icons/ci";
import Button from "../components/Button";

const Wrapper = (props: any) => (
  <div>
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#56616B] text-[14px] font-degular">
          {props.header}
        </p>
        <CiCircleInfo className="text-[#888F95] text-[14px]" />
      </div>
      <p className="text-[28px] mt-2 font-bold font-degular">{`USD ${props.amount}`}</p>
    </div>
  </div>
);

export default function Revenue() {
  const context = useContext(AppContext);
  const wallet: any = context?.wallet;

  return (
    <div className="mt-28 mb-10">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div>
            <p className="font-degular">Available Balance</p>
            <div className="w-full flex gap-16">
              <p className="text-[#131316] text-[36px] font-bold mt-2 font-degular">
                {`USD ${wallet?.balance ?? 0}`}
              </p>

              <Button
                className="bg-[#131316] text-white w-[167px] h-[52px]"
                text="Withdraw"
              />
            </div>
          </div>
        </div>
        <div className="w-[23%] flex flex-col gap-7">
          <Wrapper
            header="Ledger Balance"
            amount={wallet?.ledger_balance ?? 0}
          />
          <Wrapper header="Total Payout" amount={wallet?.total_payout ?? 0} />
          <Wrapper header="Total Revenue" amount={wallet?.total_revenue ?? 0} />
          <Wrapper
            header="Pending Payout"
            amount={wallet?.pending_payout ?? 0}
          />
        </div>
      </div>
      <div className="mt-[100px]">
        <Transactions />
      </div>
    </div>
  );
}
