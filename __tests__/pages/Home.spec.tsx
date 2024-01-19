import { render } from '@testing-library/react'

import '@testing-library/jest-dom'
import Home from 'pages/Home'

jest.mock('core/requests', () => ({
  VITE_BASE_WEATHER_API_KEY: 'http://mocked-base-url',
  getBackground: jest.fn(),
  getIcon: jest.fn(),
}))

jest.mock('hooks/Weather', () => ({
  useWeather: jest.fn(() => ({
    weather: {
      name: 'Curitiba',
      sys: { country: 'Brazil' },
      weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
      main: {
        temp: 25,
        feels_like: 26,
        temp_min: 22,
        temp_max: 28,
        humidity: 50,
      },
      wind: { speed: 10 },
    },
    getInitialWeather: jest.fn(),
    loading: false,
    error: false,
    temperatureUnit: 'metric',
  })),
}))

jest.mock('components/input', () => ({
  VITE_BASE_GOOGLE_API: 'http://mocked-base-url',
  Input: jest.fn().mockImplementation(() => {
    return <div>Mocked Input Component</div>
  }),
}))

describe('<Home />', () => {
  it('Should renders Home component with mock data', () => {
    const { getByText } = render(<Home />)

    expect(getByText(/Curitiba, Brazil/i)).toBeInTheDocument()
    expect(getByText(/25°C/i)).toBeInTheDocument()
    expect(getByText(/clear, clear sky/i)).toBeInTheDocument()
  })
})
