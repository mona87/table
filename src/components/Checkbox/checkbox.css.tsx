import { css } from '@emotion/react'

export const checkboxStyle = (
  height: number | string,
  width: number | string,
  disabled?: boolean
) =>
  css({
    cursor: disabled ? 'not-allowed' : 'pointer',
    height,
    width,
  })
