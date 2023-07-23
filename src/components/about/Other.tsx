import {Other} from "./Skills"
import HeroSection from "../heroSection/HeroSection"
const Others=()=>{
  const myAwad={
    title:"My Other Skills",
    Api:Other,
    width:"max-content",
    height:"max-content"
  }
  return (
     <HeroSection myData={myAwad}/>
    )
}
export default Others