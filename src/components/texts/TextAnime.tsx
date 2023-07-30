import {useRef, useEffect} from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const TextAnime=()=>{
  const nextData = useRef(null)
  useEffect(()=>{
    const element = nextData.current
    
      gsap.to(element,
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
    <div className="common">
      <h1 ref={nextData} className="nextData">
      Hello Rohit Kumar
      </h1>
     </div>
    )
}
export default TextAnime