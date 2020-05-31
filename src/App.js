import React from 'react'
import StatCard from './component/StatCard'
import { defaultUser } from './people'

function App() {
  const person = defaultUser
  return (
    <div className="App">
      <StatCard person={person || defaultUser} />
    </div>
  )
}

export default App
