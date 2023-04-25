import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Ceramics of Morocco</Link>
      </p>

      <button className="cart-icon" type="button" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>
    </div>
  )
}

export default NavBar
