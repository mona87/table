import { useSelectionContext } from '../../tableContext';
import { useEffect } from 'react';
import CheckBox from "../Checkbox"
import Counter from "../Counter";
import AlertBox from '../AlertBox';
import Button from '../Button';
import useHook from "../../customHooks";

const TableHeader = () => {

	const { selectionStore, selectAll, showAlert, } = useSelectionContext()
	const { toggleAlert, updateSelectAll, updateCheckbox, handleCounter, getAvailableFiles } = useHook()

	useEffect(() => {
		updateSelectAll()
	}, [selectionStore])

	const handleButton = () => {
		const files = getAvailableFiles().length;
		if (files) toggleAlert(true)
	}

	return (
		<section style={{ width: '100%' }}>
			<div style={tableHeaderStyle}>
				<div style={gridItem}>
					<CheckBox
						selected={selectAll}
						height={20}
						width={20}
						disabled={showAlert}
						handleSelection={updateCheckbox} />
				</div>
				<Counter count={handleCounter()} />
				<Button
					disabled={showAlert ? true : getAvailableFiles().length ? false : true}
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
	gridTemplateColumns: '50px 150px 200px 2fr 30px 100px',
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

