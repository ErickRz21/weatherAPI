import Search from './components/Search'
import Forecast from './components/Forecast'
import useForecast from './hooks/useForecast'
import LoadingScreen from './components/Loading'

const App = (): JSX.Element => {
  const {
    term,
    options,
    loading,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-cyan-400 to-rose-400 h-full md:h-[100vh] w-full">
      {loading && <LoadingScreen />}{' '}
      {/* Show loading screen when loading is true */}
      {!loading && forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
