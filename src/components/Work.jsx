import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/static/images/aerosync.png',
      title: 'AeroSync: A Flight Guide',
      tags: ['API', 'AI-ML', 'FLASK'],
      projectLink: 'https://github.com/Malvericus/Aerosync'
    },
    {
      imgSrc: '/static/images/reverb.png',
      title: 'SIT Reverb 24',
      tags: ['Web Design', 'UI/UX'],
      projectLink: 'https://reverbfest.in/'
    },
    {
      imgSrc: '/static/images/acm.png',
      title: 'SIT ACM Website',
      tags: ['NextJS', 'Tailwind'],
      projectLink: 'https://acmnextjs.vercel.app/'
    },
    {
      imgSrc: '/static/images/studio.png',
      title: 'Studio Booking Site',
      tags: ['Java Servlet', 'JSP'],
      projectLink: 'https://github.com/Malvericus/StudioBookingSystem'
    },
    {
      imgSrc: '/static/images/sl.png',
      title: 'VedicConnect',
      tags: ['NextJS', 'API', 'E-Learning'],
      projectLink: 'https://github.com/Malvericus/service-learning-project'
    },
    {
      imgSrc: '/static/images/nest.png',
      title: 'NestMate',
      tags: ['React', 'HonoJS', 'Cloudflare'],
      projectLink: 'https://nestmate.netlify.app/'
    },
  ];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
                {works.map(({imgSrc, title, tags, projectLink },key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc} 
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work