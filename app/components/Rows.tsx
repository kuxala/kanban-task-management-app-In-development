import React from "react";
import Column from "./Column";
import useStore from "../useStore";

export default function Rows() {
  const { columns, setColumns }: any = useStore();

  console.log("Columns: ", columns);
  return (
    <>
      {columns.map((item: any) => {
        return <Column taskname={item.value} />;
      })}
    </>
  );
}
