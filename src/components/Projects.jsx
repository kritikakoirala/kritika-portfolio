import southwest from '../assets/southwest-dashboard.png'
import ecommerce from '../assets/ecommerce.png'
import banking from '../assets/banking.png'
import novatec from '../assets/novatec-landing.png'
import prompt from '../assets/prompt.png'
import fitness from '../assets/fitness.png'

import { ArrowUpRight } from 'lucide-react';
import Heading from './common/Heading'

const projects = [
  {
    name: "SouthWest-Properties",
    image: southwest,
    link: "https://github.com/kritikakoirala/SouthWest-Properties"
  },
  {
    name: "Shopcart Ecommerce",
    image: ecommerce,
    link: "https://github.com/kritikakoirala/ecommerce_clone"
  },

  {
    name: "Banking App",
    image: banking,
    link: "https://github.com/kritikakoirala/banking_app"
  },


  {
    name: "EvoGym",
    image: fitness,
    link: "https://github.com/kritikakoirala/fitness-typescript"
  },
  {
    name: "NovaTec",
    image: novatec,
    link: "https://github.com/kritikakoirala/banking_app"
  },
  {
    name: "Prompt AI",
    image: prompt,
    link: "https://github.com/kritikakoirala/promptai"
  },


]

const Projects = () => {
  return (
    <div id='projects'>
      <Heading heading={"Projects"} />



      <p className='pb-6 text-sm font-bold'>All the projects showcased were created as part of my learning journey, utilizing resources like YouTube and various online tutorials.</p>

      <div className='flex flex-wrap items-center gap-15 gap-y-20 justify-center'>
        {
          projects && projects?.map((project, index) => {
            return (

              <div key={index} className='bg-white shadow rounded-lg w-90 h-70 '>
                <img src={project?.image} alt={project?.name} className='h-full w-full object-contain' />

                <a href={project?.link} target='_blank' className='underline text-sm'>
                  <p className='py-3 tracking-wide cursor-pointer flex'>

                    <span>{project?.name}</span>
                    <span className='text-blue'>
                      <ArrowUpRight size={16} color='blue' />
                    </span>
                  </p>
                </a>
              </div>)
          })
        }

      </div>
    </div>
  );
};

export default Projects;
