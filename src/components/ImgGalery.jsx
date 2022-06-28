

function ImgGalery() {
    return(
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src\imgs\C4.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C16.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C18.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C22.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C23.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C26.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C34.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C36.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="src\imgs\C40.jpg" className="d-block w-100" alt="..."/>
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