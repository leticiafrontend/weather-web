import { useWeather } from 'hooks/Weather'

export const SwitchTemperatureUnit = () => {
  const { handleToggleUnit, temperatureUnit } = useWeather()

  return (
    <div className="inline-flex items-center">
      <p className="text-white">°F</p>
      <div className="inline-flex items-center px-6">
        <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
          <input
            id="switch-label"
            type="checkbox"
            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-amber-500 checked:bg-amber-500 peer-checked:border-amber-500 peer-checked:before:bg-amber-500"
            onChange={handleToggleUnit}
            checked={temperatureUnit === 'metric'}
          />
          <label
            htmlFor="switch-label"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-amber-500 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-amber-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-amber-500 peer-checked:before:bg-amber-500"
          >
            <div
              className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <p className="text-white">°C</p>
    </div>
  )
}
