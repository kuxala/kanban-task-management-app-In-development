import Column from "./Column";
import useStore from "../useStore";
import NewColumn from "./NewColumn";
import { useParams } from "next/navigation";

export default function Rows() {
  const { boards }: any = useStore();
  const params = useParams();
  return (
    <>
      <div className="flex">
        {boards.map((board: any) => {
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

      <NewColumn />
    </>
  );
}
