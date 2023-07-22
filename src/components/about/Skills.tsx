import {IonIcon} from "@ionic/react"
import {logoHtml5,logoCss3,logoJavascript,logoPython,logoReact,
  imagesOutline, analyticsOutline, albumsOutline ,logoMicrosoft 
} from "ionicons/icons"

const frontEnd = [
    {
      id:1,
      text:"HTML",
      icon:<IonIcon icon={logoHtml5}/>,
      cl:"transX",
      cll:"transY",
      exp:"Experience"
    },{
      id:2,
      text:"CSS",
      icon:<IonIcon icon={logoCss3}/>,
      cl:"transY",
    cll:"transX",
      exp:"Experience"
    },{
      id:3,
      text:"jQuery",
      icon:<IonIcon icon={logoJavascript}/>,
      cl:"transX",
    cll:"transY",
      exp:"some Project makes"
    },{
      id:4,
      text:"Js",
      icon:<IonIcon icon={logoJavascript}/>,
      cl:"transY",
    cll:"transX",
      exp:"Experience"
    },{
      id:5,
      text:"Django",
      icon:<IonIcon icon={logoPython}/>,
      cl:"transX",
    cll:"transY",
      exp:"only Learnt"
    },{
      id:6,
      text:"React Js",
      icon:<IonIcon icon={logoReact}/>,
      cl:"transY",
    cll:"transX",
      exp:"Learning Way"
    }
    ]
  const Other=[
    {
      id:1,
      text:"M.S Excel",
      icon:<IonIcon icon={logoMicrosoft}/>,
      cl:"transX",
    cll:"transY",
      exp:"Experience"
    },{
      id:2,
      text:"M.S Word",
      icon:<IonIcon icon={logoMicrosoft}/>,
      cl:"transY",
    cll:"transX",
      exp:"Experience"
    },{
      id:3,
      text:"PhotoShop",
      icon:<IonIcon icon={imagesOutline}/>,
      cl:"transX",
    cll:"transY",
      exp:"Little Experience"
    },{
      id:4,
      text:"CoreDraw",
      icon:<IonIcon icon={albumsOutline}/>,
      cl:"transY",
    cll:"transX",
      exp:"Little Experience"
    },{
      id:5,
      text:"Tally Prime",
      icon:<IonIcon icon={analyticsOutline}/>,
      cl:"transX",
    cll:"transY",
      exp:"Experience"
    }
  ]
  export {
    frontEnd,
    Other
  }