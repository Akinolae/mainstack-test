/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer } from "antd";

export default function CustomDrawer(props: any) {
  return (
    <Drawer
      open={props?.isOpen}
      push={false}
      size="large"
      onClose={props?.toggle}
    >
      {props?.children}
    </Drawer>
  );
}
