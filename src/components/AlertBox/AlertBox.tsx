import {
  alertStyle,
  buttonStyle,
  titleStyle,
  innerStyle,
} from './alert_box.css'
import Button from '../Button/Button'
import { useTableContext } from '../../context/tableContext'

const AlertBox = () => {
  const { files, dispatch } = useTableContext()

  //closes the alert box
  const handleButton = () => dispatch({ type: 'TOGGLE_ALERT', payload: false })

  return (
    <div
      role="alertdialog"
      aria-labelledby="alert box"
      aria-describedby="alert for available files"
      css={alertStyle}
    >
      <div css={buttonStyle}>
        <Button buttonHandler={handleButton}>Close</Button>
      </div>
      <section css={innerStyle}>
        <div css={titleStyle}>Files available for download: </div>
        {files
          .filter(({ selected }) => selected === true)
          .filter(({ status }) => status === 'Available')
          .map(({ device, path, id }) => {
            return (
              <div key={id}>
                <span>{device}</span>
                <span>{path}</span>
              </div>
            )
          })}
      </section>
    </div>
  )
}

export default AlertBox
