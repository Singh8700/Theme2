import {Qualification} from "./Qualification"
import HeroSection from "../heroSection/HeroSection"
const Education=()=>{
  const myAwad={
    title:"My Qualification",
    Api:Qualification,
    width:"max-content",
    height:"max-content"
  }
  return (
     <HeroSection myData={myAwad}/>
    )
}
export default Education