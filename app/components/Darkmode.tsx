import { Switch } from "@mui/material";
import { useContext, useEffect } from "react";
import useStore from "../useStore";

export default function Darkmode() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const { darkmode, setDarkmode }: any = useStore();

  useEffect(() => {
    // Apply the class to the body element
    document.body.classList.toggle("dark-mode", darkmode);
  }, [darkmode]); // Re-apply when darkmode changes

  return (
    <>
      <div className="sidebar__darkmode  h-12 flex gap-3 items-center justify-center bg-purple-300 bg-opacity-10   ">
        <img src="/assets/icon-light-theme.svg" />
        <div>
          <Switch
            {...label}
            defaultChecked={false}
            onClick={() => setDarkmode(!darkmode)}
          />
        </div>
        <img src="/assets/icon-dark-theme.svg" />
      </div>
    </>
  );
}
