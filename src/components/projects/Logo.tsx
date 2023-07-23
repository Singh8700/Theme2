import {Logos} from "./projectApi"
import HeroSection from "../heroSection/HeroSection"

const Logo=()=>{
  const logoApi={
    title:"logo Projects",
    Api:Logos,
    width:"300px",
    height:"auto"
  }
  return (
    <HeroSection myData={logoApi}/>
    )
}
export default Logo