import './App.css'
import TableContainer from './components/TableContainer/TableContainer'
import { SelectionInterface, TableContext, ActionTypes } from './context/tableContext';
import data from './data';
import { useReducer, Dispatch, } from 'react';
import reducer from './context/reducer'

export function App() {

  const items = data.map((obj, i) => ({ ...obj, id: i, selected: false }))

  const initial = {
    selectAll: false,
    showAlert: false,
    selectionStore: items,
    count: 0,
    availableFiles: 0,
    columnNames:['', 'Name', 'Device', 'Path', 'Status'],
    dispatch: () => { }
  }

  const [state, dispatch]: [SelectionInterface, Dispatch<ActionTypes>] = useReducer(reducer, initial);

  return (
    <TableContext.Provider value={{ ...state, dispatch }}>
      <TableContainer />
    </TableContext.Provider>

  )
}

export default App
