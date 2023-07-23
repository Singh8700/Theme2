import {list} from "./Qualification"
import HeroSection from "../heroSection/HeroSection"
const Awad=()=>{
  const myAwad={
    title:"My Awads",
    Api:list,
    width:"max-content",
    height:"max-content"
  }
  return (
     <HeroSection myData={myAwad}/>
    )
}
export default Awad