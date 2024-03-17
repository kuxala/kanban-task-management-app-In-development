import { Switch } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../page";

export default function Darkmode() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const { darkmode, setDarkmode }: any = useContext(AppContext);
  return (
    <>
      <div className="sidebar__darkmode  flex gap-3 items-center justify-center bg-purple-400 bg-opacity-10 ml-2 mr-2 mb-2 ">
        <img src="/assets/icon-light-theme.svg" />
        <div
          onClick={() => {
            setDarkmode(!darkmode);
          }}
        >
          <Switch {...label} defaultChecked={false} />
        </div>
        <img src="/assets/icon-dark-theme.svg" />
      </div>
    </>
  );
}
