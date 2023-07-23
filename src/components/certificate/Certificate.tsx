import CertificateApi from "./CertificateApi"
import HeroSection from "../heroSection/HeroSection"

const Certificates=()=>{
  const projectApi={
    title:"My Certificate",
    Api:CertificateApi,
    width:"300px",
    height:"auto"
  }
  return (
     <HeroSection myData={projectApi}/>
    )
}
export default Certificates