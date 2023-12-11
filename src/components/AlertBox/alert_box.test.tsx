import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import AlertBox from './AlertBox'

describe('AlertBox', () => {
  it('should should render and Alert', () => {
    render(<AlertBox />, { wrapper })
    expect(screen.getByRole('alertdialog')).toBeInTheDocument()
  })
  it('should should show the path and device for a file', () => {
    render(<AlertBox />, { wrapper })
    expect(screen.getByText(/apple/)).toBeInTheDocument()
    expect(screen.getByText(/documents\/folder/)).toBeInTheDocument()
  })
})
