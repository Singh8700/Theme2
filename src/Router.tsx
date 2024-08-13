import {useState,useRef,useEffect} from "react"
import {
  useLocation,
  Routes,
  Route
} from "react-router-dom"
import Nav from "./components/nav/Nav"
import {About,Services,TextAnime,Contact,Projects,Error,Alerts} from "./Components"
import Home from "./components/home/Home"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"

const Router = () => {
  const location = useLocation()
  const path= location.pathname
  /*Alert componets Function */
const [alerts,setAlerts]=useState(null);
  const showAlert = (msg)=>{
    setAlerts(msg)
    setTimeout(()=>{
      setAlerts(null)
    },1500);
  }
    //locoMotive function
    const ref = useRef(null);
    const options = {
    smooth: true,
  }
  //Scroll Top event
  useEffect(()=>{
    window.scrollTo({top:0, behaviour:"smooth"})
  },[path])
  
  return (
    <main data-scroll-container ref={ref}>
      <Nav path={path}/>
      <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/services" element={<Services />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact showAlert={showAlert} />}/>
      <Route path="*" element={<Error />}/>
      </Routes>
      <Alerts msg={alerts}/>
  </main>
  )
}

export default Router