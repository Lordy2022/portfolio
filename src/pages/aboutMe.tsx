import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

export default function About () {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who Am I?</h2>
          <p className='py-2 text-gray-600'>
          BA Media graduate. I currently work in the Digital Technologies team at Nottingham Trent University. 
          I am actively seeking opportunities to expand my skills in software development; I have ambitions of securing a Junior Full Stack Developer position.
          </p>
          <p className='py-2 text-gray-600'>
          Since graduating, I have been independently studying coding/web development, gaining a foundational understanding of: HTML, CSS, Python, JavaScript, Typescript and React.
          I'm uploading my projects regularly on my GitHub page, which you can find linked here on my website.
          I have just finished studying the CS 106A - Programming Methodology course at Stanford University, topics focused on the engineering of computer applications.
          Emphasizing modern software engineering principles such as: object-oriented design, decomposition, encapsulation, abstraction and testing. Learning coding fundamentals through the Karel language and the wider course through Python.
          The Code in Place program provided me this knowledge after an intensive 7 week course. I was lucky enough to have been accepted out of just over 70,000 applications, with around a 10% of acceptance rate.
          The course was delivered by Chris Piech and Mehran Sahami, both Stanford University professors - as well as a wider team of section leaders from around the world.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src='/graduationPhoto.png' className='rounded-xl' width={500} height={300} alt='/' />
        </div>
      </div>
    </div>
  );
};

