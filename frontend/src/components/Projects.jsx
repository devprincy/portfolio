import React from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    icon: '🔍',
    year: '2026',
    title: 'HabitForge',
desc: 'A full-stack habit tracking application that helps users build and maintain daily routines through progress monitoring, streak tracking, and personalized habit management. Features secure authentication, responsive dashboards, and real-time habit updates.',
tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Tailwind CSS'],
    link: 'https://major-six.vercel.app/',
    linkText: 'View Live →',
  },
  {
    icon: '🌐',
    year: '2026',
    title: 'Portfolio Website',
    desc: 'This professional personal portfolio built with React.js frontend and Node.js backend — showcasing projects, skills and experience with an integrated live contact form.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Nodemailer'],
    link: '#contact',
    linkText: 'Contact Me →',
  },
];

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="projects" style={{ padding: '6rem 5%', background: '#0a1628' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>What I've built</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#ffffff' }}>Projects</h2>
          <div style={{ width: '60px', height: '2px', background: '#c9a84c', margin: '1.25rem auto 0' }} />
          <p style={{ color: '#8892a4', fontSize: '1rem', marginTop: '0.75rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>Real-world projects built with modern full-stack technologies.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#112240',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.15)'}`,
        borderRadius: '12px', padding: '2rem',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
        transitionDelay: `${delay}s`,
      }}
    >
      {hovered && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
      )}
      <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.icon}</div>
      <span style={{ fontSize: '0.75rem', color: '#c9a84c', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>{project.year}</span>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>{project.title}</h3>
      <p style={{ color: '#8892a4', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{ background: 'rgba(26,115,232,0.1)', border: '1px solid rgba(26,115,232,0.25)', color: '#7eb8f7', padding: '0.25rem 0.7rem', borderRadius: '4px', fontSize: '0.75rem' }}>{t}</span>
        ))}
      </div>
      <a href={project.link} target={project.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
        style={{ color: '#c9a84c', fontSize: '0.85rem', fontWeight: 500 }}>
        {project.linkText}
      </a>
    </div>
  );
}
