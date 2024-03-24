// usestore.js
import { create } from "zustand";
import jsonData from "./data.json";

const useStore = create((set) => ({
  data: jsonData,
  setData: (newValue: any) =>
    set((state: any) => ({ data: { ...state.data, ...newValue } })),

  active: false,
  setActive: (newValue: any) => set({ active: newValue }),

  sidebar: true,
  setSidebar: (newValue: any) => set({ sidebar: newValue }),

  addNew: false,
  setAddNew: () => set((state: any) => ({ addNew: !state.addNew })),

  dots: {
    editTask: false,
    editBoard: false,
  },
  setEditTask: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, editTask: value } })),
  setEditBoard: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, editBoard: value } })),

  menu: false,
  setMenu: (newValue: any) => set({ menu: newValue }),

  edit: false,
  setEdit: () => set((state: any) => ({ setEdit: !state.edit })),

  darkmode: false,
  setDarkmode: () => set((state: any) => ({ setDarkmode: !state.darkmode })),

  isOpen: false,
  setIsOpen: () => set((state: any) => ({ setIsOpen: !state.isOpen })),

  view: false,
  setView: (newValue: any) => set({ view: newValue }),

  deleteTask: false,
  setDeleteTask: () =>
    set((state: any) => ({ setDeleteTask: !state.deleteTask })),
}));

export default useStore;
