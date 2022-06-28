import Bar from './components/Bar'
import img_logo from './imgs/Logo_apaizado.jpg';
import ImgGalery from './components/ImgGalery';
import './App.css';

function App() {  

  return (
    <div className=".container-fluid bg-dark text-white">
      <Bar/>
    {<img src={img_logo} className="img-fluid"/>}
      <ImgGalery/>
      <>
      <div className='container-fluid' style={{backgroundColor:'back', height:'80px'}}>
        
      </div>
      </>
    </div>
  )
}

export default App
