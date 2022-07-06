import "./assets/css/footer.css"
import logo from "./assets/img/Mainlogo.gif"
function Footer() {
  return (
    <footer className="d-flex justify-content-around align-items-center">
        <section>
            <div className="logo">
                <img src={logo} alt="logo" width={170} />
            </div>
        </section>
        <section>
            <ul className="section-lists">
                <li>Instagram<i className="fa-brands fa-instagram"></i></li>
                <li>Linkedin<i className="fa-brands fa-linkedin"></i></li>
                <li>Facebook<i className="fa-brands fa-facebook"></i></li>
                <li>Youtube<i className="fa-brands fa-youtube"></i></li>
            </ul>
        </section>
        <section>
            <ul className="section-lists">
                <li>HAQQIMIZDA</li>
                <li>SİYASƏTİMİZ</li>
                <li>PROGRAMLAR</li>
                <li>VİZYONUMUZ</li>
            </ul>
        </section>
        <section>
            <ul className="section-lists">
            <li>MEDİA</li>
            <li>CONTACT US</li>
            <li>UYELİK</li>
            <li>Destekcilerimiz</li>
        </ul></section>
        <div className="copyright">All rights reserved. Copyright © 2022 </div>
    </footer>
  )
}

export default Footer