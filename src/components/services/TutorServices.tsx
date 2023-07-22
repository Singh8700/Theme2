
import TutorApi from "./TutorApi"
import HeroSection from "../heroSection/HeroSection"
const TutorServices=()=>{
  const myData={
    title:"Tutor Services",
    Api:TutorApi
  }
  return (
    <>
    <HeroSection myData={myData}/>
    </>
    )
}
export default TutorServices 