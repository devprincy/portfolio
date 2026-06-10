import React from 'react';
import { useInView } from '../hooks/useInView';

const education = [
  {
    period: '2023 – 2026',
    degree: 'B.Sc. Information Technology',
    institution: "Pope's College, Sawyerpuram, Thoothukudi, Tamil Nadu",
    points: ['Specialising in Full Stack Web Development', 'Final year project: Resume Analyzer — AI-powered document analysis', 'Core subjects: DBMS, Web Technologies, Software Engineering'],
  },
  {
    period: 'Certifications',
    degree: 'Professional Courses',
    institution: 'Industry Certifications',
    points: ['Java Full Stack Development (FSD)', 'UI/UX Designing'],
  },
  {
    period: 'Interests',
    degree: 'Hobbies & Interests',
    institution: 'Beyond the Classroom',
    points: ['Learning new technologies and frameworks', 'Web designing and UI prototyping'],
  },
];

export default function Studies() {
  const [ref, visible] = useInView();

  return (
    <section id="studies" style={{ padding: '6rem 5%', background: '#112240' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Academic Background</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#ffffff' }}>Education & Certifications</h2>
          <div style={{ width: '60px', height: '2px', background: '#c9a84c', margin: '1.25rem auto 0' }} />
        </div>

        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {education.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '2rem', padding: '2rem 0', borderBottom: i < education.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', color: '#c9a84c', paddingTop: '0.25rem', letterSpacing: '0.05em' }}>{e.period}</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.3rem' }}>{e.degree}</h3>
                <div style={{ fontSize: '0.88rem', color: '#8892a4', marginBottom: '0.75rem' }}>{e.institution}</div>
                <ul style={{ listStyle: 'none' }}>
                  {e.points.map(p => (
                    <li key={p} style={{ fontSize: '0.85rem', color: '#8892a4', padding: '0.3rem 0 0.3rem 1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
