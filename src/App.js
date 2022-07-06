
import Footer from "Components/Footer/Footer";
import Loading from "Components/Loading/Loading";
import { useEffect, useState } from "react";
import MainBg from "./Components/MainBg";
import Navbar from "./Components/Navbar";
import SubBg from "./Components/SubBg";
function App() {
const [loading,setLoading]  = useState(true);
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])

  return (
    <div className="App">
      {loading ? <Loading/> :
    <>
    <Navbar/>  
    <MainBg/>
    <SubBg/>
    <Footer/></> }
    </div>
  );
}

export default App;
