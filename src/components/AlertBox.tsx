import Button from "./Button"
import { useSelectionContext } from '../tableContext';
import useHook from "../customHooks";

const AlertBox = () => {

	const { selectionStore } = useSelectionContext();
	const { toggleAlert } = useHook()

	const handleButton = () => {
		toggleAlert(false)
	}

	return (
		<div style={alertStyle}>
			<Button buttonHandler={handleButton}>X</Button>
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