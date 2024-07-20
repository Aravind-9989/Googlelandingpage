import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Fast() {
  return (
    <div id='fast' style={{ marginBottom: "550px", position: "relative", top: "255px" }}>
      <center style={{position:"relative",bottom:"165px"}}>
        <h1>The 
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid black",
              borderRadius: "15px",
              width: "150px",
              padding: "5px",
              margin: "0 10px",
              background: "lightblue",
              verticalAlign: "middle",
              display: "inline-flex"
            }}
          >
            <img
              src="/images/12.png"
              alt="icon"
              style={{ height: "30px", width: "30px", marginRight: "10px" }}
            />
            <span style={{ fontSize: "18px", color: "black" }}>fast</span>
          </div>
          way to do
        </h1>
        <h1>things online</h1>
      </center>

<div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                overflow: 'hidden',
              }}
            >
              <video width="1500" autoPlay loop muted>
                <source src="/images/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/10.png"
              className="d-block w-100"
              style={{ height: '800px', objectFit: 'cover', width:"500px" }}
              alt="Image 10"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/11.png"
              className="d-block w-100"
              style={{ height: '800px', objectFit: 'cover' }}
              alt="Image 11"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Fast;
