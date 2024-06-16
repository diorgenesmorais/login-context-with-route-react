import './App.css'
import { Chat } from './components/Chat'
import Login from './components/Login'
import { RequireAuth } from './components/RequireAuth'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='bg-gray-800'>
      <Routes>
        <Route path='/chat' element={<RequireAuth children={<Chat />} />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
