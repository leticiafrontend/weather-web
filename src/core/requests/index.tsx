import { WeatherType } from 'types/index'

import { api } from 'core/api'

const apiKey = import.meta.env.VITE_BASE_WEATHER_API_KEY

export const getCurrentWeatherByLocation = async (
  location: string,
): Promise<WeatherType> => {
  const response = await api.get<WeatherType>(
    `weather?q=${location}&appid=${apiKey}&units=metric`,
  )

  return response.data
}

export const getCurrentWeatherByCoordinates = async (
  lat: string,
  lon: string,
): Promise<WeatherType> => {
  const response = await api.get<WeatherType>(
    `weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
  )

  return response.data
}

export const getIcon = (iconName: string) => {
  return `https://openweathermap.org/img/wn/${iconName}@4x.png`
}

export const getBackground = (location: string) => {
  const formatedLocation = location.replaceAll(' ', '+')

  return `https://source.unsplash.com/1600x900/?${formatedLocation}`
}
