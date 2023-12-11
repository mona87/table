import { useTableContext } from '../../context/tableContext';
import { useEffect } from 'react';
import CheckBox from "../Checkbox/Checkbox"
import Counter from "../Counter/Counter";
import AlertBox from '../AlertBox/AlertBox';
import Button from '../Button/Button';

const TableHeader = () => {

	const { selectionStore, selectAll, showAlert, count, availableFiles, dispatch } = useTableContext()

	useEffect(() => {
		dispatch({type: 'UPDATE_SELECT_ALL_CHECKBOX'})
		dispatch({type: 'UPDATE_COUNT'})
		dispatch({type: 'UPDATE_AVAILABLE_FILES'})
	}, [selectionStore, dispatch])

	const handleButton = () => {
		if(availableFiles) dispatch({type: 'TOGGLE_ALERT', payload: true})
	}

	const handleSelection = () => dispatch({type: 'UPDATE_CHECKBOX'})

	return (
		<section data-testid="table-header" role="row" style={{ width: '100%' }}>
			<div style={tableHeaderStyle}>
				<div style={gridItem}>
					<CheckBox
						selected={selectAll}
						height={20}
						width={20}
						disabled={showAlert}
						handleSelection={handleSelection} />
				</div>
				<Counter count={count} />
				<Button
					disabled={showAlert ? true : availableFiles ? false : true}
					buttonHandler={handleButton}>
					Download Selected
				</Button>
				{showAlert ? <AlertBox /> : false}
			</div>
		</section>
	)
}


const tableHeaderStyle = {
	display: 'grid',
	gridTemplateColumns: '50px 150px 200px 2fr 50px 100px',
	border: '1px solid lightgray',
	width: '100%',
	fontSize: 20,
	cursor: ''

}

const gridItem = {
	display: 'flex',
	alignItems: 'center',
	//   border: '1px solid lightgray',
	height: 60,
	'&:firstOfType': {
		justifyContent: 'center'
	}
}


export default TableHeader

