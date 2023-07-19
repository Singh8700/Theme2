import styled from "styled-components"
import NavList from "../nav/NavApi"
import {IonIcon} from "@ionic/react"
import {logoInstagram,logoGithub} from "ionicons/icons"
import {Link} from "react-router-dom"
const Footer=()=>{
  const Wrapper = styled.section`
  position:relative;
  bottom:0;
  .icon{
    color:#fff;
    font-size:22px;
  }
  `
  return (
   <Wrapper className="container">
     <div className="footerTitle">
      <h3>Get Started</h3>
      <h3>Let's go to explore more thinks together</h3>
      <button>Click me</button>
     </div>
     <div className="footerTitle">
      <h1>Rohit Kumar</h1>
      <h2>Web Design</h2>
     </div>
      <div className="footerNav">
      <ul>
      {NavList.map((item)=>{
        return(
          <li key={item.id} className="logo">
          <Link to={item.link}>
            <div className="text">
              {item.text}
            </div>
          </Link>
          </li>
        )
      })}
      </ul>
     </div>
     <div className="footerSubscriber">
     <div className="icon">
      <a href="#">
        <IonIcon icon={logoInstagram}/>
      </a>
      <a href="#">
        <IonIcon icon={logoGithub}/>
      </a>
      </div>
     </div>
    <div className="footerCopyRight">
      <h1>Rohit Kumar</h1>
      <h2>Web Design</h2>
     </div>
   </Wrapper>
    )
}
export default Footer