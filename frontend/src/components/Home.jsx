import React, { useEffect, useRef } from 'react';
import profilePhoto from '../assets/profile.jpg';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (heroRef.current) heroRef.current.style.opacity = '1';
    }, 100);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: '6rem 5% 4rem',
      background: '#0a1628',
    }}>
      {/* Background effects */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(26,115,232,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div ref={heroRef} style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
        maxWidth: '1100px', width: '100%',
        opacity: 0, transition: 'opacity 0.8s ease',
      }}>
        {/* Text */}
        <div>
          <div style={{ fontSize: '0.78rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#c9a84c' }} />
            Full Stack Developer
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.1, color: '#ffffff', marginBottom: '0.5rem' }}>
            Deva<br /><span style={{ color: '#c9a84c' }}>Princy J</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#8892a4', marginBottom: '1.5rem' }}>React.js · Node.js · Express.js · MongoDB</p>
          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px' }}>
            Motivated IT student crafting responsive, scalable web applications with clean code and intuitive user experiences. Seeking entry-level Full Stack Developer roles.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('projects')} style={{
              background: '#c9a84c', color: '#0a1628', padding: '0.8rem 2rem',
              borderRadius: '4px', border: 'none', fontWeight: 600, fontSize: '0.9rem',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.25s',
            }}
              onMouseEnter={e => e.target.style.background = '#e8c97a'}
              onMouseLeave={e => e.target.style.background = '#c9a84c'}>
              View Projects
            </button>
            <button onClick={() => scrollTo('contact')} style={{
              border: '1px solid rgba(201,168,76,0.25)', color: '#f5f0e8',
              padding: '0.8rem 2rem', borderRadius: '4px', background: 'transparent',
              fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif", transition: 'all 0.25s',
            }}
              onMouseEnter={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.color = '#c9a84c'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(201,168,76,0.25)'; e.target.style.color = '#f5f0e8'; }}>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Real Profile Photo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '320px', height: '380px' }}>
            {/* Decorative offset border */}
            <div style={{
              position: 'absolute', top: '16px', left: '16px', right: '-16px', bottom: '-16px',
              border: '1px solid #c9a84c', borderRadius: '12px', opacity: 0.4,
            }} />
            {/* Gold corner accents */}
            <div style={{ position: 'absolute', top: '-6px', left: '-6px', width: '24px', height: '24px', borderTop: '2px solid #c9a84c', borderLeft: '2px solid #c9a84c', borderRadius: '3px 0 0 0', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '24px', height: '24px', borderTop: '2px solid #c9a84c', borderRight: '2px solid #c9a84c', borderRadius: '0 3px 0 0', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: '-6px', left: '-6px', width: '24px', height: '24px', borderBottom: '2px solid #c9a84c', borderLeft: '2px solid #c9a84c', borderRadius: '0 0 0 3px', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: '-6px', right: '-6px', width: '24px', height: '24px', borderBottom: '2px solid #c9a84c', borderRight: '2px solid #c9a84c', borderRadius: '0 0 3px 0', zIndex: 2 }} />
            {/* Photo card */}
            <div style={{
              width: '100%', height: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(201,168,76,0.3)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <img
                src={profilePhoto}
                alt="Deva Princy J"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* Gradient overlay at bottom for name tag */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(10,22,40,0.92))',
                padding: '2rem 1rem 1rem',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>Deva Princy J</div>
                <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Full Stack Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
