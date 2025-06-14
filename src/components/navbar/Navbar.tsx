import { ReactElement } from "react";
import Sidebar from "@shared/Sidebar";
import CalendarApplet from "@applet/CalendarApplet";

type NavbarProps = {};

export default function Navbar({ }: NavbarProps): ReactElement {
  return (
    <Sidebar className="border-r border-bg-highlight">
      <CalendarApplet />
    </Sidebar>
  );
}
