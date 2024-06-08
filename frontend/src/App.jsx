import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <>
    <div data-theme="acid">
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    </>
  )
}

export default App
