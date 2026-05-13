import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Project from './pages/Project'
import './App.css'



function App() {


  return (
    <>
    <Router >
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/project' element={<Project />}/>
      </Routes>
    </Router>

    </>
  )
}

export default App