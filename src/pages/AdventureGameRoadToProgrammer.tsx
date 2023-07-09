import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import AdventureGameImg from '../../public/projectImages/AdventureGame.png'

const AdventureGame = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={AdventureGameImg}
        alt='/'
      />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> Adventure Game - Road to Programmer</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br/>
          <p>
            <ol>
              <li>"Adventure Game - Road to Progammer" is a Python programme, which I developed for my final Code in Place coursework project, as part of Stanford University's CS106A course.
                The project is a text-based adventure game, where you choose your own path to become a programmer.
                The game immerses players in a dynamic narrative and presents the player with different choices they have to make to progress in the game.
              </li>
              <br/>
              <li>
                 I built the code independently, using the Python skills I had the opportunity to develop during the course. 
                  The game is built using Python's built-in functions, including print(), input(), if/else statements, and functions. 
              </li>
              <br/>
            </ol>
          </p>
          <a
            href='https://github.com/Lordy2022/Adventure-Game-Road-to-Progammer'
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
                <RiRadioButtonFill className='pr-1' /> Python
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

export default AdventureGame;