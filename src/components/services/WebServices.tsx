import styled from "styled-components"
import WebApi from "./WebApi"
const WebServices=()=>{
  const Wrapper = styled.section`
    width:90%;
    height:400px;
    margin:2rem auto;
    flex-wrap:wrap;
    .title{
      width:90%;
      font-size:2rem;
      margin:5rem auto 2rem;
    }
    .cards{
      width:90%;
      margin:2rem auto;
      text-align:center;
      .card{
      width:max-content;
      height:max-content;
      box-shadow:2px 2px 10px var(--clr),inset 2px 2px 5px var(--wht),inset -2px -2px 5px var(--clr);
      border-radius:1.2rem;
      padding:1.2rem 3rem;
      color:#fff;
      .icon{
        font-size:8rem;
        padding:2rem;
      }
      .text{
        font-size:2rem;
      }
      }
      .card:hover{
        color:#fff;
      }
    }
    @media(max-width:${({theme})=>theme.media.mobile}){
      height:auto;
      .title{
        font-size:1.2rem;
      }
      .card{
        height:250px;
        margin:2rem auto;
      }
    }
  `
  return (
    <Wrapper className="container flex">
    <div className="title flex">
        <h1>Web Services</h1>
    </div>
    <ul className="cards col flex">
      {
        WebApi.map((item)=>{
          return(
       
       <li key={item.id} className="card flex">
        <a className="cardSection">
         <div className="icon flex">
          {item.icon}
          </div>
          <div className="text flex">
          {item.text}
          </div>
        </a>
      </li>
          )
        })
      }
      </ul>
    </Wrapper>
    )
}
export default WebServices