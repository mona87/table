import { css } from '@emotion/react'


const Counter = ({ count }: { count: number }) => {
	return (
		<div css={counterStyle}>{count === 0 ? 'None Selected' : `Selected ${count}`}</div>
	)
}

const counterStyle = css({
	display: 'flex',
	alignItems: 'center'
})

export default Counter