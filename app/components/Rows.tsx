import Column from "./Column";
import useStore from "../useStore";

export default function Rows() {
  const { columns }: any = useStore();

  const checker = (taskname: string) => {
    return columns
      .filter((column: any) => column.value === taskname)
      .flatMap((column: any) => column.tasks);
  };

  return (
    <>
      {columns.map((item: any) => {
        const tasks = checker(item.value);
        return <Column key={item.id} tasks={tasks} taskname={item.value} />;
      })}
    </>
  );
}
