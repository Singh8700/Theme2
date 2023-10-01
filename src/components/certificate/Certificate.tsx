import CertificateApi from "./CertificateApi"
import HeroSection from "../heroSection/HeroSection"

import styled from "styled-components"



const Certificates=()=>{
  const Wrapper = styled.div`
  overflow-x:hidden;
  .extraOption{
    width:100vw;
   margin:auto;
   background-image:linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('Python.jpg');
   background-position:center center;
   background-size:100% 400px;
   background-attachment: fixed;
   background-repeat:no-repeat;
   overflow-x:hidden;
}
  `;
  const projectApi={
    title:"My Certificate",
    Api:CertificateApi,
    width:"250px",
    height:"auto",
  }
  return (
    <Wrapper>
    <div className="extraOption">
     <HeroSection myData={projectApi}/>
    </div>
    </Wrapper>
    )
}
export default Certificates