import ChartC from 'Components/Chart/Chart'
import RotatingCard from 'Components/RotatingCard'
import   './assets/css/information.css'

function Information({img,alt,pw,header,pC,pF,hF}) {
    const _P_styleJson = {
        width:pw,
        color:pC,
        fontSize:pF
    }
  return (
    <div className='information-wrapper d-flex justify-content-around align-items-center'>
        <ChartC/>
        <p style={_P_styleJson}>Blockchain Texnologiyası Biznesi Transformasiya edir Blockchain texnologiya mənzərəsi çaşdırıcı ola bilsə də və daim dəyişsə də, bu, yaxın beş il ərzində əksər İT liderlərinin biznesinə təsir göstərəcək texnologiyadır.</p>
        <p style={_P_styleJson}>
        <h1 style={{fontSize:hF,color:'#fafafa'}}> {header}</h1>
        Qlobal metaverse bazarının 2022-ci ildəki 100,27 milyard dollardan 2029-cu ilə qədər 1,527,55 milyard dollara qədər artacağı proqnozlaşdırılır.</p>
    </div>
  )
}

export default Information