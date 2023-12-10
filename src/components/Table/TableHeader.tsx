import { useSelectionContext } from '../../tableContext';
import { useEffect } from 'react';
import CheckBox from "../Checkbox"
import Counter from "../Counter";
import AlertBox from '../AlertBox';
import Button from '../Button';

const TableHeader = () => {

	const { selectionStore, selectAll, showAlert, count, availableFiles, dispatch } = useSelectionContext()

	useEffect(() => {
		dispatch({type: 'UPDATE_SELECT_ALL'})
		dispatch({type: 'UPDATE_COUNT'})
		dispatch({type: 'UPDATE_AVAILABLE_FILES'})
	}, [selectionStore])

	const handleButton = () => {
		if(availableFiles) dispatch({type: 'TOGGLE_ALERT', payload: true})
	}

	const handleSelection = () => dispatch({type: 'UPDATE_CHECKBOX'})

	return (
		<section style={{ width: '100%' }}>
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

