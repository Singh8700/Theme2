import {Poster} from "./projectApi"
import HeroSection from "../heroSection/HeroSection"

const Posters=()=>{
  const posterApi={
    title:"Poster Projects",
    Api:Poster,
    width:"300px",
    height:"auto"
  }
  return (
    <HeroSection myData={posterApi}/>
    )
}
export default Posters