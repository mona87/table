import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableTitle from './TableTitle';

const TableContainer = () => {

	return (
		<div style={containerStyle}>
			<TableHeader />
			<TableTitle />
			<TableRow />
		</div>
	)
}

//styling for grid container
const containerStyle = {
	display: 'flex',
	flexDirection: 'column' as 'column',
	// gridTemplateRows: '1fr 1fr',
	border: '1px solid lightgray',
	maxWidth: 1200,
	height: 500,

}


export default TableContainer