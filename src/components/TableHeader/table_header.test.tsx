import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import TableHeader from './TableHeader'

describe('Table Header', () => {
  it(' should render a download button', async () => {
    render(<TableHeader />, { wrapper })
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/Download Selected/)).toBeInTheDocument()
  })

  it('should render a select-all checkbox', async () => {
    render(<TableHeader />, { wrapper })
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/Selected 1/)).toBeInTheDocument()
  })
})
