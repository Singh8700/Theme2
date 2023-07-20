import {IonIcon} from '@ionic/react'
import {
  homeOutline,
  personCircleOutline,
  codeWorkingOutline,
  albumsOutline,
  globeOutline,
  barChartOutline
} from "ionicons/icons"
const NavList =[{
  id:1,
  text:"Home",
  icon:<IonIcon icon={homeOutline}/>,
  style:"#afa01f",
  link:"/",
  status:true
},
{
  id:3,
  text:"Service",
  icon:<IonIcon icon={codeWorkingOutline}/>,
  style:"#10ddff",
  link:"/services",
  status:false
},{
  id:2,
  text:"Projects",
  icon:<IonIcon icon={barChartOutline}/>,
  style:"#1ca00f",
  link:"/projects",
  status:false
},
{
  id:4,
  text:"blogs",
  icon:<IonIcon icon={albumsOutline}/>,
  style:"#ffc0af",
  link:"/blogs",
  status:false
},{
  id:5,
  text:"about",
  icon:<IonIcon icon={personCircleOutline}/>,
  style:"#aff0aa",
  link:"/about",
  status:false
},{
  id:6,
  text:"contact",
  icon:<IonIcon icon={globeOutline}/>,
  style:"#99a0ff",
  link:"/contact",
  status:false
}]
export default NavList