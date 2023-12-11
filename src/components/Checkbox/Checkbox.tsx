
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
		<input
			tabIndex={0}
			ref={checkboxRef}
			aria-checked={selected ? 'true' : !selected ? 'false' : 'mixed'}
			type="checkbox"
			aria-labelledby="checkbox"
			style={checkboxStyle(height, width, disabled)}
			disabled={disabled}
			onChange={handleSelection} />


	)
}

const checkboxStyle = (height: number | string, width: number | string, disabled?: boolean) => ({
	cursor: disabled ? 'not-allowed' : 'pointer',
	height,
	width
})

export default CheckBox;