import {IonIcon} from "@ionic/react"
import {logoHtml5,logoCss3,logoJavascript,logoPython,logoReact,
  imagesOutline, albumsOutline 
} from "ionicons/icons"

const WebApi = [
  {
    id:1,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={logoHtml5}/>,
    text:"HTML5"
  },
  {
    id:2,
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={logoCss3}/>,
    text:"CSS3"
  },
    {
    id:3,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={logoJavascript}/>,
    text:"JavaScript"
    },
    {
    id:4,
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={logoPython}/>,
    text:"Basic Pyhon"
  } ,
    {
    id:5,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={logoPython}/>,
    text:"Basic Django"
  }
  ,
    {
    id:6,
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={logoReact}/>,
    text:"ReactJs"
  }
  ,
    {
    id:7,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={imagesOutline}/>,
    text:"PhotoShop"
  }
  ,
    {
    id:8,
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={albumsOutline}/>,
    text:"CoralDraw"
  }
 ]
 export default WebApi