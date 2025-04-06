/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "./Button";
import CustomDrawer from "./CustomDrawer";
import Select from "./Select";
import { filterOptions, transactionTypeOptions } from "../utils/utils";

interface TransactionFilterModalProps {
  isOpen: boolean;
  toggle: () => void;
  transactions: any[];
}

export default function TransactionFilterModal(
  props: TransactionFilterModalProps
) {
  const [filter, setFilter] = useState("");
  //   const [selectType, setSelectType] = useState("");
  const { isOpen, toggle } = props;

  return (
    <div>
      <CustomDrawer isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              style={{ scrollBehavior: "smooth" }}
              className="flex gap-3 overflow-y-auto no-scrollbar"
            >
              {filterOptions.map((option, i) => (
                <div key={i}>
                  <Button
                    text={option.label}
                    className={`border font-medium transition-all duration-[0.3s] pl-4 pr-4 text-[12px] text-[#131316] border-[#EFF1F6] w-full min-w-[116px] h-[40px] ${
                      filter === option.value
                        ? "bg-[#131316] text-white"
                        : "hover:bg-[#EFF1F6]"
                    }`}
                    onClick={() => setFilter(option.value)}
                  />
                </div>
              ))}
            </div>
            {/* Checkbox */}
            <div className="flex flex-col gap-6 mt-10">
              <Select
                options={transactionTypeOptions}
                maxMenuHeight={600}
                label="Transaction Type"
              />

              <Select
                options={transactionTypeOptions}
                label="Transaction Status"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button
              text="Clear"
              className="w-[198px] h-[48px] border border-[#EFF1F6]"
            />
            <Button
              text="Apply"
              className="bg-[#131316] h-[48px] text-white w-[198px]"
            />
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
}
