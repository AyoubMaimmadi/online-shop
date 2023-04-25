import Link from 'next/link'
import React from 'react'
import { urlFor } from '../Lib/client'

const HeroBanner = ({ HeroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{HeroBanner?.smallText}</p>
        <h3>
          {HeroBanner?.midText}{' '}
          <span>
            <h5>{HeroBanner?.discount}</h5>
          </span>
        </h3>
        <h1>{HeroBanner?.largeText1}</h1>
        <img
          src={urlFor(HeroBanner?.image)}
          alt="ceramic"
          className="hero-banner-image"
        />
        <div>
          <Link href={'/product/${HeroBanner.product}'}>
            <button type="button">{HeroBanner?.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{HeroBanner?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
