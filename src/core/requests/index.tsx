import { api } from 'core/api'

import { WeatherResponseType } from './types'

const apiKey = import.meta.env.VITE_BASE_WEATHER_API_KEY

export const getCurrentWeather = async (
  location: string,
): Promise<WeatherResponseType> => {
  const response = await api.get<WeatherResponseType>(
    `weather?q=${location}&appid=${apiKey}&units=metric`,
  )

  return response.data
}

export const getIcon = (iconName: string) => {
  return `https://openweathermap.org/img/wn/${iconName}@4x.png`
}
