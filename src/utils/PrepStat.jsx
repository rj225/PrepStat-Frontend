import React from 'react'
import { Link } from 'react-router-dom'

export default function PrepStat() {
  return (
    <Link to='/'>
    <div className='flex items-center justify-center'>
    <h1 className="text-[#ff7b00] font-serif">Prep</h1>
    <h1 className="text-[#63423a] font-serif">Stat</h1>
    </div>
    </Link>
  )
}
