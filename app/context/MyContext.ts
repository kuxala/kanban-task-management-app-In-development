// context/MyContext.js
import React from 'react';
interface MyContextType {
    data: {
      boards: {
        name: string;
        id: number;
        active: boolean;
        columns: {
          name: string;
          color: string;
          id: number;
          boardID: number;
          tasks: {
            name: string;
            id: number;
            boardID: number;
            columnID: number;
            description: string;
            subTasks: {
              name: string;
              id: number;
              boardID: number;
              columnID: number;
              taskID: number;
              isDone: boolean;
            }[];
          }[];
        }[];
      }[];
    };
    setData: React.Dispatch<React.SetStateAction<{
      boards: {
        name: string;
        id: number;
        active: boolean;
        columns: {
          name: string;
          color: string;
          id: number;
          boardID: number;
          tasks: {
            name: string;
            id: number;
            boardID: number;
            columnID: number;
            description: string;
            subTasks: {
              name: string;
              id: number;
              boardID: number;
              columnID: number;
              taskID: number;
              isDone: boolean;
            }[];
          }[];
        }[];
      }[];
    }>>;
  }
const MyContext = React.createContext<any>({});

export default MyContext;
