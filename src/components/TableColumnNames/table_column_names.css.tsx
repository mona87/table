import { css } from '@emotion/react'

export const tableTitleStyle = css({
  display: 'grid',
  gridTemplateColumns: '50px 1fr 1fr 3fr 50px 100px',
  alignItems: 'center',
  border: '1px solid lightgray',
  width: '100%',
  fontSize: 18,
})

export const titleGridItem = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  height: 50,
  overflow: 'hidden',
  '& > span': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
