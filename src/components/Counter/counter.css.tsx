import { css } from '@emotion/react'

export const counterStyle = css({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  '& > span': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
