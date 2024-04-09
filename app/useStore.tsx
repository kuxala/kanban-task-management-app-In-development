import { create } from "zustand";
import jsonData from "./data.json";

const useStore = create((set) => ({
  data: jsonData,
  setData: (newValue: any) => set({ data: newValue }),

  boards: jsonData.boards,
  setboards: (newValue: any) => set({ boards: newValue }),

  newTaskTitle: "",
  setNewTaskTitle: (newValue: any) => set({ newTaskTitle: newValue }),

  newTaskDescription: "",
  setNewTaskDescription: (newValue: any) =>
    set({ newTaskDescription: newValue }),

  newTaskSubtasks: [],
  setNewTaskSubtasks: (newValue: any) => set({ newTaskSubtasks: newValue }),

  newTaskStatus: "Todo",
  setNewTaskStatus: (newValue: any) => set({ newTaskStatus: newValue }),

  newSubtaskTitle: "",
  setNewSubtaskTitle: (newValue: any) => set({ newSubtaskTitle: newValue }),

  newSubtasks: [],
  setNewSubtasks: (newValue: any) => set({ newSubtasks: newValue }),

  active: false,
  setActive: (newValue: any) => set({ active: newValue }),

  editBoardName: "",
  setEditBoardName: (newValue: any) => set({ editBoardName: newValue }),

  sidebar: true,
  setSidebar: (newValue: any) => set({ sidebar: newValue }),

  addNew: false,
  setAddNew: () => set((state: any) => ({ addNew: !state.addNew })),

  addNewTask: "",
  setAddNewTask: (newValue: any) => set({ addNewTask: newValue }),

  columns: [
    { id: "Todo", value: "Todo" },
    { id: "Doing", value: "Doing" },
    { id: "Done", value: "Done" },
  ],
  setColumns: (newColumns: any) => set({ columns: newColumns }),

  addNewBoardName: null,
  setAddNewBoardName: (newValue: any) => set({ addNewBoardName: newValue }),

  addNewBoard: false,
  setAddNewBoard: () =>
    set((state: any) => ({ addNewBoard: !state.addNewBoard })),

  menu: false,
  setMenu: (newValue: any) => set({ menu: newValue }),

  edit: false,
  setEdit: () => set((state: any) => ({ setEdit: !state.edit })),

  darkmode: false,
  setDarkmode: (newValue: any) => set({ darkmode: newValue }),

  isOpen: true,
  setIsOpen: () => set((state: any) => ({ setIsOpen: !state.isOpen })),

  view: false,
  setView: (newValue: any) => set({ view: newValue }),
}));
export default useStore;
