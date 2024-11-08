import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 30
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];
  

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I'm Malvika, A third year computer science student. Or in other words, an ambitious youth, who
            dabbles in all sorts of programming languages and tools. Here to create software
            solutions for every challenge and problem. It is in my nature to be diligent, and
            above all, to have a strong Socratic tendency to explore.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img src="/images/logo.png" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />

          </div>

        </div>
      </div>
    </section>
  )
}

export default About