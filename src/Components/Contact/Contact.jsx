import "./assets/css/contact.css"
function Contact() {
  // const contactInputs = [
  //   {
  //     slug:0,
  //     placeholder:"Ad",
  //     class:"md-6 lg-6"
  //   } ,{
  //     slug:1,
  //     placeholder:"Soyd",
  //     class:"md-6 lg-6"
  //   } ,{
  //     slug:2,
  //     placeholder:"Email",
  //     class:"md-12"
  //   }
  // ]
  return (
    <section style={{position:'relative'}} className="contact-section"  >
  
    <div className="container">
      <section position="top-center" />
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="contact-wrap w-100 p-lg-5 p-4">
                  <h3 className="mb-4">Bize yazin</h3>
                  <form
                    id="contactForm"
                    className="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Ad"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Movzu"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            type="text"
                            className="form-control"
                            name="message"
                            placeholder="Mesaj"
                            cols="30"
                            rows="6"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Mesaj gonder"
                            className="btn btn-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-wrap w-100 p-lg-5 p-4 img">
                  <h3>Elaqe</h3>
                  <p className="mb-4">
                    Sizin goruslerinize acigiq
                  </p>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Adres:</span> Baki Xezer denizi sahili
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Telefon:</span>
                        <a href="tel://123456789">+994 333 33 33</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Email:</span>
                        <a href="mailto:info@yoursite.com">
                          info@metaversity.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Websayt:</span>
                        <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact