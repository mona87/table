import { css } from '@emotion/react'

export const tableHeaderStyle = css({
  display: 'grid',
  gridTemplateColumns: '50px 140px 200px 2fr 50px 100px',
  border: '1px solid #d3d3d3',
  width: '100%',
  fontSize: 20,
  cursor: '',
})

export const gridItem = css({
  display: 'flex',
  alignItems: 'center',
  height: 60,
})
