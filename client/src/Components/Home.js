import React from 'react'

export default function Home() {
  return (
    <div className='Home'>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <h5 class="text-center">BILASPUR RAILWAY STATION</h5>
            <img src="https://i.ibb.co/Pt1h3nW/Whats-App-Image-2024-01-13-at-23-55-38.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" >
            <h5 class="text-center">HEAD OFFICE</h5>
            <img src="https://i.ibb.co/FV0w5jG/Whats-App-Image-2024-01-13-at-23-56-29.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" >
            <h5 class="text-center">LOBBY</h5>
            <img src="https://i.ibb.co/1Zs4s27/Whats-App-Image-2024-01-13-at-23-56-08.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
