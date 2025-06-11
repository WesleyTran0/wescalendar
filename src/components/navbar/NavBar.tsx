import { ReactElement } from "react";
import Sidebar from "@shared/Sidebar";
import Calendar from "@applet/Calendar";

type NavbarProps = {};

export default function Navbar({ }: NavbarProps): ReactElement {
  return (
    <Sidebar>
      <Calendar></Calendar>
    </Sidebar>
  );
}
