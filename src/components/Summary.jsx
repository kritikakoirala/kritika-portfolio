import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Heading from "./common/Heading";
import { Badge } from "@/components/ui/badge"


const summary = [
  {
    name: "kritika koirala",
    email: "koirala.kritika09@gmail.com",

    details: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/kritikakoirala/",
        icon: <LinkedinIcon className="me-2" size={16} />
      },
      {
        name: "github",
        link: "https://github.com/kritikakoirala/",
        icon: <GithubIcon className="me-2" size={16} />
      }


    ]

  },

]

const education = [
  {
    name: "Masters of Computing and Data Analytics",

    date: "2023-2024"

  },
  {
    name: "Bachelors of (Hons) Computing",
    date: "2017-2021"
  }
]

const skills = [
  {
    name: "Frontend",
    skills: [
      "Javascript", "React.js", "TypeScript", "Next.js", "Redux", "Tailwindcss", "Bootstrap", "Shadcn UI",
    ]
  },
  {
    name: "Backend",
    skills: [
      "Node.js", "Flask"
    ]
  },
  {
    name: "Database",
    skills: [
      "MYSQL", "MongoDB"
    ]
  },

  {
    name: "APIs",
    skills: [
      "REST Apis", "GraphQL"
    ]
  },
]
const Summary = () => {
  return (
    <div className="w-full lg:w-2/5 px-0 md:px-5 lg:px-14" id="summary">
      <div>
        <Heading heading={"Summary"} />

        <div className="">

          {
            summary?.map((sum, index) => {
              return (
                <div key={index} className=" px-4 experience-box">

                  <p className=" uppercase pb-3 text-sm">{sum?.name}</p>
                  <p className="flex items-center justify-start text-[14px]">
                    <Mail className="me-2" size={16} />
                    {sum?.email}
                  </p>

                  {
                    sum?.details?.map((detail, idx) => {
                      return (
                        <a href={detail?.link} target="_blank" key={idx}>
                          <ul className="list-disc text-justify ">
                            <li className="tracking-wide flex items-center justify-start capitalize underline py-1">
                              {detail?.icon}
                              {detail?.name}
                            </li>
                          </ul>
                        </a>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>

      <div>
        <Heading heading={"Education"} />

        <div className="">

          {
            education?.map((education, index) => {
              return (
                <div key={index} className=" px-4 experience-box text-[14px]">

                  <p className=" italic">{education?.name}</p>

                  <p className=" font-bold italic pb-4">{education?.date}</p>
                </div>
              )
            })
          }
        </div>

      </div>


      <div className="pb-10">
        <Heading heading={"Skills"} />
        {
          skills?.map((skill, index) => {
            return (
              <div className="flex justify-center">
                <p className="w-1/5 text-sm font-bold">{skill?.name}</p>

                <div className="w-4/5">
                  {
                    skill?.skills?.map((sk, idx) => {
                      return (
                        <Badge className="me-3 mb-2">{sk}</Badge>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>



    </div>
  );
};

export default Summary;
