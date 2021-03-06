import im2 from '../imgs/C16.jpg';
import im3 from '../imgs/C18.jpg';
import im4 from '../imgs/C22.jpg';
import im5 from '../imgs/C23.jpg';
import im6 from '../imgs/C26.jpg';
import im7 from '../imgs/C34.jpg';
import im8 from '../imgs/C36.jpg';
import im9 from '../imgs/C40.jpg';

function ImgGalery() {
    return(
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      
      <div className="carousel-inner">
       
        <div className="carousel-item">
          <img src={im2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={im3} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item active">
          <img src={im4} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={im5} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={im6} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={im7} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={im8} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={im9} className="d-block w-100" alt="..."/>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    );
}
export default ImgGalery;