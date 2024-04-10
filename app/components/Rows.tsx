import Column from "./Column";
import useStore from "../useStore";
import NewColumn from "./NewColumn";

export default function Rows() {
  const { columns }: any = useStore();
  // console.log("columns: ", columns);
  const checker = (taskname: string) => {
    // console.log(taskname);
    return columns
      .filter((column: any) => column.name === taskname)
      .flatMap((column: any) => column.tasks);
  };

  return (
    <>
      {columns.map((item: any) => {
        const tasks = checker(item.value);
        return <Column key={item.id} tasks={tasks} taskname={item.name} />;
      })}
      <NewColumn />
    </>
  );
}
