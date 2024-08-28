
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Properties from './Component/Properties/Properties'
import PropertiesDetails from './Component/PropertiesDetails/PropertiesDetails'
import ContactUs from './Component/ContactUs/ContactUs'
import NavBar from './Component/NavBar/NavBar'
import Footer from './Component/Footer/Footer'

function App() {


  return (
    <>
   <NavBar/>
   <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/Properties' element={ <Properties/>}/>
    <Route path='/PropertyDetails' element={ <PropertiesDetails/>}/>
    <Route path='/ContactUs' element={ <ContactUs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
