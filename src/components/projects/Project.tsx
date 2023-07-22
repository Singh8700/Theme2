import styled from "styled-components"
import {Pic,Poster,Logos,Design} from "./projectApi"
import HeroSection from "../heroSection/HeroSection"

const Projects=()=>{
  const projectApi={
    title:"Live Projects",
    Api:Pic,
    width:"300px",
    height:"auto"
  }
  const posterApi={
    title:"Poster Projects",
    Api:Poster,
    width:"300px",
    height:"auto"
  }
  const logoApi={
    title:"logo Projects",
    Api:Logos,
    width:"300px",
    height:"auto"
  }
  const designApi={
    title:"Demo Design Projects",
    Api:Design,
    width:"300px",
    height:"auto"
  }
  const Wrapper = styled.section`
  width:100%;
  height:88%;
  padding-top:5%;
  text-align:center;
  .container{
    margin:0 auto;
  }
  `
  return (
    <Wrapper className="container">
    <h3>Let's See</h3>
    <h2>Our Projects</h2>
    <div className="container">
    <HeroSection myData={projectApi}/>
    <HeroSection myData={posterApi}/>
    <HeroSection myData={logoApi}/>
    <HeroSection myData={designApi}/>  
    </div>
    </Wrapper>
    )
}
export default Projects