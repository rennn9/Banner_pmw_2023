'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [bio, setBio] = useState('Thrive!')
  function handlerGantiBio(){
    setBio('Achieve!')
  }

  return (
    <div className='body'>
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
            <Image
              src="/assets/pp.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            <h1>Rendi WIjaya</h1>
            <div className="bio-nim-header-banner">
              <p>D121211020</p>
              <p>"Live, Love, {bio}"</p>
            </div>
          </div>
        </div>
        <div className="action-wrapper">
          <div className='action-button' onClick={handlerGantiBio}>
            <p>Halo!</p>
          </div>
        </div>
      </div>
    </div>
  )
}