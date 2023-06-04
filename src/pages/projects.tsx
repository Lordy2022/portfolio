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
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={HackingTheFender} 
            projectUrl='/HackingTheFender'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={KelvinWeather}
            projectUrl='/KelvinWeather'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={magicBall8}
            projectUrl='/Magic8Ball'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={Typemart}
            projectUrl='/Typemart'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;