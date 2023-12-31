import ImgGallery from "../imgGallery/ImgGallery"
import {useEffect } from "react"
import "./home.css"

import {gsap} from "gsap"

import CV from "./CV"
import TutorServices from "../services/TutorServices"
import Certificate from "../certificate/Certificate"
import Education from "../about/Education"
import Award from "../about/Awad"
import Pic from "../projects/Pic"
import FrontEnd from "../about/FrontEnd"

const Home =()=>{
  
  useEffect(()=>{
   const timeLine = gsap.timeline()
    timeLine.from(".textHighlight > *",{
      x:30,
      y:50,
      opacity:0,
      duration:2,
      delay: -1,
      stagger: 0.5
    })
  },[])
  
  return (
    <>
    
    <div id="home" className="heroContainer flex">

    <div className="textSection contents" data-scroll-section>
    <div className="textHighlight">
    <h2 className="subDep transformX">
    Hello,
    </h2>
    <h1 className="anim">
     Rohit <span className="highlights">Kumar</span>
    </h1>
    <h2 className="subDep">
    I'm Web-Designer & DCA Tutor.
    </h2>
    <p className="subDetails">
    I'm a freelance at the time.
    </p>
    <p className="subDetails">
    I'm currently DCA tutor in RIIT EDUCATION INSTITUTE.<br/>
    My speciality is I have giving my 99% + excellent works.
    </p>
    <CV/>
    </div>
    </div>
    <div  className="imgSection">
    <ImgGallery/>
    </div>
    </div>
    <div className="extra">
      <Education/>
      <Award/>
      <FrontEnd/>
      <Certificate/>
      <Pic/>
    </div>
    </>
    )
}
export default Home