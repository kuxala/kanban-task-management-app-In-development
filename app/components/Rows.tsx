import Column from "./Column";
import useStore from "../useStore";
import NewColumn from "./NewColumn";
import { useParams } from "next/navigation";

export default function Rows() {
  const { boards }: any = useStore();
  const params = useParams();
  console.log("Params: ", params.main);
  return (
    <>
      <div className="flex">
        {/* {boards.map((board: any, boardIndex: number) => (
          <div key={boardIndex} className="board-container">
            <div className="flex">
              {board.columns.map((column: any, columnIndex: number) => (
                <div key={columnIndex} className="column-container flex-grow">
                  <Column tasks={column.tasks} taskname={column.name} />
                  {columnIndex < board.columns.length - 1 && (
                    <div className="column-separator w-1 bg-gray-300 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))} */}
        {boards.map((board: any) => {
          console.log(board.name.replace(" ", "-"));
          if (board.name.replace(" ", "-") === params.main) {
            return board.columns.map((column: any, columnIndex: number) => {
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

      {/* <NewColumn /> */}
    </>
  );
}
