import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import TableColumnNames from './TableColumnNames'

describe('Table Columns', () => {
  it('should render column names in the table header', () => {
    render(<TableColumnNames />, { wrapper })
    expect(screen.getByText(/Cars/)).toBeInTheDocument()
    expect(screen.getByText(/Planes/)).toBeInTheDocument()
    expect(screen.getByText(/Trucks/)).toBeInTheDocument()
    expect(screen.getByText(/Boats/)).toBeInTheDocument()
  })
})
