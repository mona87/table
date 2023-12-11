import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import Counter from './Counter'

describe('Counter', () => {
  it('should should show "None Selected" when no files are selected', async () => {
    render(<Counter count={0} />, { wrapper })
    expect(screen.getByText(/None Selected/)).toBeInTheDocument()
  })
  it('should should show the number of files selected', async () => {
    render(<Counter count={5} />, { wrapper })
    expect(screen.getByText(/Selected 5/)).toBeInTheDocument()
  })
})
