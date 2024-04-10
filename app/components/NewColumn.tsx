import React from "react";
import useStore from "../useStore";

export default function NewColumn() {
  const { addNew, setAddNew }: any = useStore();

  return (
    <>
      <div className="w-[280px] flex justify-center items-center rounded-md bg-[#ecf2fb] min-h-[100vh]">
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
