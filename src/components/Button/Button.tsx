import { buttonStyle, iconStyle, wrapperStyle } from './button.css'

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
    <div css={wrapperStyle}>
      {icon ? (
        <div css={iconStyle(disabled)}>
          <img src={icon} alt="button-icon" height={30} width={30} />
        </div>
      ) : (
        false
      )}
      <button
        type="button"
        tabIndex={0}
        aria-label={children}
        css={buttonStyle(disabled)}
        disabled={disabled}
        onClick={buttonHandler}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
