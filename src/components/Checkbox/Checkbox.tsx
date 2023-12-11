import { useRef, useEffect } from 'react'
import { checkboxStyle } from './checkbox.css'

const CheckBox = ({
  selected,
  height,
  width,
  handleSelection,
  disabled,
}: {
  selected: boolean | string
  height: number | string
  width: number | string
  disabled?: boolean
  handleSelection?: () => void
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    //logic to show the three checkbox states
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
      id="table-checkbox"
      aria-checked={selected ? 'true' : !selected ? 'false' : 'mixed'}
      type="checkbox"
      aria-labelledby="checkbox"
      css={checkboxStyle(height, width, disabled)}
      disabled={disabled}
      onChange={handleSelection}
    />
  )
}

export default CheckBox
