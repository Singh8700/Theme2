
import RouterNav from "./Router"
import {ThemeProvider} from "styled-components"
import {Animation,TextAnime,MouseEvent,Maps,Footer} from "./Components"


const App=() =>{
  
  
  //console.log(path)
  
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
      <Animation/>
      <MouseEvent/>
      <TextAnime/>
      <RouterNav/>
      <Maps/>
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
