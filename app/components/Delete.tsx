export default function Delete() {
  return (
    <>
      <div>
        <h1>Delete Board</h1>
        <p>
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed./
        </p>

        <div>
          <button>Delete</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  );
}
