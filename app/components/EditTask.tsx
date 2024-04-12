import { useEffect } from "react";
import Overlay from "../pages/Overlay";
import "../styles/AddNew.css";
import useStore from "../useStore";
export default function EditTask({ editTask, setEditTask }: any) {
  const { clicked, setClicked }: any = useStore();
  console.log(clicked);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleValue = e.target.value;
    setClicked((prevState: any) => ({
      ...prevState,
      title: titleValue,
    }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const descriptionValue = e.target.value;
    setClicked((prevState: any) => ({
      ...prevState,
      description: descriptionValue,
    }));
  };

  return (
    <>
      <Overlay isOpen={editTask} onClose={() => setEditTask(false)} />

      <div className="addnew__container absolute bg-white p-6 rounded-md   ">
        <h1 className="text-black font-sans font-semibold text-lg pb-6">
          Edit Task
        </h1>
        <div>
          <div>
            <h3 className="text-gray-500 font-semibold pb-2 ">Title</h3>
            <input
              className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
              type="text"
              value={clicked.title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold pb-2 pt-4">
              Description
            </h3>
            <textarea
              className="addnew__description text-[14px] p-2 resize-y border border-gray-300 rounded-md w-full min-h-[150px]"
              // {...register("description")}
              value={clicked.description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold pt-4 pb-2">SubTasks</h3>
            {clicked.description}
            <button
              // onClick={handleAddSubtask}
              className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
            >
              Add New Subtask
            </button>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold pb-2">Status</h3>
            <select className="w-full h-12 border border-gray-300 rounded-md p-2 bg-white">
              <option value="1">Todo</option>
              <option value="2">Doing</option>
              <option value="2">Done</option>
            </select>
          </div>
          <button
            type="submit"
            className=" h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
            onClick={() => {
              // setAddNewBoard(false);
              // dataPush();
              setEditTask();
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
