import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from '../helpers'
import { forecastType } from '../types'
import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'
import Tile from './Tile'

type Props = {
  data: forecastType
}

// Function to handle page refresh
const handleRefresh = () => {
  window.location.reload()
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>0</sup>
  </span>
)

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
    // Background container
    <div
      className="w-full md:max-w-[500px] py-0 md:py-4 md:px-10 lg:px-24 h-screen lg:h-[875px]
      bg-white bg-opacity-20 lg:backdrop-blur-sm rounded lg:rounded-3xl lg:drop-shadow-sm"
    >
      <div className="mx-auto w-[300px] m-8 lg:m-2">
        <section className="text-center">
          {/* Flex container for the arrow and city name */}
          <div className="flex items-center justify-center">
            {/* Arrow Button */}
            <button
              onClick={handleRefresh}
              className="absolute left-8 lg:left-12 text-white hover:text-black font-bold
        py-2 rounded-xl text-sm ease-in-out duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* City Name */}
            <h2 className="text-3xl font-black mx-3">
              {data.name}
              <span className="font-thin"> {data.country}</span>
            </h2>
          </div>

          {/* Temperature and Weather Details */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold">
              <Degree temp={Math.round(today.main.temp)} />
            </h1>
            <p className="text-sm lg:text-base">
              {today.weather[0].main} {today.weather[0].description}
            </p>
            <p className="text-sm lg:text-base">
              H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{' '}
              <Degree temp={Math.floor(today.main.temp_min)} />
            </p>
          </div>
        </section>

        <section className="flex overflow-x-auto mt-4 pb-2 mb-5 -mx-10 lg:-mx-5 scroll-smooth scrollbar-hide">
          {data.list.map((item, i) => (
            <div
              className="inline-block text-center w-[65px] lg:w-[70px] flex-shrink-0"
              key={i}
            >
              <p className="text-sm lg:text-lg">
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-wrap justify-between text-zinc-700">
          <div
            className="w-[165px] text-xs lg:text-base font-bold flex flex-col items-center bg-white/20 
        lg:backdrop-blur-sm rounded-xl lg:drop-shadow-sm py-4 mb-2 lg:mb-5 -mx-5 lg:-mx-6 shadow"
          >
            <Sunrise /> <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div
            className="w-[165px] text-xs lg:text-base font-bold flex flex-col items-center bg-white/20 
        lg:backdrop-blur-sm rounded-xl lg:drop-shadow-sm py-4 mb-2 lg:mb-5 -mx-5 lg:-mx-6 shadow"
          >
            <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>

          {/* wind */}
          <Tile
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
          />
          {/* feels */}
          <Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels like ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'cooler'
                : 'warmer'
            }`}
          />
          {/* humidity */}
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity}%`}
            description={getHumidityValue(today.main.humidity)}
          />
          {/* pop */}
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 1000)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          {/* pressure */}
          <Tile
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={`${
              today.main.pressure < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          {/* visib */}
          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
        </section>
      </div>
    </div>
  )
}

export default Forecast
