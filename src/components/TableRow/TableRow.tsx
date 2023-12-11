import { css } from '@emotion/react'
import CheckBox from "../Checkbox/Checkbox";
import { useTableContext } from '../../context/tableContext';
import Status from '../Status/Status';

const TableRow = () => {

  const {selectionStore, showAlert, dispatch } = useTableContext();

  const handleSelection = (id: number) => dispatch({type: 'TOGGLE_CHECKBOX', payload: id})

  return (
    <div data-testid="table-row" role="rowgroup" css={overflow}>
      {selectionStore.map(obj => {
        const { id, selected, name, device, path, status } = obj;
        return (
          <div className="grid"  role="listitem" key={id} css={tableRowStyle(selected)}>
            <div className="center">
            <CheckBox 
              disabled={showAlert} 
              selected={selected} 
              height={15} width={15} 
              handleSelection={() => handleSelection(id)} 
            />
            </div>
            
            <div>{name}</div>
            <div >{device}</div>
            <div >{path}</div>
             <Status type={status === 'Available' ? 'active' : 'none'} />
            <div>{status}</div>
          </div>
        )
      })}
    </div>

  )
}

const tableRowStyle = (isActive: boolean | string) => css({
  display: 'grid',
  gridTemplateColumns: '50px 1fr 1fr 3fr 50px 100px',
  alignItems: 'center',
  border: '1px solid #d3d3d3',
  width: '100%',
  fontWeight: 300,
  backgroundColor: isActive ? '#d9d9d9' : 'transparent',
  height: 45,
  '&:hover': {
    backgroundColor: '#f2f2f2'
  },
  '& > div':{
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: 10
  }
})

const overflow = css({
  overflowY: 'scroll',
})



export default TableRow