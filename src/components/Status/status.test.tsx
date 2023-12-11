import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import Status from './Status'

describe('Status', () => {
  it('should show active status if file is available ', async () => {
    render(<Status type={'active'} />, { wrapper })
    expect(screen.getByLabelText('active')).toBeInTheDocument()
  })

  it('should show no status if file is unavailable ', async () => {
    render(<Status type={''} />, { wrapper })
    expect(screen.getByLabelText('')).toBeInTheDocument()
  })
})
