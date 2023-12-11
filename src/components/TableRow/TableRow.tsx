import { tableRowStyle, overflow } from './table_row.css'
import CheckBox from '../Checkbox/Checkbox'
import { useTableContext } from '../../context/tableContext'
import Status from '../Status/Status'

const TableRow = () => {
  const { files, showAlert, dispatch } = useTableContext()
  const handleSelection = (id: number) =>
    //updates file with selected checkbox
    dispatch({ type: 'TOGGLE_CHECKBOX', payload: id })

  //renders list of files
  return (
    <div data-testid="table-row" role="list" css={overflow}>
      {files.map((obj) => {
        const { id, selected, name, device, path, status } = obj
        return (
          <div
            className="grid"
            role="listitem"
            key={id}
            css={tableRowStyle(selected)}
          >
            <div className="center">
              <CheckBox
                disabled={showAlert}
                selected={selected}
                height={15}
                width={15}
                handleSelection={() => handleSelection(id)}
              />
            </div>

            <div>{name}</div>
            <div>{device}</div>
            <div>{path}</div>
            <Status type={status === 'Available' ? 'active' : 'none'} />
            <div>{status}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TableRow
