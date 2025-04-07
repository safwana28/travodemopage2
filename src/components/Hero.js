import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [hasDisplayed, setHasDisplayed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef(null);

  const fullText = "Expert Care with a Heart—Healing Beyond Borders";
  const secondLine = "";

  useEffect(() => {
    let currentIndex = 0;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setHasDisplayed(true);
      }
    }, 100);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = '#cba632';
      boxRef.current.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = 'transparent';
      boxRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <section className="hero" style={{ 
      position: 'relative', 
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%'
    }}>
      <div className="hero-content" style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="hero-text" style={{
          maxWidth: '50%',
          color: '#fff',
          marginTop: '-100px'
        }}>
          
          <h1 className="hero-title inline-block !text-lg !tracking-[0.34rem] !font-bold !font-playfair relative after:absolute after:left-0 after:-bottom-2.5 after:w-full after:h-0.5 after:bg-black">
            {text}
            {showCursor && !hasDisplayed && <span className="cursor">|</span>}
          </h1>
          <h1 className="text-white text-3xl font-light tracking-wide mt-2">
            {secondLine}
          </h1>

          <div className="flex flex-col items-start mt-8">
            <button className="cta-button relative overflow-hidden px-12 py-6 text-lg font-medium tracking-wide mb-6 hover:text-black transition-colors">
              Get a Free Consultation
              <span className="btn-fill"></span>
            </button>
            <button className="cta-button-gold relative overflow-hidden px-12 py-6 text-black text-lg font-medium tracking-wide">
              More Treatment
              <span className="btn-fill-white"></span>
            </button>
            <br></br><br></br>
          </div>

          <div
            ref={boxRef}
            className={`border border-[#cba632] rounded-sm px-6 py-3 mt-16 w-44 text-center box cursor-pointer transition-all duration-300 ${
              hasDisplayed ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          </div>

          {/* Heartbeat Line */}
          <div className="heartbeat-line">
            <svg viewBox="0 0 1200 30" preserveAspectRatio="none">
              <path
                d="M0 15 
                   L30 15 
                   L35 15 
                   L38 5 
                   L41 25 
                   L44 5 
                   L47 25 
                   L50 15 
                   L55 15
                   L65 15 
                   L68 5 
                   L71 25 
                   L74 5 
                   L77 25 
                   L80 15 
                   L85 15
                   L95 15 
                   L98 5 
                   L101 25 
                   L104 5 
                   L107 25 
                   L110 15 
                   L115 15
                   L125 15 
                   L128 5 
                   L131 25 
                   L134 5 
                   L137 25 
                   L140 15 
                   L145 15
                   L155 15 
                   L158 5 
                   L161 25 
                   L164 5 
                   L167 25 
                   L170 15 
                   L1200 15"
                stroke="#0097A7"
                strokeWidth="0.7"
                fill="none"
                strokeDasharray="1200"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="heartbeat-path"
              />
            </svg>
          </div>
        </div>
        <div className="hero-video" style={{ 
          position: 'relative',
          width: '45%',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          >
            <source src="/videos/video2.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
