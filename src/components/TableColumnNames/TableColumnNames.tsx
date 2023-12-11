import { useTableContext } from '../../context/tableContext';

const TableColumnNames = () => {

	const { columnNames } = useTableContext();

	return (
		<div data-testid="table-column" style={tableTitleStyle}>
			{columnNames.map((name, i) => {
				return <div key={i} style={titleGridItem}>{name}</div>
			})}
		</div>
	)
}


const tableTitleStyle = {
	display: 'grid',
	gridTemplateColumns: '50px 150px 200px 2fr 50px 100px',
	alignItems: 'center',
	border: '1px solid lightgray',
	width: '100%',
	fontSize: 18

}

const titleGridItem = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'start',
	height: 50

}


export default TableColumnNames;