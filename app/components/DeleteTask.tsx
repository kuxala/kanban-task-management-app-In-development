import { useParams } from "next/navigation";
import Overlay from "../pages/Overlay";
import useStore from "../useStore";

export default function DeleteTask({ deleteTask, setDeleteTask }: any) {
  const { clicked, setClicked, boards, setView, setBoards, darkmode }: any =
    useStore();
  const params = useParams();

  const checkForMatch = () => {
    const updatedBoards = [...boards]; // Create a copy of the boards array

    updatedBoards.forEach((board: any) => {
      if (board.name.replace(" ", "-") === params.main) {
        board.columns.forEach((column: any) => {
          column.tasks = column.tasks.filter(
            (task: any) => task.title !== clicked.title
          ); // Remove the task from the column
        });
      }
    });

    setBoards(updatedBoards); // Update the boards state with the modified data
    setDeleteTask(false); // Close the delete task modal
    setView(false);
  };
  return (
    <>
      <Overlay isOpen={deleteTask} onClose={() => setDeleteTask(false)} />
      <div
        style={{ backgroundColor: darkmode ? "#2B2C37" : "" }}
        className="fixed md:w-[500px] md:top-[30%] md:left-1/2 md:-translate-x-1/2 top-20 left-0 bg-white  flex flex-col ml-8 mr-8 p-6 z-50 rounded-[8px] "
      >
        <h1 className="pb-6 text-red-500 font-bold text-xl font-feature-settings">
          Delete Task?
        </h1>
        <p
          style={{ color: darkmode ? "#828FA3" : "" }}
          className="text-gray-500 font-medium text-base leading-6 font-feature-settings"
        >
          Are you sure you want to delete the board? This action will remove all
          columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-col gap-4 pt-6 md:flex-row">
          <button
            className="w-full h-10 rounded-[20px] bg-red-500  text-white text-center font-bold text-base leading-6"
            onClick={() => {
              checkForMatch();
            }}
          >
            Delete
          </button>
          <button
            className="w-full h-10 rounded-[20px] bg-purple-200 text-purple-700 text-center font-bold text-base leading-6"
            onClick={() => {
              setDeleteTask(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
