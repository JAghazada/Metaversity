import "./assets/css/MainBg.css"
function MainBg() {
  return (
   <>
   <div style={{width:"100%",height:"84px"}}></div>
    <div id="MainBgContainer">
      <div id="Texts">
        <div id="bgText">
          Trust an IDC leader to overcome digital talent gaps.
        </div>
        <div id="bgSubText">
          Compared with 21 vendors, IDC recognized Udacity for creating
          job-ready digital talent and delivering measurable business outcomes.
        </div>
        <div id="bgBtns">
          <button className="btn-bg" >
              lorem
          </button>
          <p className="btn-bg-n-t">Lorem, ipsum.</p>
        </div>

      </div>
      <div id="MainBgImg">
        <img width={500} src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5xXfZXeMOuLCuQtKVue4Fl/0da3f8ab1f7dee8bb4fb0fdf75859688/IDC_Artwork_Desktop__1__1_.png?fm=webp&q=100" alt="icon" />
      </div>
    </div>
    </>
  )
}

export default MainBg