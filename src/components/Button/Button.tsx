
const Button = ({ children, disabled, buttonHandler }: {
  children: string;
  disabled?: boolean;
  buttonHandler?: () => void;
}
) => {

  return (
  <button 
    type="button"
    tabIndex={0}
    aria-label={children}
    style={buttonStyle(disabled)} 
    disabled={disabled} 
    onClick={buttonHandler}>
    {children}
  </button>
  )
}

const buttonStyle = (disabled?: boolean) => ({
  cursor: disabled ? 'not-allowed' : 'pointer'
})


export default Button