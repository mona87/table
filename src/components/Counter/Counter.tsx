

const Counter = ({ count }: { count: number }) => {
	return (
		<div style={counterStyle}>{count === 0 ? 'None Selected' : `Selected ${count}`}</div>
	)
}

const counterStyle = {
	display: 'flex',
	alignItems: 'center'
}

export default Counter