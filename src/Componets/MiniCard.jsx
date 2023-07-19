import React, {useEffect, useState} from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

function MiniCard({time, temp, iconString}) {
  const [icon, setIcon] = useState();
    const celsius = temp;
    const fahrenheit = Math.round((celsius * 9/5) + 32);

 useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])


  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', {weekday: 'long'}).split(" ")[0]}
      </p>
      <div className='w-full flex justify-center items-center flex-1'>
        {
          icon?
          <img src={icon} alt="" className='w-[4rem] h-[4rem]' />
          :
          <img src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' alt="" className='w-[4rem] h-[4rem]' />
        }
      </div>
      <p className='text-center font-bold'>{fahrenheit.toFixed(0)} &deg;F</p>
    </div>
  )
}

export default MiniCard
