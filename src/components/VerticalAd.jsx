import React from 'react'
import { SiGooglenews } from "react-icons/si";

export default function VerticalAd() {
  return (
    <div className="w-full p-4">
    <div className="bg-white w-full flex items-center gap-x-2 bg-opacity-25 p-4 md:p-6 rounded-lg shadow-2xl">
      <span className=" text-black text-4xl">
        <SiGooglenews />
      </span>
      Susbscribe us for latest updates.
    </div>
  </div>
  )
}
