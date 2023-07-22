
import WebApi from "./WebApi"
import HeroSection from "../heroSection/HeroSection"
const WebServices=()=>{
  const myData={
    title:"Web Services",
    Api:WebApi
  }
  return (
    <>
    <HeroSection myData={myData}/>
    </>
    )
}
export default WebServices