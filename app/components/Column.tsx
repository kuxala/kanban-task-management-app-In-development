import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "./View";

export default function Column({ taskname }: any) {
  const { data, view, setView, columns }: any = useStore();
  const params = useParams<any>();
  // console.log("Params: ", params.main);

  const filteredBoard = data.boards.find(
    (board: any) => board?.name?.replace(" ", "-") === params.main
  );

  return (
    <>
      <div className="">
        <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
          {taskname}
        </h3>

        {filteredBoard && (
          <div key={filteredBoard.name}>
            {filteredBoard.columns.map((column: any) => (
              <div key={column.name}>
                {column?.tasks?.map((task: any) => {
                  if (task.status === taskname) {
                    return (
                      <div
                        key={task.title}
                        className="section__div"
                        onClick={() => setView(true)}
                      >
                        <div className="flex flex-col ">
                          <p className="text-black font-bold text-base pb-1 hover:text-[#635fc7]">
                            {task.title}
                          </p>
                          <p className="text-gray-600 font-bold text-xs ">
                            Subtasks
                          </p>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
