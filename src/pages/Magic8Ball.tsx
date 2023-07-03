import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Magic8BallImg from '../../public/projectImages/magicBall8.png'

const Magic8Ball = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={Magic8BallImg}
        alt='/'
      />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Magic 8 Ball</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <h2>Overview</h2>
          <br/>
          <p>
            <p>"Project Overview: The "Magic 8 Ball" is an intriguing project developed using Python, as part of Codecademy's learning material. Inspired by the traditional Magic 8-Ball toy, this project provides learners with a chance to build a digital version of the game that can simulate providing mystical advice or predicting the future.
            </p>
            <br/>
            <h3>Features:</h3>
            <br/>
            <ol>
              <li>
              1. User Interaction: The project encourages user interaction by allowing users to ask a question, simulating the real-world interaction with a Magic 8 Ball toy. The use of Python's input and print functions is central to this feature.
              </li>
              <br/>
              <li>
              2. Control Flow: Depending on the project's complexity, it may use basic control flow structures like if-elif-else statements or switch cases to determine the answer the Magic 8 Ball gives, promoting the understanding of conditional logic in Python.
              </li>
              <br/>
              <li>
              3. Randomness: To provide varying answers like a real Magic 8 Ball, the project makes use of Python's random module. This demonstrates the capability of Python to handle random numbers and selection.
              </li>
              <br/>
              <li>
              4. Function Usage: Depending on the project scope, it may also include the use of functions to encapsulate the logic for generating the Magic 8 Ball's responses. This offers students a hands-on experience with Python's functions and their practical use in larger programs.
              </li>
            </ol>
          </p>
          <a
            href='https://github.com/Lordy2022/Magic_8-Ball_Project'
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

export default Magic8Ball;