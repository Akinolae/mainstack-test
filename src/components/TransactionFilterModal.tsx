/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "./Button";
import CustomDrawer from "./CustomDrawer";
import Select from "./Select";
import { filterOptions, transactionTypeOptions } from "../utils/utils";
import { FiChevronDown } from "react-icons/fi";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd/es/date-picker";
import { useState } from "react";

interface TransactionFilterModalProps {
  isOpen: boolean;
  toggle: () => void;
  transactions: any[];
}

interface DateButtonProps extends DatePickerProps {
  text?: string;
}

const DateButton = (props: DateButtonProps) => {
  return (
    <>
      <DatePicker suffixIcon={<FiChevronDown fontSize={"20px"} />} {...props} />
    </>
  );
};

export default function TransactionFilterModal(
  props: TransactionFilterModalProps
) {
  const [filter, setFilter] = useState("");
  const { isOpen, toggle } = props;

  return (
    <div>
      <CustomDrawer title="Filter" isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col justify-between h-[90%]">
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

            <div className="flex flex-col mt-10 mb-6">
              <label className="text-[16px] text-[#131316] mb-2">
                Date Range
              </label>
              <div className="flex justify-between gap-4">
                <DateButton text="here" />
                <DateButton />
              </div>
            </div>
            {/* Checkbox */}
            <div className="flex flex-col gap-6">
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
              onClick={toggle}
              className="bg-[#131316] h-[48px] text-white w-[198px]"
            />
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
}
