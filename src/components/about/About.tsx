import styled from "styled-components"
import HeroSection from "../heroSection/HeroSection"
import {list,Qualification} from "./Qualification"
import { Link } from "react-router-dom";
import ImgGallery from "../imgGallery/ImgGallery"
import {frontEnd,Other} from "./Skills"
const About =()=>{
  const myData={
    title:"Frontend Skills",
    Api:frontEnd,
    width:"max-content",
    height:"max-content"
  }
  const myData2={
    title:"Other Skills",
    Api:Other,
    width:"max-content",
    height:"max-content"
  }
  const mySkills={
    title:"My Qualification",
    Api:Qualification,
    width:"max-content",
    height:"max-content"
  }
  const myAwad={
    title:"My Awads",
    Api:list,
    width:"max-content",
    height:"max-content"
  }
  const Wrapper=styled.section`
  width:90%;
  text-align:center;
  overflow-x: hidden;
  padding-left:5%;
  padding-top:5%;
  margin:auto;
 .container{
   width:80%;
   overflow-x: hidden;
 }
  .aboutMe{
    flex-direction:column;
    text-align:left;
    padding-left:20em;
    p{
      font-size:2rem;
      overflow-x: hidden;
    }
    .highlights{
      color:var(--color-primary);
      font-size:3rem;
      overflow-x: hidden;
    }
    button{
      font-size:3rem;
      overflow-x: hidden;
    }
  }
  .content{
    width:100vw;
    margin:auto;
  }
 `
  return (
    <Wrapper className="container">
      <h3>Let's Do</h3>
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
      <HeroSection myData={myAwad}/>
      <HeroSection myData={mySkills}/>
       <HeroSection myData={myData}/>
       <HeroSection myData={myData2}/>
     </div>
    </Wrapper>
    )
}
export default About