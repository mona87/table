import { css } from '@emotion/react'

export const alertStyle = css({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 270,
  maxWidth: 600,
  border: '2px solid #808080',
  borderRadius: 5,
  background: '#e5e4e2',
  boxShadow: '0 0 15px #d3d3d3',
  padding: '10px 15px 15px 15px',
  pointerEvents: 'auto',
})

export const buttonStyle = css({
  display: 'flex',
  justifyContent: 'flex-end',
  width: 50,
  alignSelf: 'flex-end',
  color: '#ffffff',
  marginBottom: 10,
})

export const titleStyle = css({
  fontWeight: 400,
  fontSize: 18,
  textAlign: 'center',
  marginBottom: 10,
})

export const innerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  fontSize: 15,
  padding: 20,
  borderRadius: 5,
  background: '#ffffff',
  height: '100%',
  overflowY: 'scroll',
  '& > div': {
    padding: '5px 0',
    wordWrap: 'break-word',
  },
  '& > div:not(first-of-type)': {
    justifyContent: 'center',
  },
})
