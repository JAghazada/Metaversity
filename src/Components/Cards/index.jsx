import "./assets/css/cardBox.css"
function Cards({img,text,header}) {
  return (
    <>
        <div id="cardBox">
          <img  src={img} alt="" />
          <div id="cardBoxText">
            <div className="header">{header}</div>
            <div className="text">{text}</div>
          </div>
        </div>
    
    
    </>
  )
}

export default Cards