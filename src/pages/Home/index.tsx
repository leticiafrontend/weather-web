import { useEffect } from 'react'

import { getCurrentWeather } from 'core/requests'

const Home = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await getCurrentWeather('33.44', '94.04')

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    test()
  }, [])
  return (
    <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
  )
}

export default Home
