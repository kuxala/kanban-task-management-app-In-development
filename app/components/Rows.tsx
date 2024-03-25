import React from "react";
import Column from "./Column";

export default function Rows() {
  return (
    <>
      <Column taskname="TODO" />
      <Column taskname="DOING" />
      <Column taskname="DONE" />
    </>
  );
}
