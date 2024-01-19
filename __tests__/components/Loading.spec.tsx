import { render } from '@testing-library/react'

import { Loading } from 'components/Loading'

describe('<Loading />', () => {
  it('Should render loading', () => {
    const { getByText } = render(<Loading />)

    expect(getByText(/Loading.../i)).toBeInTheDocument()
  })
})
