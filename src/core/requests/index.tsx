import { UnitEnum, WeatherType } from 'types/index'

import { api } from 'core/api'

const apiKey = import.meta.env.VITE_BASE_WEATHER_API_KEY

export const getCurrentWeatherByLocation = async (
  location: string,
  unit: UnitEnum,
): Promise<WeatherType> => {
  const response = await api.get<WeatherType>(
    `weather?q=${location}&appid=${apiKey}&units=${unit}`,
  )

  return response.data
}

export const getCurrentWeatherByCoordinates = async (
  lat: string,
  lon: string,
  unit: UnitEnum,
): Promise<WeatherType> => {
  const response = await api.get<WeatherType>(
    `weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`,
  )

  return response.data
}

export const getIcon = (iconName: string) => {
  return `https://openweathermap.org/img/wn/${iconName}@4x.png`
}

export const getBackground = (location: string) => {
  const formattedLocation = location.replaceAll(' ', '+')

  return `https://source.unsplash.com/1600x900/?${formattedLocation}`
}
