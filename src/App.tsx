import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from '@/pages/Create'
import Menu from '@/pages/Menu/'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
