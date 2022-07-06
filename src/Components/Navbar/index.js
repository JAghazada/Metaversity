
import "./assets/css/style.css"
import logo from "./assets/img/Mainlogo.gif"
import { useState } from "react";
function Navbar() {
  const [navActive,setNavActive] = useState(false);
  const navItemArray = [{
    slug:0,
    name:"HAQQIMIZDA",
    route:"/"
  },{
    slug:1,
    name:"SİYASƏTİMİZ",
    route:"/"
  },{
    slug:2,
    name:"PROGRAMLAR",
    route:"/"
  },{
    slug:3,
    name:"VİZYONUMUZ",
    route:"/"
  },
  {
    slug:4,
    name:"MEDİA",
    route:"/"
  },
  {
    slug:5,
    name:"CONTACT US ",
    route:"/"
  }
,
{
  slug:6,
  name:"UYELİK",
  route:"/"
}
]
const burgerItems = [{
  slug:0,
  className:"line-o"
},{
  slug:1,
  className:"line-t"
},{
  slug:2,
  className:"line-th"
}]
  return (
    <nav id="mainNav">
      <div className="nav-logo"><img width={300} src={logo} alt="logo"/></div> 
      <ul className={navActive===true ? "nav-active " : "nav-links"}>
        {navItemArray.map(navItem=><li key={navItem.slug}><a href={navItem.route}/>{navItem.name}</li>)}
      </ul>
      <div className="nav-burger"  onClick={()=>{
        setNavActive(!navActive)
        }}>
          {
            burgerItems.map(item=> <div key={item.slug} className={navActive ? `nav-close ${item.className }` :`${item.className}`}></div>)
            
          }
      </div>
    </nav>
    )
}

export default Navbar