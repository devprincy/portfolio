import React from 'react';
import { useInView } from '../hooks/useInView';

const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Design'],
  Backend: ['Node.js', 'Express.js', 'REST API', 'MongoDB'],
  Tools: ['VS Code', 'Figma', 'UI/UX', 'SDLC', 'Git'],
  'Soft Skills': ['Communication', 'Teamwork', 'Adaptability', 'Problem Solving'],
};

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" style={{ padding: '6rem 5%', background: '#112240' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Get to know me</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#ffffff' }}>About Me</h2>
          <div style={{ width: '60px', height: '2px', background: '#c9a84c', margin: '1.25rem auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto', alignItems: 'start' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: '#ffffff', marginBottom: '1rem' }}>Turning Ideas Into Interfaces</h3>
            <p style={{ color: '#8892a4', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              I'm an Information Technology student at Pope's College, Thoothukudi, passionate about building full-stack web applications that are both functional and delightful to use.
            </p>
            <p style={{ color: '#8892a4', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              With hands-on experience in React.js, Node.js, Express.js and MongoDB, I enjoy the complete journey — from designing REST APIs to crafting responsive UIs.
            </p>
            <p style={{ color: '#8892a4', lineHeight: 1.85, fontSize: '0.97rem' }}>📍 Thoothukudi, Tamil Nadu &nbsp;·&nbsp; 🗣 Tamil, English</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2rem' }}>
              {[['1+', 'Project Shipped'], ['2', 'Certifications'], ['6+', 'Technologies'], ['2026', 'Graduating']].map(([num, label]) => (
                <div key={label} style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#c9a84c' }}>{num}</div>
                  <div style={{ fontSize: '0.78rem', color: '#8892a4', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1.5rem' }}>Technical Skills</h4>
            {Object.entries(skills).map(([cat, tags]) => (
              <div key={cat} style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#8892a4', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#f5f0e8', padding: '0.3rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
