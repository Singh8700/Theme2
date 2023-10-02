import styled from "styled-components"
import HeroSection from "../heroSection/HeroSection"
import Certificate from "../certificate/Certificate"
import { Link } from "react-router-dom";
import Award from "./Awad"
import Education from "./Education"
import FrontEnd from "./FrontEnd"
import Other from "./Other"
import ImgGallery from "../imgGallery/ImgGallery"

const About =()=>{
  
  const Wrapper=styled.section`
  width:100vw;
  text-align:center;
  overflow-x: hidden;
  padding-top:5%;
  margin:auto;
 .container{
   width:80%;
   overflow-x: hidden;
 }
  .aboutMe{
    flex-direction:column;
    text-align:left;
    padding-left:15em;
    p{
      font-size:2rem;
      overflow-x: hidden;
      padding-left:10%;
    }
    .highlights{
      color:var(--color-primary);
      font-size:3rem;
      overflow-x: hidden;
    }
    button{
      font-size:3rem;
      overflow-x: hidden;
      margin-bottom:2rem;
    }
  }
  .content{
    width:100vw;
    margin:auto;
  }
  @media(max-width:${({theme})=>theme.media.mobile}){
  padding-left:0%;
    .aboutMe{
      button{
        font-size:2rem;
      }
    }
  }
 `
  return (
    <Wrapper className="container">
      <h3 className="h3">Let's Do</h3>
      <h2>About Me</h2>
      <div className="aboutMe container flex">
       <p className="scale">
        <span className="highlights">
        H
        </span>i, I am 
         <span className="highlights">
        R
        </span>ohit.
        <br/>I am currently doing my internship as a tutor for the DCA course. Before this,I have also worked as a computer operator in Covid-19 at the Vaccination Center. 
        <br/>
         I love to Learn programming language and also taught some programming languages like: Python (Only Basic),HTML, CSS, JS, some Css Frameworks & librarys, some JS librarys.  now I'm learning React JS and i have understood little bit of Python Django.
         <br/>
         I currently live in Delhi and have completed all my education from Delhi. I started my programming journey from my phone and learned as much as I could from my phone.
         
        </p>
        <Link to="/contact" relative="path">
        <br/>
        <button className="btn">Send Me</button>
     </Link>
    </div>
    <div className="content">
    <Certificate/>
     <Award/>
     <Education/>
     <FrontEnd/>
     <Other/>
     </div>
    </Wrapper>
    )
}
export default About