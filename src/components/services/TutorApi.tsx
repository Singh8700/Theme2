import {IonIcon} from "@ionic/react"
import {logoHtml5,desktop,logoCss3,logoJavascript,logoPython,documentAttachSharp,
  imagesSharp, colorPaletteSharp
} from "ionicons/icons"

const TutorApi = [
  {
    id:1,
    icon:<IonIcon icon={desktop}/>,
    cl:"transX",
    cll:"transY",
    text:"Basic & Advance Computer Course"
    
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
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={logoJavascript}/>,
    text:"JavaScript"
    },
    {
    id:4,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={logoPython}/>,
    text:"Basic Pyhon"
  } ,
    {
    id:5,
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={logoPython}/>,
    text:"Basic Django"
  }
  ,
    {
    id:6,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={documentAttachSharp}/>,
    text:"Tally Prime"
  }
  ,
    {
    id:7,
    cl:"transY",
    cll:"transX",
    icon:<IonIcon icon={imagesSharp}/>,
    text:"PhotoShop"
  }
  ,
    {
    id:8,
    cl:"transX",
    cll:"transY",
    icon:<IonIcon icon={colorPaletteSharp}/>,
    text:"CoralDraw"
  }
 ]
 export default TutorApi