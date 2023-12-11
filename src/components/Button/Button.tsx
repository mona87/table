import { buttonStyle, iconStyle } from './button.css'

const Button = ({
  children,
  disabled,
  icon,
  buttonHandler,
}: {
  children: string
  icon?: string
  disabled?: boolean
  buttonHandler?: () => void
}) => {
  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={children}
      css={buttonStyle(disabled)}
      disabled={disabled}
      onClick={buttonHandler}
    >
      {icon ? (
        <div css={iconStyle(disabled)}>
          <img src={icon} alt="button-icon" height={30} width={30} />
        </div>
      ) : (
        false
      )}
      {children}
    </button>
  )
}

export default Button
