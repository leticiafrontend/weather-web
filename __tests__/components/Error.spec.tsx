import { render } from '@testing-library/react'

import { Error } from 'components/Error'

describe('<Erro />', () => {
  it('Should render error message', () => {
    const { getByRole, getByText } = render(<Error />)

    expect(getByRole('heading', { name: /error/i })).toBeInTheDocument()
    expect(getByText(/try again/i)).toBeInTheDocument()
    expect(getByRole('button', { name: /reload/i })).toBeInTheDocument()
  })
})
