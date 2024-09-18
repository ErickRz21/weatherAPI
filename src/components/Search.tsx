import { ChangeEvent } from 'react'
import { optionType } from './../types'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-cyan-400 to-rose-400 h-[93vh] md:h-[100vh] w-full">
      <section
        className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full
       lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded lg:rounded-3xl drop-shadow-lg text-zinc-700"
      >
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm lg:text-base mt-2">
          Enter a city name to get the weather forecast
        </p>

        <div className="relative flex mt-5 ">
          <input
            type="text"
            value={term}
            className="px-2 py-1 border-2 border-white text-sm lg:text-base rounded-l-lg"
            onChange={onInputChange}
          />

          <ul className="absolute top-9 bg-white ml-1 rounded-b-lg ">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button
                  className="text-left text-sm lg:text-base w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="rounded-r-lg border-2 border-zinc-100 hover:border-zinc-500
         hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer duration-300 ease-linear"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
