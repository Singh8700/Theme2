import Nav from "./components/nav/Nav"
import {
  useLocation,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import {ThemeProvider} from "styled-components"


function App() {
  const location = useLocation()
  const path= location.pathname
  console.log(path)
  const theme ={
    media:{
      tab:'780px',
      mobile:'660px',
      smallMobile:'480px'
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>

      <Nav path={path}/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<Services/>}/>
      <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
