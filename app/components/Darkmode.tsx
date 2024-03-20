import { Switch } from "@mui/material";
import { useContext } from "react";

export default function Darkmode() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <div className="sidebar__darkmode  h-12 flex gap-3 items-center justify-center bg-purple-300 bg-opacity-10   ">
        <img src="/assets/icon-light-theme.svg" />
        <div onClick={() => {}}>
          <Switch {...label} defaultChecked={false} />
        </div>
        <img src="/assets/icon-dark-theme.svg" />
      </div>
    </>
  );
}
