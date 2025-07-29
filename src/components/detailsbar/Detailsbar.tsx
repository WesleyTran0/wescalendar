import { ReactElement } from "react";
import Sidebar from "@shared/Sidebar";

type DetailsbarProps = {};

export default function Detailsbar({}: DetailsbarProps): ReactElement {
  return (
    <Sidebar className="right-0 text-standard-text border-l border-bg-highlight">
      <div>nothing for now</div>
    </Sidebar>
  );
}
