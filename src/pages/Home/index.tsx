import { useEffect } from 'react'

import { Error } from 'components/Error'
import { Loading } from 'components/Loading'
import { getBackground, getIcon } from 'core/requests'
import { useWeather } from 'hooks/Weather'
import { getDate } from 'utils/getDate'

const Home = () => {
  const { weather, getInitialWeather, loading, error } = useWeather()

  useEffect(() => {
    getInitialWeather()
  }, [])

  if (loading) return <Loading />

  if (!weather || error) return <Error />

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${getBackground(weather.name)})` }}
    >
      <div className="w-full h-full top-0 right-0 absolute bg-black opacity-85"></div>
      <div className="w-full h-full max-h-fit rounded-lg p-8 max-w-96 bg-black shadow z-10 m-4">
        <input
          className="w-full rounded-lg p-3"
          type="text"
          placeholder="Enter a City"
        />
        <h1 className="text-white font-semibold text-4xl py-6">
          {weather?.name}, {weather?.sys?.country}
        </h1>
        <hr className="border-white" />
        <p className="text-white text-center pt-4">{getDate()}</p>
        <p className="text-white text-center">
          {weather?.weather?.[0].main}, {weather?.weather?.[0].description}
        </p>
        <div className="flex justify-center items-center">
          <img
            src={getIcon(weather?.weather?.[0].icon)}
            className="h-36 w-36"
          />
          <div>
            <p className="text-white text-5xl">
              {Math.round(weather?.main?.temp)}°C
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-white text-2xl">
                {Math.round(weather?.main?.feels_like)}°C
              </p>
              <p className="text-white">Feels like</p>
            </div>
            <div className="text-center">
              <p className="text-white text-2xl">
                {Math.round(weather?.main?.temp_min)}°C
              </p>
              <p className="text-white">Min</p>
            </div>
            <div className="text-center">
              <p className="text-white text-2xl">
                {Math.round(weather?.main?.temp_max)}°C
              </p>
              <p className="text-white">Max</p>
            </div>
          </div>
          <hr className="border-white my-4" />
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-white">
                {Math.round(weather?.main?.humidity)}%
              </p>
              <p className="text-white">Humidity</p>
            </div>
            <div className="text-center">
              <p className="text-white">{weather?.wind?.speed} km/h</p>
              <p className="text-white">Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
