import { css } from '@emotion/react'

export const buttonStyle = (disabled?: boolean) =>
  css({
    display: 'flex',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: 18,
    background: 'transparent',
    border: 'none',
    alignItems: 'center',
  })

export const iconStyle = (disabled?: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
    width: 20,
    marginRight: 10,
  })

export const wrapperStyle = () =>
  css({
    display: 'flex',
    alignItem: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  })
