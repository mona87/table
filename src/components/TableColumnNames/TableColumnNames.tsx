import { tableTitleStyle, titleGridItem } from './table_column_names.css'
import { useTableContext } from '../../context/tableContext'

const TableColumnNames = () => {
  const { columnNames } = useTableContext()

  //maps out names for columns
  return (
    <div data-testid="table-column" css={tableTitleStyle}>
      {columnNames.map((name, i) => {
        return (
          <div key={i} css={titleGridItem}>
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TableColumnNames
