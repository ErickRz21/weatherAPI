import Wind from './Icons/Wind'
import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Visibility from './Icons/Visibility'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon]
  return (
    <article
      className="w-[165px] h-auto text-zinc-700 bg-white/20 backdrop-blur-xl
     rounded-xl drop-shadow-xl p-2 mb-2 lg:mb-5 -mx-5 flex flex-col justify-between"
    >
      <div className="flex items-center text-sm lg:text-lg font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg lg:text-xl">{info}</h3>
      <p className="text-sm lg:text-md font-bold">{description}</p>
    </article>
  )
}

export default Tile
