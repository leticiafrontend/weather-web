import { fireEvent, render, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import { SwitchTemperatureUnit } from 'components/SwitchTemperatureUnit'

jest.mock('hooks/Weather', () => ({
  useWeather: jest.fn(() => ({
    temperatureUnit: 'metric',
  })),
}))

describe('<SwitchTemperature />', () => {
  it('Should toggles temperature unit when SwitchTemperatureUnit is clicked', async () => {
    const { container } = render(<SwitchTemperatureUnit />)

    const mockUseWeather = jest.fn()

    mockUseWeather.mockReturnValue({
      handleToggleUnit: jest.fn(),
    })

    require('hooks/Weather').useWeather = mockUseWeather()

    const switchToggle = container.querySelector('#switch-label')

    if (switchToggle) {
      fireEvent.click(switchToggle)

      waitFor(() => {
        expect(mockUseWeather).toHaveBeenCalledTimes(1)
      })
    }
  })
})
