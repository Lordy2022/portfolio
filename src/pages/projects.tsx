import React from 'react';
import HackingTheFender from '../../public/projectImages/HackingTheFender.png'
import KelvinWeather from '../../public/projectImages/KelvinWeather.jpg'
import magicBall8 from '../../public/projectImages/magicBall8.png'
import Typemart from '../../public/projectImages/Typemart.png'
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#308cec]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Hacking The Fender'
            backgroundImg={HackingTheFender} 
            projectUrl='/HackingTheFender'
            tech='Python'
          />
          <ProjectItem
            title='Kelvin Weather'
            backgroundImg={KelvinWeather}
            projectUrl='/KelvinWeather'
            tech='JavaScript'
          />
          <ProjectItem
            title='Magic 8 Ball'
            backgroundImg={magicBall8}
            projectUrl='/Magic8Ball'
            tech='Python'
          />
          <ProjectItem
            title='Typemart'
            backgroundImg={Typemart}
            projectUrl='/Typemart'
            tech='TypeScript + JavaScript'
          />
          <ProjectItem
            title='Adventure Game = Road to Programmer'
            backgroundImg={Typemart}
            projectUrl='/Typemart'
            tech='TypeScript + JavaScript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;