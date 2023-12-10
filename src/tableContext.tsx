import { createContext, useContext,  } from "react";
// import { SelectionContext}

export type ActionTypes =
  | { type: 'UPDATE_SELECT_ALL'; }
  | { type: 'UPDATE_CHECKBOX';  }
  | { type: 'UPDATE_COUNT'; }
  | { type: 'UPDATE_AVAILABLE_FILES'; }
  | { type: 'TOGGLE_CHECKBOX'; payload: number }
  | { type: 'TOGGLE_ALERT'; payload: boolean };
  
export type SelectionInterface = {
    selectAll: boolean | string;
    showAlert: boolean;
    count: number,
    availableFiles: number;
    columnNames: string[];
    selectionStore: {
    id: number,
    name: string,
    device: string,
    path: string,
    status: string,
    selected: boolean | string;
    }[] | [],
    dispatch: (action:ActionTypes)=> void;
}

export const SelectionContext = createContext<SelectionInterface>({
    selectAll: false,
    showAlert: false,
    count: 0,
    availableFiles: 0,
    columnNames: [],
    selectionStore: [{
    id: 0,
    name: '',
    device: '',
    path: '',
    status: '',
    selected: false,
    }],
    dispatch: () => {}
});

export const useSelectionContext = () => useContext(SelectionContext);

