import ImgGallery from "../imgGallery/ImgGallery"
import "./home.css"

import CV from "./CV"
import TutorServices from "../services/TutorServices"
import Certificate from "../certificate/Certificate"



const Home =()=>{
  //alert(window.innerWidth)
  return (
    <>
    <div id="home" className="container flex">

    <div className="textSection">
    <h3 className="subTitle">
    Hello, 
    </h3>
    <h1 className="mainTitle">
    Rohit Kumar
    </h1>
    <h2 className="subDep">
    I'm Web-Designer & DCA Tutor.
    </h2>
    <p className="subDetails">
    I'm a freelance at the time.
    </p>
    <p className="subDetails">
    I'm currently DCA tutor in RIIT EDUCATION INSTITUTE.My speciality is I have giving my 99% + excellent works.
    </p>
    <CV/>
    </div>
    <div className="imgSection">
    <ImgGallery/>
    </div>
    </div>
    <div className="container">
    
    <div className="ExtraOption">
    <Certificate/>
    </div>
    <TutorServices/>
    </div>
    </>
    )
}
export default Home