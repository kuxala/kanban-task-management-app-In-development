import Column from "./Column";
import useStore from "../useStore";
import NewColumn from "./NewColumn";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Rows() {
  const { boards, setBoards, columns, data, setData, sidebar }: any =
    useStore();
  const params = useParams();
  // console.log("Data.boards: ", data.boards);
  // console.log("boards: ", boards);
  return (
    <>
      <div className="flex " style={{ marginLeft: sidebar ? "300px" : "0px" }}>
        {boards.map((board: any) => {
          if (board?.name?.replace(" ", "-") === params.main) {
            return board.columns.map((column: any, columnIndex: number) => {
              // console.log(column);
              return (
                <div key={columnIndex}>
                  <Column tasks={column} taskname={column.name} />
                </div>
              );
            });
          }

          return null;
        })}
      </div>

      <NewColumn />
    </>
  );
}
