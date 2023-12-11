import { css } from '@emotion/react'
import { useTableContext } from '../../context/tableContext';

const TableColumnNames = () => {

	const { columnNames } = useTableContext();

	return (
		<div data-testid="table-column" css={tableTitleStyle}>
			{columnNames.map((name, i) => {
				return <div key={i} css={titleGridItem}>{name}</div>
			})}
		</div>
	)
}


const tableTitleStyle = css({
	display: 'grid',
	gridTemplateColumns: '50px 1fr 1fr 3fr 50px 100px',
	alignItems: 'center',
	border: '1px solid lightgray',
	width: '100%',
	fontSize: 18

})

const titleGridItem = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'start',
	height: 50
})


export default TableColumnNames;