import './scss/app.scss'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router className="gradient">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

    </Router>
  )
}

export default App
