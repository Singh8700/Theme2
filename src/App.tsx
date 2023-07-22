import {useState} from "react"
import Nav from "./components/nav/Nav"
import {
  useLocation,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Maps from "./components/maps/Maps"
import Animation from "./Animation"
import Services from "./components/services/Services"
import Projects from "./components/projects/Project"
import {ThemeProvider} from "styled-components"
import Error from "./components/error/Error"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Alerts from "./components/alerts/Alerts"
const App=() =>{
  const location = useLocation()
  const path= location.pathname
  //console.log(path)
  const [alerts,setAlerts]=useState(null);
  const theme ={
    media:{
      tab:'780px',
      mobile:'660px',
      smallMobile:'480px'
    }
  }
  const showAlert = (msg)=>{
    setAlerts(msg)
    setTimeout(()=>{
      setAlerts(null)
    },1500);
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <Animation/>
      <Alerts msg={alerts}/>
      <Nav path={path}/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact showAlert={showAlert}/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      <Maps/>
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
