import { create } from "zustand";
import jsonData from "./data.json";

const useStore = create((set) => ({
  data: jsonData,
  setData: (newValue: any) =>
    set((state: any) => ({ data: { ...state.data, ...newValue } })),

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
    { id: 1, value: "Todo" },
    { id: 2, value: "Doing" },
    { id: 3, value: "Done" },
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
  setDarkmode: () => set((state: any) => ({ setDarkmode: !state.darkmode })),

  isOpen: true,
  setIsOpen: () => set((state: any) => ({ setIsOpen: !state.isOpen })),

  view: false,
  setView: (newValue: any) => set({ view: newValue }),
}));

export default useStore;
