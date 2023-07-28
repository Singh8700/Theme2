import styled from "styled-components"
import NavList from "../nav/NavApi"
import {IonIcon} from "@ionic/react"
import {logoInstagram,logoGithub} from "ionicons/icons"
import {Link} from "react-router-dom"
const Footer=()=>{
  const Wrapper = styled.section`
  position: relative;
  bottom:0;
  padding-bottom:2rem;
  padding-top:25em;
  font-family: Georgia;
  overflow-x:hidden;
  .footerTitle{
    width:300px;
    height:120px;
    background:var(--color);
    flex-wrap:wrap;
    flex-direction:column;
    border-radius:2rem;
    margin:-2rem auto 2rem;
    
   .footerH3{
     font-size:2.5rem;
     color:rgb(200,190,225);
     overflow-x:hidden;
   }
    h3{
      font-size:1.6rem;
      text-align: center;
      padding:1.5rem auto;
      font-weight:1000;
      color:var(--light-text);
    }
    button{
      margin:1rem 0;
      padding:0.5rem 1rem;
      font-size:1.5rem;
    }
  }
  .footerMainTitle{
    padding:2rem 1.5rem;
    overflow-x:hidden;
    h2{
    text-align:left;
    }
  }
  .footerNav{
    break-inside: avoid;
    padding:5rem auto;
    overflow-x:hidden;
    ul{
      li{
        font-size:6rem;
        font-weight:1000;
      }
      li:hover{
        color:var(--wht);
      }
    }
  }
  .footerSubscriber{
  break-inside: avoid;
    .icon{
      color:#fff;
      a{
      font-size:6rem;
      padding-left:2rem;
      }
  }
  }
@media(max-width:${({theme})=>theme.media.mobile}){
  padding-left:20%;
  .footerCopyRight{
  h3{
    text-align:left;
  }
  }
}
  `
  return (
   <Wrapper className="container">
     <div className="footerTitle flex">
      <h3 className="footerH3">Get Started</h3>
      <h3>Let's go to explore more thinks together</h3>
      <Link to="/projects" alt="Projects Files">
      <button>Start Now</button>
      </Link>
     </div>
     <div className="footCols">
     <div className="footerMainTitle">
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
       <h3>
        @{new Date().getFullYear()} Rohit@8700. All Rights Reserved
         </h3>
        <div>
           <h3>PRIVACY POLICY</h3>
           <h3>TERMS & CONDITIONS</h3>
         </div>
     </div>
    </div>
   </Wrapper>
    )
}
export default Footer