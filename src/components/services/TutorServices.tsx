import styled from "styled-components"
import TutorApi from "./TutorApi"
const TutorServices=()=>{
  const Wrapper = styled.section`
    width:90%;
    height:400px;
    margin:2rem auto;
    flex-wrap:wrap;
    .title{
      width:90%;
      font-size:2rem;
      margin:5rem auto 5rem;
    }
    .cards{
      width:90%;
      margin:2rem auto;
      
      .card{
      width:max-content;
      height:max-content;
      box-shadow:2px 2px 10px var(--clr),inset 2px 2px 5px var(--wht),inset -2px -2px 5px var(--clr);
      text-align:center;
      border-radius:1.2rem;
      font-size:4rem;
      color:#fff;
      margin:1rem;
      .icon{
        font-size:8rem;
        padding:1.2rem;
        
      }
      .text{
        font-size:1.8rem;
        padding:1.2rem;
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
        <h1>Tutor Services</h1>
    </div>
    <ul className="cards col flex">
      {
        TutorApi.map((item)=>{
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
export default TutorServices 