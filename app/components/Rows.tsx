import Column from "./Column";
import useStore from "../useStore";
import NewColumn from "./NewColumn";
import { useParams } from "next/navigation";

export default function Rows() {
  const { boards, columns }: any = useStore();
  const params = useParams();

  return (
    <>
      <div className="flex">
        {boards.map((board: any) => {
          if (board.name.replace(" ", "-") === params.main) {
            // console.log(board.columns);
            return columns[0].map((column: any, columnIndex: number) => {
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
