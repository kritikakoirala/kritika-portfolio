import Heading from "./common/Heading";



const experiences = [
  {
    name: "Wellnify.ai",
    designation: "Full Stack Developer Intern",
    date: "May 2024 - October 2024",
    details: [
      "Developed a data-driven platform to analyze user behavior and enhance engagement through advanced visualizations.",
      "Analyzed complex datasets using Python and Jupyter Notebook to extract actionable insights for platform development.",
      "Optimized RESTful APIs with Flask and MySQL, reducing data retrieval latency and boosting system performance.",
      "Created dynamic visualizations with React.js and HighCharts to improve data comprehension and analytics communication."
    ]

  },
  {
    name: "Genius Systems",
    designation: "Software Developer",
    date: "May 2022 - August 2023",

    details: [
      "Led the development of a responsive IPTV device management portal using React.js and Redux for remote control and monitoring of 50+ device statistics.",
      "Integrated dynamic data visualizations with Chart.js to display device metrics like demographics, distribution, and trends, enhancing data comprehension for better decision-making.",
      "Created a continuous remote diagnosis portal with WebSockets, reducing error interpretation time by 20% and boosting operational efficiency."

    ]
  },
  {
    name: "Graphene Inc",
    designation: "Frontend Developer",
    date: "June 2021 - May 2022",

    details: [
      "Developed and maintained interactive, responsive UIs with HTML, CSS, and JavaScript, ensuring smooth navigation and cross-browser compatibility.",
      "Collaborated with UI/UX designers to turn Figma mockups into responsive web pages using Tailwind CSS, React Bootstrap, and Material UI, following design specs.",
      "Engineered a web blog app with Next.js and integrated Google Analytics for traffic analysis, showcasing full-stack expertise within a frontend framework.",
      "Enhanced website performance by optimizing images and applying caching strategies, achieving a 40% reduction in page load time."
    ]
  }
]

const Experiences = () => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/5 sm:w-full" id="experiences">
      <Heading heading={"Experiences"} />


      <div >

        {
          experiences?.map((exp, index) => {
            return (
              <div key={index} className="pb-10 px-4 experience-box">
                <h3 className="uppercase">{exp?.designation}</h3>
                <p className="text-sm py-3">{exp?.date}</p>
                <p className=" italic">{exp?.name}</p>

                {
                  exp?.details?.map((detail, idx) => {
                    return (
                      <ul key={idx} className="list-disc px-4 pt-3 text-justify">
                        <li className="tracking-wide">{detail}</li>
                      </ul>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>

  );
};

export default Experiences;
