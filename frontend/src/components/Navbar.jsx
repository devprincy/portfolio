import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, width: '100%', zIndex: 1000,
    background: 'rgba(10,22,40,0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(201,168,76,0.25)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 5%', height: '64px',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem', color: '#c9a84c', letterSpacing: '0.04em',
    cursor: 'pointer',
  },
  links: {
    display: 'flex', gap: '2rem', listStyle: 'none',
  },
  link: {
    color: '#8892a4', fontSize: '0.875rem', fontWeight: 500,
    letterSpacing: '0.05em', cursor: 'pointer', transition: 'color 0.2s',
    background: 'none', border: 'none', fontFamily: "'DM Sans', sans-serif",
  },
  cta: {
    background: 'transparent', border: '1px solid #c9a84c',
    color: '#c9a84c', padding: '0.45rem 1.2rem', borderRadius: '4px',
    fontSize: '0.85rem', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500, transition: 'all 0.25s',
  },
};

const links = ['home', 'about', 'projects', 'studies', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const id of links) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) { setActive(id); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => scrollTo('home')}>DP</div>
      <ul style={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button
              style={{ ...styles.link, color: active === l ? '#c9a84c' : '#8892a4' }}
              onClick={() => scrollTo(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      {/* <button style={styles.cta} onClick={() => scrollTo('contact')}
        onMouseEnter={e => { e.target.style.background='#c9a84c'; e.target.style.color='#0a1628'; }}
        onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='#c9a84c'; }}>
        Hire Me
      </button> */}
    </nav>
  );
}
