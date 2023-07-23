import styled from "styled-components"
import {NavLink} from "react-router-dom"

import Animation from "../../Animation"

const HeroSection=({myData})=>{
  const {title,Api,width,height}=myData
  const Wrapper = styled.section`
    width:100%;
    height:max-content;
    margin:5rem auto;
    flex-wrap:wrap;
    overflow-x:hidden;
   .container{
     margin:0 auto;
   }
    .title{
      width:80%;
      font-size:2.5rem;
      margin:5rem auto 2rem;
    }
    .cards{
      width:70%;
      margin:2rem auto;
      text-align:center;
      .card{
      width:${width};
      height:${height};
      margin:20em auto;
      word-break:break;
      box-shadow:2px 2px 10px var(--clr),inset 2px 2px 5px var(--wht),inset -2px -2px 5px var(--clr);
      border-radius:1.2rem;
      padding:0.5rem 2rem;
      background:var(--wht);
      color:var(--clr);
      img{
       width:100%;
       height:100%;
        border-radius:2rem;
        box-shadow:2px 2px 5px var(--clr);
      }
      .icon{
        font-size:8rem;
        padding:2rem;
      }
      .text{
        flex-direction:column;
        text-shadow:1px 0px 1px var(--wht);
        h2{
          font-size:100em;
        }
        h3{
          font-size:60em;
          color:gray;
          padding-bottom:1em;
          margin-top:-0.5em;
        }
        
      }
      }
      .card:hover{
        background:var(--color);
      }
    }
    @media(max-width:${({theme})=>theme.media.mobile}){
      height:auto;
      .title{
        font-size:1.2rem;
      }
    }
  `
  return (
    <>
    <Animation/>
    <Wrapper className="heroContainer scales flex">
    <div className="title flex transformX">
        <h1 className="scales">{title}</h1>
    </div>
    <ul className="cards col flex scales">
      {
        Api.map((item)=>{
          return(
       
       <li key={item.id} className={`card flex ${item.cl}`}>
        <a className="cardSection">
         <div className="icon flex">
          {item.img?<img src={item.img} alt={item.text} className={`${item.cll}`}/>:item.icon}
          </div>
          <div className={`text flex ${item.cll}`}>
          <h2>{item.text}</h2>
          <h3>{item.exp}</h3>
          <h3>{item.result}</h3>
          {item.link?
          <NavLink to={item.link} download>
         <a href={item.link} download>
           <button className="btn scales">
            Click me
            </button>
          </a>
          </NavLink>:''}
          {item.download?item.download:''}
          </div>
        </a>
      </li>
          )
        })
      }
      </ul>
    </Wrapper>
    </>
    )
}
export default HeroSection