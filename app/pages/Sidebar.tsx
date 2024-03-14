import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__texts">
          <p className="sidebar__header">All Boards (number)</p>
          <div className="flex flex-col gap-2">
            <p className="sidebar__boards" tabIndex={0}>
              <img src="/assets/icon-board.svg" />
              First one
            </p>
            <p className="sidebar__boards" tabIndex={0}>
              <img src="/assets/icon-board.svg" />
              Second one
            </p>
          </div>
          <p className="sidebar__add__board flex gap-2">
            <img src="/assets/icon-board.svg" width="16px" height="16px" />+
            Create New Board
          </p>
        </div>
      </div>
    </>
  );
}
