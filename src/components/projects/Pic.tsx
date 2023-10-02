import {Pic} from "./projectApi"
import HeroSection from "../heroSection/HeroSection"

const Pics=()=>{
  const projectApi={
    title:"Live Projects",
    Api:Pic,
    width:"320px",
  }
  return (
     <HeroSection myData={projectApi}/>
    )
}
export default Pics