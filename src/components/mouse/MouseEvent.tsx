import {useState, useEffect } from "react"
import {gsap} from "gsap"
const MouseEvent=()=>{
  const [timeOut,setTimeOut]=useState(0)
 const [xscale,setXscale] = useState(1)
 const [yscale,setYscale] = useState(1)
 const [xperv,setXperv] = useState(0)
 const [yperv,setYperv] = useState(0)
  
  const mouseEvent=()=>{
    
   window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timeOut)

      setXscale(gsap.utils.clamp(.4,1.2, dets.clientX - xperv))
      setYscale(gsap.utils.clamp(.4,1.2, dets.clientY - yperv))
      
      setXperv(dets.clientX)
      setYperv(dets.clientY)
        
      mouseMoveFollwer(xscale,yscale)
      setTimeOut(setTimeout(()=>{
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(1,1)`
      },100)
      )
      })
  }

    const mouseMoveFollwer=(xscale,yscale)=>{
      window.addEventListener("mousemove",(dets)=>{
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}% ,${dets.clientY}%) scale(${xscale},${yscale})`
      console.log(dets.clientX,dets.clientY)
        
      })
    }
  useEffect(()=>{
    mouseEvent()
  },[])
  return(
    <div className="mouseCircle">
    <span id="minicircle">
    </span>
    </div>
    )
}
export default MouseEvent