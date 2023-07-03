import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import HackingTheFenderImg from '../../public/projectImages/HackingTheFender.png'

const HackingTheFender = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={HackingTheFenderImg}
        alt='/'
      />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Hacking The Fender</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br/>
          <p>
            <p>"Hacking the Fender" is a Python project developed as part of the Codecademy coursework. It offers learners a unique opportunity to immerse themselves in a fictional cybersecurity incident, simulating a data breach scenario. The project provides practical experience in working with Python's file handling capabilities, data manipulation techniques, and exception handling mechanisms.
            </p>
            <br/>
            <h3>Features:</h3>
            <br/>
            <ol>
              <li>
              1. File I/O Operations: The project involves handling data stored in JSON files, mimicking sensitive user data. Python's built-in `json` module is used extensively for reading and writing JSON data to and from files, which is a common requirement in many real-world applications.
              </li>
              <br/>
              <li>
              2. Data Manipulation: The project requires manipulating and interpreting the data read from the JSON files. Learners will use Python's various data handling capabilities to extract, process, and filter this data, demonstrating Python's strengths as a data manipulation language.
              </li>
              <br/>
              <li>
              The "Hacking the Fender" project is a hands-on learning experience that allows learners to apply their Python skills in a practical context. Through file operations, data manipulation, and exception handling, students gain a deeper understanding of Python programming and its use in real-world cybersecurity contexts.
              </li>
              <br/>
            </ol>
          </p>
          <a
            href='https://github.com/Lordy2022/Hacking_The_Fender_Project'
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

export default HackingTheFender;