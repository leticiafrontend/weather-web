import { ReactNode } from 'react'
import { WeatherType } from 'types/index'

export type WeatherContextData = {
  getInitialWeather: () => void
  searchWeather: (location: string) => void
  weather: WeatherType | null
  loading: boolean
  error: boolean
}

export type WeatherProviderProps = {
  children: ReactNode
}
