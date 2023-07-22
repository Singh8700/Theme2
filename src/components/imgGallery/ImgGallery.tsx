import "./imgGallery.css"

const ImgGallery=()=>{
  return (
    <>
    <div className="imgGallery flex">
    <div className="imgs imgOne flex">
      <img src="pic01.jpg" alt="Rohit Kumar Singh"/>
    </div>
   <div className="imgs imgSec flex">
      <img src="pic03.jpg" alt="Rohit Kumar Singh"/>
    </div>
    <div className="imgs imgThr flex">
    <img src="pic02.jpg" alt="Rohit Kumar Singh"/>
    </div>
    </div>
    </>
    )
}
export default ImgGallery