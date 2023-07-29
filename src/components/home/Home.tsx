import ImgGallery from "../imgGallery/ImgGallery"
import { useRef, useEffect } from "react"
import "./home.css"

import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import CV from "./CV"
import TutorServices from "../services/TutorServices"
import Certificate from "../certificate/Certificate"

gsap.registerPlugin(ScrollTrigger)

const Home =()=>{
  const textData = useRef(null)
  const highlight = useRef(null)
  const allSection = useRef(null)

  
  useEffect(()=>{
    
  const element = textData.current
  const elementSec = highlight.current 
 const allSections = allSection.current
   const timeLine = gsap.timeline()
    timeLine.from(".textHighlight > *",{
      y:-10,
      opacity:0,
      duration:2,
      delay: -2,
      stagger: 1.5
    })
    .to(element,
    {
      transform: "translateX(-200vw)",
      opacity:0.5,
      duration:2,
      scrollTrigger:{
        trigger:element,
        scroller:"body",
        start: 'top 80em',
        end: 'top -900%',
        scrub:true,
        pin:true
      },
    })
    
  },[])
  
  return (
    <>
    
    <div id="home" className="heroContainer flex">

    <div className="textSection">
      <h1 ref={textData}>
      Hello Rohit Kumar
      </h1>
    <div ref={highlight} className="textHighlight">
    <span className="highlights">Rohit Kumar</span>
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