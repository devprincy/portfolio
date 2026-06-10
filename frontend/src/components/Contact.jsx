import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();
  const [phoneModal, setPhoneModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  return (
    <section id="contact" style={{ padding: '6rem 5%', background: '#0a1628' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Let's Connect</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#ffffff' }}>Contact Me</h2>
          <div style={{ width: '60px', height: '2px', background: '#c9a84c', margin: '1.25rem auto 0' }} />
          <p style={{ color: '#8892a4', fontSize: '1rem', marginTop: '0.75rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>Available for entry-level Full Stack Developer or Web Developer roles.</p>
        </div>

        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Info - centered */}
          <div style={{ background: '#112240', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', textAlign: 'center' }}>Get In Touch</h3>
            
            <div style={{ marginTop: '2rem' }}>
              {[
                { icon: '📧', label: 'Email', value: 'devaprincy2005@gmail.com', onClick: () => setEmailModal(true) },
                { icon: '📱', label: 'Phone', value: '+91 9566123991', onClick: () => setPhoneModal(true) },
                { icon: '📍', label: 'Location', value: 'Thoothukudi, Tamil Nadu' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ color: '#8892a4', fontSize: '0.73rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{item.label}</div>
                    {item.onClick
                      ? <span onClick={item.onClick} style={{ color: '#f5f0e8', fontSize: '0.95rem', cursor: 'pointer' }}>{item.value}</span>
                      : <span style={{ color: '#f5f0e8', fontSize: '0.95rem' }}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone Modal */}
      {phoneModal && (
        <div onClick={() => setPhoneModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#112240', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '16px', padding: '2rem', width: '320px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'white', marginBottom: '0.5rem' }}>+91 9566123991</h3>
            <p style={{ color: '#8892a4', fontSize: '0.88rem', marginBottom: '1.5rem' }}>How would you like to connect?</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="https://wa.me/919566123991" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>WhatsApp</a>
              <a href="tel:+919566123991" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Call</a>
            </div>
            <button onClick={() => setPhoneModal(false)} style={{ background: 'none', border: 'none', color: '#8892a4', marginTop: '1.25rem', cursor: 'pointer', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {emailModal && (
        <div onClick={() => setEmailModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#112240', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '16px', padding: '2rem', width: '320px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✉</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'white', marginBottom: '0.5rem' }}>devaprincy2005@gmail.com</h3>
            <p style={{ color: '#8892a4', fontSize: '0.88rem', marginBottom: '1.5rem' }}>How would you like to reach out?</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="mailto:devaprincy2005@gmail.com" style={{ background: '#EA4335', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Gmail App</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devaprincy2005@gmail.com" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Web Mail</a>
            </div>
            <button onClick={() => setEmailModal(false)} style={{ background: 'none', border: 'none', color: '#8892a4', marginTop: '1.25rem', cursor: 'pointer', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
}