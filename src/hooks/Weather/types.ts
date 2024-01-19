import { ReactNode } from 'react'
import { WeatherType } from 'types/index'

export type WeatherContextData = {
  getInitialWeather: () => void
  weather: WeatherType
  loading: boolean
  error: boolean
}

export type WeatherProviderProps = {
  children: ReactNode
}
