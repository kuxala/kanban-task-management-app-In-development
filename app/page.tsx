"use client";
import React, { useState } from "react";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";

export const AppContext = React.createContext({});

export default function Home() {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(true);

  return (
    <>
      <AppContext.Provider
        value={{ darkmode, setDarkmode, sidebar, setSidebar }}
      >
        <Header />
        <Sidebar />
      </AppContext.Provider>
    </>
  );
}
