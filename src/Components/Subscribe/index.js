import "./assets/css/subscribe.css"
function Subscribe({paragraph,button_text}) {
  return (
    <div className="d-flex justify-content-around subscribe-wrapper align-items-center">
            <p>{paragraph}</p>
            <button className='sub-us-btn'>{button_text}</button>
    </div>
  )
}

export default Subscribe