import { expect, describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import Button from './Button'
import { userEvent } from '@testing-library/user-event'

describe('Button', () => {
  it('should should render a button', () => {
    render(<Button>This is a button </Button>, { wrapper })
    expect(screen.getByText(/This is a button/)).toBeInTheDocument()
  })

  it('should handle a function when clicked', async () => {
    const dispatch = vi.fn(() => ({ type: 'TOGGLE_ALERT', payload: true }))
    render(<Button buttonHandler={dispatch}>test</Button>, { wrapper })
    await userEvent.click(screen.getByRole('button'))
    expect(dispatch).toHaveBeenCalledTimes(1)
  })
})
