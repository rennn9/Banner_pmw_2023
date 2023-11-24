'use client'

import { useState } from 'react'
import Image from 'next/image'
import '@/styles/home.css'

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('Rendi Wijaya');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setName(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

//   return (
//     <>
//       <div className="banner-container">
//         <div className="header-banner-wrapper">
//           <div className="profile-header-banner">
//             <Image
//               src="/assets/pp.png"
//               alt="Picture of the author"
//               fill
//               objectFit='contain'
//             />
//           </div>
//           <div className="content-header-banner">
//             <h1>{name}</h1>
//             <div className="bio-nim-header-banner">
//               <p>D121211020</p>
//               <p>"Live, Love, Achieve"</p>
//             </div>
//           </div>
//         </div>
//         <div className="action-wrapper">
//             <input
//               className='input-field'
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown}
//               placeholder="Masukkan Nama Kamu"
//             />
//             <button className='action-button' onClick={handleButtonClick}>Change!</button>
//         </div>
//       </div>
//     </>
//   )
// }

  return (
    <>
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
            <h1>{name}</h1>
            <div className="bio-nim-header-banner">
              <p>D121211020</p>
              <p>"Live, Love, Achieve"</p>
            </div>
          </div>
        </div>
      <div className="action-wrapper">
        <input
          className='input-field'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Masukkan Nama Kamu"
        />
        <button
          className={`action-button ${inputValue.trim() === '' ? 'disabled' : ''}`}
          onClick={handleButtonClick}
          disabled={!inputValue.trim()}
        >
          {inputValue.trim() === '' ? 'Disabled!' : 'Change!'}
        </button>
      </div>
    </div>
  </>
);
};
