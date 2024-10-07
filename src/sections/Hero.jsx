import React from 'react'
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/button";
import { bottels, statistics } from "../constants";
import { a1 } from "../assets/images"
import BottleCard from "../components/BottleCard"

const Hero = () => {
  const [bigBottleImg, setBigBottleImg] = useState(a1);
  return (
    <section id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x'>
        <p className='text-xl font-montserrat text-[#ff6f00] mt-6 font-bold'>
          Our Summer collections
        </p>
        <h1 className='mt-9 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-stone-200 xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-[#ff7300] inline-block mt-3'>Camelbak</span> Bottles
        </h1>
        <p className='font-montserrat text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover the new bottle arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primaryy bg-hero bg-cover bg-center'>
        <img src={bigBottleImg} alt="" width={810}
          height={650}
          className='object-contain relative z-10' />
           <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {bottels.map((image, index) => (
          <div key={index}>
            <BottleCard
              index={index}
              imgURL={image}
              changeBigBottleImage={(Bottle) => setBigBottleImg(Bottle)}
              bigBottleImg={bigBottleImg}
            />
          </div>
        ))}
      </div>
      </div>
     
    </section>
  )
}

export default Hero