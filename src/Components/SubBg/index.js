import Box from "../Boxs";
import Cards from "../Cards";
import Texts from "../Texts"
import "./css/subBg.css"
import logo from "../../assets/img/mainlogo.png"
import RotatingCard from "../RotatingCard";
import Subscribe from "Components/Subscribe";
import Information from "Components/Information/Information";
import Footer from "Components/Footer/Footer";
import Bubble from "Components/Bubble/Bubble";
function SubBg() {
  return (
   <div id="subBgContainer">
    <Texts color={"#000048"} text={"Programlarimiz"} pT={"4%"} mT={"5%"} fS={35} mid={true} fW="bold" />
    <div style={{width:"100%",marginTop:"2%",display:"flex",justifyContent:"space-around"}}> 
    <Cards img={"https://www.memurlar.net/common/news/images/1010606/headline.jpg"} header={"MV1 Kurslar"} text={"Azərbaycanı yeni dünayaya hazırlamaq və tanıtmaq"}/>
    <Cards img={"data:image/jpeg;base64,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"} header={"MV2 Trainingler"} text={"Azərbaycanı yeni dünayaya hazırlamaq və tanıtmaq"}/>
    <Cards img={"https://www.memurlar.net/common/news/images/1010606/headline.jpg"} header={"MV3 Seminerler"} text={"Azərbaycanı yeni dünayaya hazırlamaq və tanıtmaq"}/>
    <Cards img={"https://www.memurlar.net/common/news/images/1010606/headline.jpg"} header={"MV4 Projeler"} text={"Azərbaycanı yeni dünayaya hazırlamaq və tanıtmaq"}/>
    
    
    </div>
    <Texts color={"#000048"} text={"Section2"} mT={"7%"} mB={"4%"} fS={35} mid={true} fW="bold" />
    <div style={{width:"100%",marginTop:"2%",display:"flex",justifyContent:"space-around"}}>
    <Box iconColor = {"cyan"} icon={<i className="fa-solid fa-landmark p-icon icon-politics"></i>} bT={"2px solid cyan"} bR={8} header={"Siyasətimiz"} text={"Yeni əməkdaşlıqlar və yeni proqramlar inkişaf etdirməklə xidmətlərimizi artırmağı hədəfləyirik."}/>
    <Box iconColor = {"goldenrod"} icon={<i className="fa-solid fa-bullseye p-icon icon-target"></i>} bT={"2px solid pink"} bR={8} header={"Hədəfimiz"} text={"Azərbaycanı yeni dünayaya hazırlamaq və tanıtmaq"}/>
    <Box iconColor = {"violet"} icon={<img className="logo" width={"160px"} src={logo} alt="" />} bT={"2px solid green"} bR={8} header={"Metaversity"} text={"Metaverse dünyasına bizimlə kəşf edin"}/>
    <Box iconColor = {"green"} icon={<i className="fa-solid fa-lightbulb p-icon icon-lamb"></i>} bT={"2px solid violet"} bR={8} header={"Fərqimiz"} text={"Azərbaycanın ilk metaverse platforması"}/>

    </div>
    <div style={{width:"100%",display:"flex",marginTop:"15%",justifyContent:"space-between",alignItems:"center"}}>
      <RotatingCard/>
     <div>
     <div style={{marginTop:"2%"}}>
        <div className="d-flex jcsb">
        <Box m={"0% 0 2% 0 "} w={"42%"}  iconColor = {"cyan"}  bT={"2px solid cyan"}  bR={8} header={"Siyasətimiz"} text={"Yeni əməkdaşlıqlar və yeni proqramlar inkişaf etdirməklə xidmətlərimizi artırmağı hədəfləyirik."}/>
      <Box m={"0% 0 0 2% "} w={"42%"} iconColor = {"goldenrod"}  bT={"2px solid pink"} bR={8} header={"Hədəfimiz"} text={"Azərbaycanı yeni dünayaya hazırlamaq və tanıtmaq"}/>
    
        </div>
        <div className="d-flex jcsb">
        <Box m={"2% 0 0% 0 "} w={"42%"} iconColor = {"violet"} bT={"2px solid green"} bR={8} header={"Metaversity"} text={"Metaverse dünyasına bizimlə kəşf edin"}/>
        <Box m={"2% 0 0% 0 "} w={"42%"} iconColor = {"green"}  bT={"2px solid violet"} bR={8} header={"Fərqimiz"} text={"Azərbaycanın ilk metaverse platforması"}/>

        </div>

      </div>
     </div>


    </div>
    <Subscribe paragraph={"Bizimlə birlikdə gələcəyin texnologiyasına hazır olun"} button_text={"Abunə olun"}/>
    <Information pw={"27%"} pC="#fff" pF={18} hF={26} header={"1.527.500.000 +"} alt={"Info Img"} img={"https://images.unsplash.com/photo-1521668576204-57ae3afee860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"}/>
    <Bubble/>
    <Footer/>

   </div>
  //  >
  //  
  //  
  )
}

export default SubBg