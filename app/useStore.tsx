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
    dots: false,
    editTask: false,
    editBoard: false,
    deleteTask: false,
    deleteBoard: false,
  },
  setEditTask: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, editTask: value } })),
  setEditBoard: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, editBoard: value } })),
  setDeleteTask: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, deleteTask: value } })),
  setDeleteBoard: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, deleteBoard: value } })),
  setDots: (value: boolean) =>
    set((state: any) => ({ dots: { ...state.dots, dots: value } })),

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
}));

export default useStore;
