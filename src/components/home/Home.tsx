import ImgGallery from "../imgGallery/ImgGallery"
import { useRef, useEffect } from "react"
import "./home.css"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import CV from "./CV"
import TutorServices from "../services/TutorServices"
import Certificate from "../certificate/Certificate"
import locomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)

const Home =()=>{
  const textData = useRef(null)
  const highlight = useRef(null)
  const allSection = useRef(null)
  const scrollSection = useRef(null)
  //alert(window.innerWidth)
  useEffect(()=>{
    const scroll = new locomotiveScroll({
      el: scrollSection.current,
      smooth:true,
      multiplayer: 5
    })
  const element = textData.current
  const elementSec = highlight.current 
 const allSections = allSection.current
   const timeLine = gsap.timeline()
    timeLine.to(element,
    {
      transform: "translateX(-200vw)",
      opacity:0.5,
      duration:2,
      scrollTrigger:{
        trigger:element,
        scroller:"body",
        start: 'top 21%',
        end: 'top -900%',
        scrub:2,
        pin:true
      },
    })
    
    scroll.update()
    return ()=> scroll.destroy()
    
  },[])
  
  return (
    <>
    <div scroll-data-container id="home" className="heroContainer flex" ref={scrollSection}>

    <div className="textSection">
      <h1 ref={textData}>
      Hello Rohit Kumar
      </h1>
    <div ref={highlight} className="textHighlight">
    <h2 className="subDep">
    <span className="highlights">Rohit Kumar</span><br/>
    I'm Web-Designer & DCA Tutor.
    </h2>
    <p ref={allSection} className="subDetails">
    I'm a freelance at the time.
    </p>
    <p className="subDetails">
    I'm currently DCA tutor in RIIT EDUCATION INSTITUTE.My speciality is I have giving my 99% + excellent works.
    </p>
    <CV/>
    </div>
    </div>
    <div className="imgSection">
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