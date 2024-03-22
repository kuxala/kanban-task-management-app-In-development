"use client";
import MainSection from "../pages/MainSection";
import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "../components/View";

type Params = {
  main: string;
};

export default function Main() {
  const params = useParams<Params>();
  const { data, view, setView, tasks, boards, setBoards }: any = useStore();

  const checkBoard = boards.find((item: any) => {
    return params.main === item.name.replace(" ", "-");
  });

  console.log(
    "__________________________________________________________________________________________________________"
  );
  type Props = {
    title: string;
    description: string;
  };
  const loop = () => {
    if (checkBoard) {
      return checkBoard.columns.flatMap((column: any) => {
        return column.tasks.map((task: any) => ({
          title: task.title,
          description: task.description,
        }));
      });
    }
    return [];
  };
  // const checkWhere = () => {
  //   if (checkBoard){
  //     if(){

  //     }
  //   }
  // };
  return (
    <>
      <div className="section__both">
        <div className="section__columns">
          <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
            Todo
          </h3>
          {loop().map(
            (task: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className="section__div"
                onClick={() => setView(true)}
              >
                {task.title}
              </div>
            )
          )}
          {/* <div
            className="section__div"
            onClick={() => {
              setView(true);
            }}
          >
            <h1 className="section__description">Description</h1>
          </div> */}
        </div>
      </div>
      <div>{view ? <View /> : null}</div>
      <MainSection />
    </>
  );
}
