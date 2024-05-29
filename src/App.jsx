import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu"
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import './App.css'

function App() {
  

  return (
      <div className='App'>
        <Router>
        <Navbar/>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer/>
        </Router>
      </div>
  )
}

export default App
