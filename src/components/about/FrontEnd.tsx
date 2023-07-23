import {frontEnd} from "./Skills"
import HeroSection from "../heroSection/HeroSection"
const FrontEnd=()=>{
  const myAwad={
    title:"My Web Skills",
    Api:frontEnd,
    width:"max-content",
    height:"max-content"
  }
  return (
     <HeroSection myData={myAwad}/>
    )
}
export default FrontEnd