import Home from 'pages/Home'

import { WeatherProvider } from 'hooks/Weather'

export default function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  )
}
