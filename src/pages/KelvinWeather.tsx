import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import KelvinWeatherImg from '../../public/projectImages/KelvinWeather.jpg'

const KelvinWeather = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={KelvinWeatherImg}
        alt='/'
      />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Kelvin Weather</h2>
          <h3>JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <h2>Overview</h2>
          <br/>
          <p>
            <p> The Kelvin Weather project is a simple, yet effective, demonstration of foundational JavaScript concepts and their applications. This project focuses on the task of converting a temperature measured in Kelvin to both Celsius and Fahrenheit scales using core JavaScript features.
            </p>
            <br/>
            <ol>
              <li>
              In this project, the initial temperature is defined in Kelvin. The goal is to perform operations to convert this temperature first to Celsius, and then to Fahrenheit. The conversions use basic arithmetic operations like subtraction and multiplication, and showcase the use of variables to store and manipulate data.
              </li>
              <br/>
              <li>
              The Kelvin temperature is converted to Celsius by subtracting 273 from it. To convert Celsius to Fahrenheit, the Celsius temperature is multiplied by 9/5 and then 5 is added. The resulting Fahrenheit temperature is then rounded down using the Math.floor method to provide a whole number for simplicity and readability.
              </li>
              <br/>
              <li>
              This project helps to reinforce understanding of basic JavaScript syntax and operations, variable use, and the application of built-in JavaScript methods. It offers a practical example of how JavaScript can be used to perform calculations and manipulate data in ways that are applicable to real-world scenarios.
              </li>
            </ol>
          </p>
          <a
            href='https://github.com/Lordy2022/Kelvin_Weather_Project'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-1 h-32'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default KelvinWeather;