import { createContext, useContext,  } from "react";
// import { SelectionContext}
  
export type SelectionInterface = {
    selectAll: boolean | string;
    showAlert: boolean;
    selectionStore: {
    id: number,
    name: string,
    device: string,
    path: string,
    status: string,
    selected: boolean | string;
    }[] | [],
    setSelectionStore: (m: SelectionInterface['selectionStore']) => void;
    setSelectAll: (b: boolean | string) => void;
    setShowAlert:(b: boolean ) => void;
}

export const SelectionContext = createContext<SelectionInterface>({
    selectAll: false,
    showAlert: false,
    selectionStore: [{
    id: 0,
    name: '',
    device: '',
    path: '',
    status: '',
    selected: false,
    }],
    setSelectionStore: () => {},
    setSelectAll:() => '',
    setShowAlert: ()=> false
});

export const useSelectionContext = () => useContext(SelectionContext);

