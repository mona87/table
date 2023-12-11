import { css } from '@emotion/react'
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import TableTitle from '../TableColumnNames/TableColumnNames';
import {useTableContext} from '../../context/tableContext'


const TableContainer = () => {
	const { showAlert } = useTableContext()

	return (
		<div  role="table" aria-label='table component' css={containerStyle(showAlert)}>
			<TableHeader />
			<TableTitle />
			<TableRow />
		</div>
	)
}

//styling for grid container
const containerStyle = (showAlert: boolean) => css({
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid lightgray',
	maxWidth: 1200,
	width: '100%',
	// height: 395,
	boxShadow: '0 0 15px lightgray',
	background: '#ffffff',
	pointerEvents: showAlert ? 'none' : 'auto'
})


export default TableContainer