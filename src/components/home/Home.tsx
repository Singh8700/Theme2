import ImgGallery from "../imgGallery/ImgGallery"
import {useEffect } from "react"
import "./home.css"

import {gsap} from "gsap"

import CV from "./CV"
import TutorServices from "../services/TutorServices"
import Certificate from "../certificate/Certificate"

const Home =()=>{
  useEffect(()=>{

   const timeLine = gsap.timeline()
    timeLine.from(".textHighlight > *",{
      y:5,
      x:5,
      opacity:1,
      duration:2,
      delay: -1,
      stagger: 0.5
    })
  },[])
  
  return (
    <>
    
    <div id="home" className="heroContainer flex">

    <div className="textSection">
    <div className="textHighlight">
    <h2 className="subDep">
    Hello,
    </h2>
    <h1>
     Rohit Kumar
    </h1>
    <h2 className="subDep">
    I'm Web-Designer & DCA Tutor.
    </h2>
    <p className="subDetails">
    I'm a freelance at the time.
    </p>
    <p className="subDetails">
    I'm currently DCA tutor in RIIT EDUCATION INSTITUTE.My speciality is I have giving my 99% + excellent works.
    </p>
    <CV/>
    </div>
    </div>
    <div  className="imgSection">
    <ImgGallery/>
    </div>
    </div>
    <div className="extra">
    <Certificate/>
    <TutorServices/>
    </div>
    </>
    )
}
export default Home