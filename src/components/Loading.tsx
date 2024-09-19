const LoadingScreen = () => (
  <div className="fixed inset-0 flex space-x-2 justify-center items-center bg-black/5 z-50">
    <span className="sr-only">Loading...</span>
    <div className="h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="h-6 w-6 bg-white rounded-full animate-bounce"></div>
  </div>
)

export default LoadingScreen
