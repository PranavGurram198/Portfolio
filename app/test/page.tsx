export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Tailwind Test
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          If you see this styled with gradients, colors, and spacing - Tailwind is working!
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Button 1
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
            Button 2
          </button>
        </div>
      </div>
    </div>
  )
}