import styled from "styled-components"
import WebServices from "./WebServices"
import TutorServices from "./TutorServices"



const Services=()=>{
  const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-item: center;
    flex-wrap:wrap;
    margin-left:-3rem;
    flex-direction: columns;
    position: relative;
    .WebServices,.TutorServices{
      width:100%;
    }
  `
  return (
    <Wrapper className="container">
      <div className="WebServices">
        <WebServices/>
      </div>
     <div className="TutorServices">
        <TutorServices/>
      </div>
    </Wrapper>
    )
}
export default Services