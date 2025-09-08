
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import { Route, Routes } from 'react-router-dom';
import Courses from './Pages/Courses';
import Plans from './Pages/Plans';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/courses' element={<Courses />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
