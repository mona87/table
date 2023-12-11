import { expect, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import TableRow from './TableRow'

describe('Table Row', () => {
  it('should render a list of files', () => {
    const { getAllByRole } = render(<TableRow />, { wrapper })
    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(3)
  })
})
