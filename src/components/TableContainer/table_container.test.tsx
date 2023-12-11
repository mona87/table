import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableContext } from '../../context/types'
import TableContainer from './TableContainer'
import mockData from '../../tests/mockData'

export const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <TableContext.Provider value={mockData}>{children}</TableContext.Provider>
  )
}

describe('Table Container', () => {
  it('should render a table', () => {
    render(<TableContainer />, { wrapper })
    expect(screen.getByTestId('table-header')).toBeInTheDocument()
    expect(screen.getByTestId('table-column')).toBeInTheDocument()
    expect(screen.getByTestId('table-row')).toBeInTheDocument()
  })
})
