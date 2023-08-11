import './scss/app.scss'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {


  return (
    <Router className="gradient">
      <Navbar />
        <AnimatedRoutes />
      <Footer/>
    </Router>
  )
}

export default App
