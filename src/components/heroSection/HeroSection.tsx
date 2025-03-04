import styled from "styled-components"
import {NavLink} from "react-router-dom"
import Animation from "../../Animation"
const HeroSection=({myData})=>{
  const {title,Api,width,height,anime}=myData
  const Wrapper = styled.section`
    height:max-content;
    margin:0rem auto;
    flex-wrap:wrap;
    overflow-x:hidden;
    .title{
      width:80%;
      margin:5rem auto 2rem;
      text-align:center;
    }
    .cards{
      width:70%;
      text-align:center;
      margin:auto;
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
          font-size:2rem;
          margin-bottom:0;
        }
        h3{
          font-size:1.5rem;
          color:gray;
          padding-bottom:1em;
        }
        .btn{
          font-size:1.5rem;
          margin-bottom:0.5rem;
        }
      }
      }
      .card:hover{
        background-image: linear-gradient(pink, #ffc, skyblue);
        .text{
        text-shadow:2px 2px 2px var(--clr);
        h2{
          color:var(--darklight);
        }
        h3{
        margin-top:0.2em;
          color:var(--wht);
          font-weight:bold;
        }
        .btn,.icon{
          background:var(--wht);
          box-shadow:2px 2px 5px var(--clr);
          text-shadow:2px 2px 2px var(--clr);
        }
        .btn{
          text-shadow:none;
        }
        }
      }
    }
    @media(max-width:${({theme})=>theme.media.mobile}){
      height:auto;
      .title{
        h1{
        font-size:2.5rem;
        }
      .card{
      width:90vw;
      }
      }
    }
  `
  
  return (
    <>

    <Wrapper className="scales flex">
    <Animation/>
    <div className="title flex transformX">
        <h1 className="scales scale">{title}</h1>
    </div>
    <ul className="flex cards col scales">
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