import { Checkbox } from "antd";
import { components, OptionProps } from "react-select";

interface OptionType {
  label: string;
  value: string;
  isChecked?: boolean;
}

export default function CheckboxOption(props: OptionProps<OptionType>) {
  return (
    <div>
      <components.Option {...props}>
        <Checkbox className="text-[#131316] pt-2 pb-2 font-medium">
          {props.data.label}
        </Checkbox>
      </components.Option>
    </div>
  );
}
