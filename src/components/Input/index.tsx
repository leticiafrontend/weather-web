import Autocomplete from 'react-google-autocomplete'

import { useWeather } from 'hooks/Weather'

export const Input = () => {
  const { searchWeather } = useWeather()
  const apiKey = import.meta.env.VITE_BASE_GOOGLE_API

  return (
    <Autocomplete
      apiKey={apiKey}
      onPlaceSelected={place =>
        searchWeather(
          place?.address_components?.[0].long_name || place?.formatted_address,
        )
      }
      className="w-full rounded-lg p-3"
    />
  )
}
