import './App.css'
import TableContainer from './components/Table/TableContainer'
import {  SelectionInterface,SelectionContext  } from './tableContext';
import data from './data';
import { useState } from 'react';


function App() {

  const items = data.map((obj, i) => ({ ...obj, id: i, selected: false }))

  const [showAlert, setShowAlert] = useState(false)
  const [selectAll, setSelectAll] = useState<boolean | string>(false)
  const [selectionStore, setSelectionStore] = useState<SelectionInterface['selectionStore']>(items)

  const initialState ={
    selectAll,
    showAlert,
    selectionStore,
    setShowAlert,
    setSelectAll,
    setSelectionStore
  }
return (
    <SelectionContext.Provider value={initialState}>
      <TableContainer />
    </SelectionContext.Provider>

  )
}

export default App
