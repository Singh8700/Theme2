import {useState, useRef , useEffect} from "react"
import Nav from "./components/nav/Nav"
import {
  useLocation,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Maps from "./components/maps/Maps"
import MouseEvent from "./components/mouse/MouseEvent"
import Animation from "./Animation"
import Services from "./components/services/Services"
import Projects from "./components/projects/Project"
import {ThemeProvider} from "styled-components"
import Error from "./components/error/Error"
import About from "./components/about/About"
import TextAnime from "./components/texts/TextAnime"
import Contact from "./components/contact/Contact"
import Alerts from "./components/alerts/Alerts"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"


const App=() =>{
  const ref = useRef(null);
  const options = {
    smooth: true,
  }
  const location = useLocation()
  
  const path= location.pathname
  //console.log(path)
  useEffect(()=>{
    window.scrollTo({top:0, behaviour:"smooth"})
  },[path])
  
  
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
    <LocomotiveScrollProvider options={options} containerRef={ref}>
    <main data-scroll-container ref={ref}>
      <Animation/>
      <MouseEvent/>
      <TextAnime/>
      <Alerts msg={alerts}/>
      <Nav path={path}/>
      <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/services" element={<Services data-scroll-section/>}/>
      <Route path="/about" element={<About data-scroll-section/>}/>
      <Route path="/projects" element={<Projects data-scroll-section/>}/>
      <Route path="/contact" element={<Contact showAlert={showAlert} data-scroll-section/>}/>
      <Route path="*" element={<Error data-scroll-section/>}/>
      </Routes>
      <Maps/>
      <Footer/>
      </main>
      </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App
