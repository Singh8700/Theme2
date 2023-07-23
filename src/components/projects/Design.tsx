import {Design} from "./projectApi"
import HeroSection from "../heroSection/HeroSection"

const Designs=()=>{
  const designApi={
    title:"Demo Design Projects",
    Api:Design,
    width:"300px",
    height:"auto"
  }
  return (
    <HeroSection myData={designApi}/>  
    )
}
export default Designs