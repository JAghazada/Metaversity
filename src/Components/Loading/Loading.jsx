import loading_gif from "./assets/img/Loading.gif"
import "./assets/css/loading.css"
function Loading() {
  return (
    <div className="loading-container">
      <img src={loading_gif} alt="logo" />
    </div>
  )
}

export default Loading