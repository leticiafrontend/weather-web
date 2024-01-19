export const Error = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center bg-black gap-4">
      <h1 className="font-semibold text-white text-3xl">Error</h1>
      <p className="text-white">Try again</p>
      <button
        className="bg-white rounded-lg px-4 py-2 mt-8"
        onClick={handleReload}
      >
        Reload
      </button>
    </div>
  )
}
