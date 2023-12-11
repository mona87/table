import { css } from '@emotion/react'

//styling for grid container
export const containerStyle = (showAlert: boolean, length: number) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid lightgray',
    maxWidth: 1200,
    width: '100%',
    height: length > 6 ? 450 : 'auto',
    boxShadow: '0 0 15px lightgray',
    background: '#ffffff',
    pointerEvents: showAlert ? 'none' : 'auto',
  })
