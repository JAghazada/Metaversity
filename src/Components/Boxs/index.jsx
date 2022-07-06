import "./assets/css/box.css"
function Box({header,text,icon,bT,bR,iconColor,w,m}) {
  const styleJson = {
    borderTop:bT,
    borderRadius:bR,
    width : w,
    margin : m
  }
  const iconStyle = {
    color:iconColor
  }
  return (
    <div style={styleJson} className="boxContainer">
        <div className="header">{header}</div>
        <div className="text">{text}</div>
        <div style={iconStyle} className="icon">{icon}</div>
    </div>
  )
}

export default Box