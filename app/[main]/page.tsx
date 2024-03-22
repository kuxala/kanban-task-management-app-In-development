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

  // console.log("data Boads: ", boards);
  const [firstBoard, secondBoard, thirdBoard, ...otherBoards] = boards;
  console.log(boards);

  const loop = () => {
    data.boards.forEach((item: any) => {
      if (params.main === item.name.replace(" ", "-")) {
        data?.boards?.column?.foEach((column: any) => {
          console.log(column);
        });
        return "not found";
      }
    });
  };

  loop();
  return (
    <>
      <MainSection />
      <div className="section__both">
        <div className="section__columns">
          <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
            {}
          </h3>

          <div
            className="section__div"
            onClick={() => {
              setView(true);
            }}
          >
            <h1 className="section__description"></h1>
          </div>
        </div>
      </div>
      <div>{view ? <View /> : null}</div>
    </>
  );
}
