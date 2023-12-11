
import { useRef, useEffect } from 'react';


const CheckBox = ({ selected, height, width, handleSelection, disabled }
	: {
		selected: boolean | string,
		height: number | string,
		width: number | string,
		disabled?: boolean,
		handleSelection?: () => void,
	}) => {

	const checkboxRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (checkboxRef.current) {
			if (selected === 'indeterminate') {
				checkboxRef.current.indeterminate = true
			} else if (selected === true) {
				checkboxRef.current.indeterminate = false
				checkboxRef.current.checked = true
			} else {
				checkboxRef.current.indeterminate = false
				checkboxRef.current.checked = false
			}
		}
	}, [selected])



	return (
		<label>
			<input
				role="checkbox"
				ref={checkboxRef}
				type="checkbox"
				style={checkboxStyle(height, width, disabled)}
				disabled={disabled}
				onChange={handleSelection} />
		</label>

	)
}

const checkboxStyle = (height: number | string, width: number | string, disabled?: boolean) => ({
	cursor: disabled ? 'not-allowed' : 'pointer',
	height,
	width
})

export default CheckBox;