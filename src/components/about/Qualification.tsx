import {IonIcon} from "@ionic/react"
import {trophyOutline,peopleOutline,libraryOutline
} from "ionicons/icons"
const list =[{
    id:1,
    icon:<IonIcon icon={trophyOutline}/>,
    cl:"transY",
    cll:"transX",
    text:"Experience",
    result:"1+ years",
  },{
   id:2,
    icon:<IonIcon icon={peopleOutline}/>,
    text:"Client",
    cl:"transX",
    cll:"transY",
    result:"30+ students" 
  },{
    id:3,
    icon:<IonIcon icon={libraryOutline}/>,
    text:"Completed",
    cl:"transY",
    cll:"transX",
    result:"25+ students"
  }
  ]
const Qualification=[
    {
    id:1,
    icon:<IonIcon icon={trophyOutline}/>,
    text:"10th Metric Examination",
    cl:"transX",
    cll:"transY",
    result:"Passed in 2015 from CBSE Board"
  },{
    id:2,
    icon:<IonIcon icon={trophyOutline}/>,
    text:"12th intermediate Examination",
    cl:"transY",
    cll:"transX",
    result:"Passed in 2017 from CBSE Board"
  },{
    id:3,
    icon:<IonIcon icon={trophyOutline}/>,
    text:"Diploma in Computer Applications  (DCA)",
    cl:"transX",
    cll:"transY",
    result:"Completed in 2018 from RIIT INFOTECH PVT LTD"
  },{
    id:4,
    icon:<IonIcon icon={trophyOutline}/>,
    text:"B.A Programme",
    cl:"transY",
    cll:"transX",
    result:"Completed in 2021 from SOL University OF Delhi"
  }
  ]
  export {
    list,
    Qualification
  }