"use client";
import "@/styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);

  const [inputValue, setInputValue] = useState('');

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

  const endpointAPI = "https://6555efd084b36e3a431eacd7.mockapi.io/rendi/api/v1/diary";

  async function getDiary() {
    const res = await axios.get(endpointAPI);
    const data = res.data;

    const judul = data.map((item) => item.judul);
    setJudul(judul);

    const isi_diary = data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div>
        <div className="action-wrapper">
        <input
          className='input-field'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Cari isi diary..."
        />
        <button
          className={`action-button ${inputValue.trim() === '' ? 'disabled' : ''}`}
          onClick={handleButtonClick}
          disabled={!inputValue.trim()}
        >
          {inputValue.trim() === '' ? 'Disabled!' : 'Search!'}
        </button>
      </div>

      {judul.length > 0 ? (
        
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${item}/${isiDiary[idx]}`}>
              
              <li key={idx}>
                <div className="diary-container">
                  <h1>{judul[idx]}</h1>
                  <p className="p-diary">{isiDiary[idx]}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        "API is loading"
      )}
    </div>
  );
}

// const [tulis, setTulis] = useState("");
// const [diary, setDiary] = useState([]);

// function handlerInputDiary(event) {
//   event.preventDefault();
//   setTulis(event.target.value);
// }

// function handlerSubmitDiary(event) {
//   setDiary(tulis);
//   console.log('isi diary:' + diary)
// }

// function handlerkeyEnter(e){
// }

// async function postDiary(){
//   const updateDiary = [...isData, tulis]
//   setData(updateDiary)
// }