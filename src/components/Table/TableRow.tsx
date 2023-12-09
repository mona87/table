import CheckBox from "../Checkbox";
import { useSelectionContext } from '../../tableContext';
import Status from '../Status';
import useHook  from "../../customHooks";


const TableRow = () => {

  const {selectionStore, showAlert } = useSelectionContext();
  const {toggleCheckbox} = useHook()

  const handleSelection = (id: number) => {
    toggleCheckbox(id)
  }

  return (
    <>
      {selectionStore.map(obj => {
        const { id, selected, name, device, path, status } = obj;
        return (
          <div key={id} style={tableRowStyle(selected)}>
            <CheckBox disabled={showAlert} selected={selected} height={15} width={15} handleSelection={() => handleSelection(id)} />
            <div>{name}</div>
            <div>{device}</div>
            <div style={overflow}>{path}</div>
             <Status type={status === 'Available' ? 'active' : 'none'} />
            <div style={statusStyle}>{status}</div>
          </div>
        )
      })}
    </>

  )
}

const tableRowStyle = (isActive: boolean | string) => ({
  display: 'grid',
  gridTemplateColumns: '50px 150px 200px 2fr 30px 100px',
  alignItems: 'center',
  border: '1px solid lightgray',
  width: '100%',
  backgroundColor: isActive ? 'lightgray' : 'transparent',
  height: 45,
  '&:hover': {
    backgroundColor: 'green'
  }
})

const overflow = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

}

const statusStyle ={
  display: 'flex',
  alignItems: 'center'
}




export default TableRow