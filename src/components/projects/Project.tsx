import styled from "styled-components"
import Pic from "./Pic"
import Poster from "./Poster"
import Logo from "./Logo"
import Design from "./Design"

const Projects=()=>{
  
  
  
  
  const Wrapper = styled.section`
  height:88%;
  padding-top:5%;
  text-align:center;
  margin-left:-3rem;
  overflow:hidden;
  .container{
    margin:0 auto;
  }
  `
  return (
    <Wrapper className="container">
    <h3>Let's See</h3>
    <h2>Our Projects</h2>
    <Pic/>
    <Poster/>
    <Logo/>
    <Design/>
    </Wrapper>
    )
}
export default Projects