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

  columns: [{ id: 1, value: "" }],
  setColumns: (newColumns: any) => set({ columns: newColumns }),

  addNewBoard: false,
  setAddNewBoard: () =>
    set((state: any) => ({ addNewBoard: !state.addNewBoard })),

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
