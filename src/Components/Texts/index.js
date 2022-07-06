import React from 'react'

function Texts({text,fS,mid,color,fW,mT,mB,mL,mR,pT ,pB,pL,pR}) {
    const styleJson = {
        fontSize:fS,
        fontWeight:fW,
        marginTop:mT,
        marginBottom:mB,
        marginLeft:mL,
        marginRight:mR,
        paddingTop:pT,
        paddingBottom:pB,
        paddingLeft:pL,
        paddingRight:pR,
        textAlign:mid ===true ? "center" : "",
        color
    }
  return (
    <div style={styleJson}>{text}</div>
  )
}

export default Texts