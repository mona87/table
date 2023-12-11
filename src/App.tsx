import './App.css'
import TableContainer from './components/TableContainer/TableContainer'
import { TableInterface, TableContext, ActionTypes } from './context/types'
import data from './data'
import { useReducer, Dispatch } from 'react'
import reducer from './context/reducer'

export function App() {
  //add selected prop to each file
  const items = data.map((obj, i) => ({ ...obj, id: i, selected: false }))

  //initialize state
  const initial = {
    selectAll: false,
    showAlert: false,
    files: items,
    count: 0,
    availableFiles: 0,
    columnNames: ['', 'Name', 'Device', 'Path', '', 'Status'],
    dispatch: () => {},
  }

  //pass statt to reducer. reducer will handle all business logic for the table
  const [state, dispatch]: [TableInterface, Dispatch<ActionTypes>] = useReducer(
    reducer,
    initial
  )

  return (
    <TableContext.Provider value={{ ...state, dispatch }}>
      <TableContainer />
    </TableContext.Provider>
  )
}

export default App
