export default function Dots() {
  return (
    <>
      <div className="absolute top-20 right-5 p-4 bg-white w-48 h-24 flex flex-col rounded-lg ">
        <p className="pb-2 text-gray-600 font-medium text-base leading-6">
          Edit Task
        </p>
        <p className="text-red-500 font-medium text-base leading-6 font-feature-settings">
          Delete Task
        </p>
      </div>
    </>
  );
}
