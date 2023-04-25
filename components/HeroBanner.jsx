import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Cerramics</p>
        <h3>mid</h3>
        <img src="" alt="ceramic" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Button text</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
