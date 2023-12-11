import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wrapper } from '../TableContainer/table_container.test'
import { userEvent } from '@testing-library/user-event'
import CheckBox from './Checkbox'

describe('Checkbox', () => {
  it('should check a checkbox', async () => {
    render(<CheckBox height={20} width={20} selected={false} />, { wrapper })
    expect(screen.queryByRole('checkbox')).not.toBeChecked()
    await userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('should uncheck a checkbox', async () => {
    render(<CheckBox height={20} width={20} selected={true} />, { wrapper })
    expect(screen.queryByRole('checkbox')).toBeChecked()
    await userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })
})
