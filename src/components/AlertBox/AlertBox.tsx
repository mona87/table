import { css } from '@emotion/react'
import Button from "../Button/Button"
import { useTableContext } from '../../context/tableContext';

const AlertBox = () => {

	const { selectionStore, dispatch } = useTableContext();

	const handleButton = () => dispatch({type: 'TOGGLE_ALERT', payload: false})

	return (
		<div 
		role="alertdialog"
		aria-labelledby="alert box"
		aria-describedby="alert for available files"
		css={alertStyle}>
			<div css={buttonStyle}>
			<Button buttonHandler={handleButton}>Close</Button>

			</div>
			<section css={innerStyle}>
				<div css={titleStyle}>Files available for download: </div>
				{selectionStore.filter(({ selected }) => selected === true)
					.filter(({ status }) => status === 'Available')
					.map(({ device, path, id }) => {
						return <div key={id}> <span>{device}</span><span>{path}</span></div>
					})}
			</section>
		</div>
	)
}

const alertStyle = css({
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	margin: 'auto',
	top: 0, left: 0, bottom: 0, right: 0,
	height: 270,
	width: 600,
	border: '2px solid #808080',
	borderRadius: 5,
	background: '#e5e4e2',
	boxShadow: '0 0 15px #d3d3d3',
	padding: '10px 15px 15px 15px',
	pointerEvents: 'auto'
})

const buttonStyle = css({
	display: 'flex',
	justifyContent: 'flex-end',
	width: 50,
    alignSelf: 'flex-end',
	color: '#ffffff',
	marginBottom: 10,
})

const titleStyle = css({
	fontWeight: 400,
	fontSize: 18,
	textAlign: 'center',
	marginBottom: 10
})

const innerStyle = css({
	display: 'flex',
	flexDirection: 'column',
	fontSize: 15,
	padding: 20,
	borderRadius: 5,
	background: '#ffffff',
	height: '100%',
	overflowY: 'scroll',
	'& > div':{
		padding: '5px 0'
	},
	'& > div:not(first-of-type)':{
		justifyContent: 'center',
	}
})

export default AlertBox