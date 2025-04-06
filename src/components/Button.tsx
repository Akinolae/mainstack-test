/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Button(props: any) {
  return (
    <button
      className={`rounded-[100px] font-medium ${props.className}`}
      onClick={props.onClick}
    >
      {props?.text ? props.text : props.children}
    </button>
  );
}
