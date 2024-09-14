import React from 'react'
import { reey, thunder, thunderB, generalSans, schabo, windsong,sansation, norwester, yellowTail, allura } from '@/app/style'

const one = () => {
  return (
    <>
        <div className="my-3"
              style={{
                  fontFamily: 'Parisienne'
              }}
          >
              <img src="https://i.ibb.co.com/MS1zFJq/Group-1.png" alt="Group-1"/>

          </div>
          <div className={`${reey.className} text-2xl mt-8 mb-6 text-[#C7253E]`}
          >
              Fahrana & Doni
          </div>
          <div className={`text-6xl tracking-tighter text-[#C7253E] leading-12 mb-4 font-extrabold ${norwester.className}`}
              style={{
              }}
          >
              OUR <br/>SPECIAL<br/> WEDDING
          </div>
          <div className="italic my-2"
              style={{
                  fontFamily: 'Livvic'
              }}
          >
              Love is composed of <br/>
              a single soul inhabiting two bodies.
          </div>
    </>
  )
}

export default one