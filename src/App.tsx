import Nav from "./components/nav/Nav"
import {
  useLocation,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/home/Home"
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
      
      </Routes>

      </ThemeProvider>
    </>
  )
}

export default App
