import Heading from "./common/Heading";
import novatec from '../assets/novatec-landing.png'
import analyzer from '../assets/analyzer.png'
import { ArrowUpRight } from 'lucide-react';



const Designs = () => {



  const projects = [
    {
      name: "Resume Analyzer",
      image: analyzer,
      link: "https://www.figma.com/design/EPX3Zuv2BaiakMPADEG1Mi/resume-analyser-project?node-id=0-1&p=f&t=EHZAvZBEA7UhxJcq-0"
    },
    // {
    //   name: "NovaTec",
    //   image: novatec,
    //   link: "https://github.com/kritikakoirala/banking_app"
    // },

  ]
  return (
    <div id='designs'>
      <Heading heading={"Designs"} />
      <p className='pb-6 text-sm font-bold'>All the designed showcased were created as part of my learning journey, utilizing resources like YouTube and various online tutorials.</p>

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

export default Designs;
