import useStore from "../useStore";

export default function Column({ taskname }: any) {
  const { data, view, setView, columns }: any = useStore();

  return (
    <>
      <div className="section__columns">
        <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
          {taskname}
        </h3>

        {data.boards.map((board: any) => (
          <div key={board.name}>
            {board.columns.map((column: any) => (
              <div key={column.name}>
                {column?.tasks?.map((task: any) => {
                  if (task.status === taskname) {
                    return (
                      <div
                        key={task.title}
                        className="section__div"
                        onClick={() => setView(true)}
                      >
                        <div className="flex flex-col">
                          <p className="text-black font-bold text-base pb-1">
                            {task.title}
                          </p>
                          <p className="text-gray-600 font-bold text-xs">
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
        ))}
      </div>
    </>
  );
}
