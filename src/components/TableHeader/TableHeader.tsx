import { tableHeaderStyle, gridItem } from './table_header.css'
import download from '../../assets/download.svg'
import { useTableContext } from '../../context/tableContext'
import { useEffect } from 'react'
import CheckBox from '../Checkbox/Checkbox'
import Counter from '../Counter/Counter'
import AlertBox from '../AlertBox/AlertBox'
import Button from '../Button/Button'

const TableHeader = () => {
  const { files, selectAll, showAlert, count, availableFiles, dispatch } =
    useTableContext()

  useEffect(() => {
    //updates the select all checkbox when a selection is made
    dispatch({ type: 'UPDATE_SELECT_ALL_CHECKBOX' })
    //updates count when selection is made
    dispatch({ type: 'UPDATE_COUNT' })
    //updates the number of files availabe for download when selection is made
    dispatch({ type: 'UPDATE_AVAILABLE_FILES' })
  }, [files, dispatch])

  const handleButton = () => {
    //shows alert button when download button is clicked
    if (availableFiles) dispatch({ type: 'TOGGLE_ALERT', payload: true })
  }

  //toggles all checkboxes if select-all checkbox is selected
  const handleSelection = () => dispatch({ type: 'UPDATE_ALL_CHECKBOXES' })

  return (
    <section data-testid="table-header" css={{ width: '100%' }}>
      <div css={tableHeaderStyle}>
        <div className="center" css={gridItem}>
          <CheckBox
            selected={selectAll}
            height={20}
            width={20}
            disabled={showAlert}
            handleSelection={handleSelection}
          />
        </div>
        <Counter count={count} />
        <Button
          icon={download}
          disabled={showAlert ? true : availableFiles ? false : true}
          buttonHandler={handleButton}
        >
          Download Selected
        </Button>
        {showAlert ? <AlertBox /> : false}
      </div>
    </section>
  )
}

export default TableHeader
