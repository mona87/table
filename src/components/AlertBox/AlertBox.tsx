import Button from "../Button/Button"
import { useTableContext } from '../../context/tableContext';

const AlertBox = () => {

	const { selectionStore, dispatch } = useTableContext();

	const handleButton = () => dispatch({type: 'TOGGLE_ALERT', payload: false})

	return (
		<div 
		role="alertdialog"
		aria-labelledby="alert box"
		aria-describedby="alert for available files"
		style={alertStyle}>
			<Button buttonHandler={handleButton}>Close</Button>
			<section>
				{selectionStore.filter(({ selected }) => selected === true)
					.filter(({ status }) => status === 'Available')
					.map(({ device, path, id }) => {
						return <div key={id}> <span>{device}</span><span>{path}</span></div>
					})}
			</section>
		</div>
	)
}

const alertStyle = {
	position: 'absolute' as 'absolute',
	margin: 'auto',
	top: 0, left: 0, bottom: 0, right: 0,
	height: 300,
	width: 600,
	border: '1px solid gray',
	borderRadius: 2,
	background: 'lightgray',
	boxShadow: '0 0 15px lightgray',
	padding: 20
}

export default AlertBox