import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrepStat() {

  const navigate = useNavigate();

  const clickHandler = (e) =>{
    e.preventDefault();
    sessionStorage.setItem('selectedMenuKey', 1);
    navigate('/');
  }

  return (
    <div className='flex items-center cursor-pointer justify-center' onClick={clickHandler}>
    <h1 className="text-[#ff7b00] font-serif">Prep</h1>
    <h1 className="text-[#63423a] font-serif">Stat</h1>
    </div>
  )
}
