import { css } from '@emotion/react'

export const tableRowStyle = (isActive: boolean | string) =>
  css({
    display: 'grid',
    gridTemplateColumns: '50px 1fr 1fr 3fr 50px 100px',
    alignItems: 'center',
    border: '1px solid #d3d3d3',
    width: '100%',
    fontWeight: 300,
    backgroundColor: isActive ? '#d9d9d9' : 'transparent',
    height: 45,
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '& > div': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: 10,
    },
  })

export const overflow = css({
  overflowY: 'scroll',
})
