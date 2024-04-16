import React from "react";
import useStore from "../useStore";

export default function NewColumn() {
  const { addNew, setAddNew, darkmode }: any = useStore();

  return (
    <>
      <div
        className="w-[280px] h-screen flex justify-center items-center rounded-md bg-[#ecf2fb] min-h-[70h] m-12 mt-6"
        style={{ backgroundColor: darkmode ? "#22232e" : "#ebf1fb" }}
      >
        <a
          className="text-[#828FA3] hover:text-[#635FC7] text-center  font-sans font-[700] text-lg cursor-pointer"
          onClick={() => {
            setAddNew(!addNew);
          }}
        >
          + New Column
        </a>
      </div>
    </>
  );
}
