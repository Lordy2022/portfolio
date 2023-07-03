import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import TypemartImg from '../../public/projectImages/Typemart.png'

const Typemart = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={TypemartImg}
        alt='/'
      />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Typemart</h2>
          <h3>TypeScript + JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <h2>Overview</h2>
          <br/>
          <p>
            <p>Project Overview: The "TypeMart" project, a part of Codecademy's TypeScript coursework, is a practical application aimed at demonstrating the power and utility of TypeScript in modern web development. As an e-commerce app, "TypeMart" provides an excellent opportunity for learners to explore TypeScript's features in the context of a realistic project.
            </p>
            <br/>
            <h3>Features:</h3>
            <br/>
            <ol>
              <li>
              1. Strong Typing: A central aspect of this project is the use of TypeScript's strong typing to create robust, reliable code. The application uses interfaces and types to define the shape of data within the app, enhancing code readability and predictability.
              </li>
              <br/>
              <li>
              2. Classes and Objects: The "TypeMart" project employs TypeScript's classes to define components and services, exploring the language's OOP (Object-Oriented Programming) capabilities. This includes understanding concepts like inheritance and encapsulation.
              </li>
              <br/>
              <li>
              3. Generics: Depending on the project's complexity, it may employ TypeScript's generics to create reusable components and functions, showcasing one of TypeScript's most powerful features.
              </li>
              <br/>
              <li>
              4. Modules: The application uses TypeScript's module system to organize and structure the code, enhancing its maintainability.
              </li>
              <br/>
              <li>
              5. Integration with JavaScript Frameworks: The project demonstrates how TypeScript can be used in conjunction with modern JavaScript frameworks, like React or Angular, to build more robust and scalable applications.
              </li>
              <br/>
            </ol>
          </p>
          <a
            href='https://github.com/Lordy2022/TypeMart-Codecademy-Project'
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
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
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

export default Typemart;