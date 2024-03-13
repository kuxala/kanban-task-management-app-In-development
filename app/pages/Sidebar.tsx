import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__texts">
          <p className="sidebar__header">All Boards (number)</p>
          <div className="flex flex-col gap-2">
            <p className="sidebar__boards">
              <img src="/assets/icon-board.svg" />
              First one
            </p>
            <p className="sidebar__boards">
              <img src="/assets/icon-board.svg" />
              Second one
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
