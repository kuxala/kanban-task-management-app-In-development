// store.js
import { create } from "zustand";

const useStore = create((set) => ({
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
  setMenu: () => set((state: any) => ({ setMenu: !state.menu })),

  sidebar: true,
  setSidebar: () => set((state: any) => ({ setSidebar: !state.sidebar })),

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
