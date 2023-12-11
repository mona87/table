import CheckBox from "../Checkbox/Checkbox";
import { useTableContext } from '../../context/tableContext';
import Status from '../Status/Status';

const TableRow = () => {

  const {selectionStore, showAlert, dispatch } = useTableContext();

  const handleSelection = (id: number) => dispatch({type: 'TOGGLE_CHECKBOX', payload: id})

  return (
    <div data-testid="table-row" role="rowgroup">
      {selectionStore.map(obj => {
        const { id, selected, name, device, path, status } = obj;
        return (
          <div  role="listitem" key={id} style={tableRowStyle(selected)}>
            <CheckBox 
              disabled={showAlert} 
              selected={selected} 
              height={15} width={15} 
              handleSelection={() => handleSelection(id)} 
            />
            <div>{name}</div>
            <div>{device}</div>
            <div style={overflow}>{path}</div>
             <Status type={status === 'Available' ? 'active' : 'none'} />
            <div style={statusStyle}>{status}</div>
          </div>
        )
      })}
    </div>

  )
}

const tableRowStyle = (isActive: boolean | string) => ({
  display: 'grid',
  gridTemplateColumns: '50px 150px 200px 2fr 50px 100px',
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