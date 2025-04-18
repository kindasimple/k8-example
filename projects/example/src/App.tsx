import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://api.example.localhost:8000/api/hello')
        setMessage(response.data.message)
      } catch (error) {
        setMessage('Error fetching message')
        console.error('Error:', error)
      }
    }

    fetchMessage()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-center text-gray-600">
          {message}
        </p>
      </div>
    </div>
  )
}

export default App