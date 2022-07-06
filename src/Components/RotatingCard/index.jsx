import "./assets/css/rC.css"
function RotatingCard() {
  return (
    <div className="card">
      <div className="face front">
       <div>
       <h2>
          Peşəkar komandamızla özünüzü inkişaf etdirin

          Gələcəyinizi şəkilləndirin

        </h2>
        <h3>Gələcək karyeranızda sizə işıq olaq</h3>
        
       </div>

      </div>
      <div className="face back">
      <div>
       <h2>
       Ailəmizə  <br />
                    Qoşulun

        </h2>
        <h3>Peşəkar komandamızla özünüzü inkişaf etdirin</h3>
        <div className="d-flex jcc">
        <button className="btn-back">Lore Impsum</button>
        </div>
    
       </div>
      </div>
    </div>
  )
}

export default RotatingCard