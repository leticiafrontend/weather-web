import { createContext, useContext, useState } from 'react'

import { WeatherType } from 'types/index'

import {
  getCurrentWeatherByCoordinates,
  getCurrentWeatherByLocation,
} from 'core/requests'

import { WeatherContextData, WeatherProviderProps } from './types'

const WeatherContext = createContext({} as WeatherContextData)

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weather, setWeather] = useState<WeatherType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getInitialWeather = async () => {
    setLoading(true)

    navigator.geolocation.getCurrentPosition(
      async ({ coords }: GeolocationPosition) => {
        try {
          const response = await getCurrentWeatherByCoordinates(
            String(coords.latitude),
            String(coords.longitude),
          )

          setWeather(response)
        } catch {
          setError(true)
        } finally {
          setLoading(false)
        }
      },
      async () => {
        try {
          const response = await getCurrentWeatherByLocation('São Paulo')

          setWeather(response)
        } catch {
          setError(true)
        } finally {
          setLoading(false)
        }
      },
    )
  }

  const searchWeather = async (location: string) => {
    setLoading(true)

    try {
      const response = await getCurrentWeatherByLocation(location)

      setWeather(response)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <WeatherContext.Provider
      value={{ getInitialWeather, searchWeather, weather, loading, error }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  const context = useContext(WeatherContext)

  if (context === undefined) {
    throw new Error('WeatherContext must be used within a WeatherProvider"')
  }

  return context
}
