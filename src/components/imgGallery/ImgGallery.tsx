import "./imgGallery.css"
import { useRef, useEffect } from "react"
import locomotiveScroll from 'locomotive-scroll'
import {gsap} from "gsap"
const ImgGallery=()=>{
  const imgOne=useRef(null)
  const imgTwo=useRef(null)
  const imgThr=useRef(null)
  const scrollSection = useRef(null)
  useEffect(()=>{
    
    const elementOne = imgOne.current
    const elementTwo = imgTwo.current
    const elementThr = imgThr.current
    const timeLine = gsap.timeline()
    timeLine
      .from(elementOne,{
      y:40,
      opacity:1,
      duration:2
    })
      .from(elementTwo,{
        x:30,
        opacity:1,
        duration:2
      })
      .from(elementThr,{
        x:30,
        opacity:1,
        duration:2
      })
  },[])
  
  return (
    <>
    <div scroll-data-container ref={scrollSection} className="imgGallery flex">
    <div ref={imgOne} className="imgs imgOne flex">
      <img src="pic01.jpg" alt="Rohit Kumar Singh"/>
    </div>
   <div ref={imgTwo} className="imgs imgSec flex">
      <img src="pic02.jpg" alt="Rohit Kumar Singh"/>
    </div>
    <div ref={imgThr} className="imgs imgThr flex">
    <img src="pic03.jpg" alt="Rohit Kumar Singh"/>
    </div>
    </div>
    </>
    )
}
export default ImgGallery