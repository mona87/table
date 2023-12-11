import { createContext } from 'react'

export type ActionTypes =
  | { type: 'UPDATE_SELECT_ALL_CHECKBOX' }
  | { type: 'UPDATE_ALL_CHECKBOXES' }
  | { type: 'UPDATE_COUNT' }
  | { type: 'UPDATE_AVAILABLE_FILES' }
  | { type: 'TOGGLE_CHECKBOX'; payload: number }
  | { type: 'TOGGLE_ALERT'; payload: boolean }

export type TableInterface = {
  selectAll: boolean | string
  showAlert: boolean
  count: number
  availableFiles: number
  columnNames: string[]
  files:
    | {
        id: number
        name: string
        device: string
        path: string
        status: string
        selected: boolean | string
      }[]
    | []
  dispatch: (action: ActionTypes) => void
}

export const TableContext = createContext<TableInterface>({
  selectAll: false,
  showAlert: false,
  count: 0,
  availableFiles: 0,
  columnNames: [],
  files: [
    {
      id: 0,
      name: '',
      device: '',
      path: '',
      status: '',
      selected: false,
    },
  ],
  dispatch: () => {},
})
