import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [hasDisplayed, setHasDisplayed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef(null);

  const fullText = "Your bridge to world class health care";
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
      flexDirection: 'column',
      padding: '0'
    }}>
      <header style={{
        padding: '1rem 5%',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
      }}>
       
      </header>
      <div className="hero-content" style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5%',
        flex: 1
      }}>
        <div className="hero-text" style={{
          maxWidth: '50%',
          color: '#fff',
          marginTop: '-100px'
        }}>
          <br></br><br></br><br></br><br></br>
          <h1 className="hero-title inline-block !text-lg !tracking-[0.34rem] !font-bold !font-playfair relative after:absolute after:left-0 after:-bottom-2.5 after:w-full after:h-0.5 after:bg-black">
            {text}
            {showCursor && !hasDisplayed && <span className="cursor">|</span>}
          </h1>
          <h1 className="text-white text-3xl font-light tracking-wide mt-2">
            {secondLine}
          </h1>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div style={{ marginTop: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px' }}>
            <button className="cta-button relative overflow-hidden px-12 py-6 text-lg font-medium tracking-wide hover:text-black transition-colors">
              Get a Free Consultation
              <span className="btn-fill"></span>
            </button>
            <button className="cta-button-gold relative overflow-hidden px-12 py-6 text-black text-lg font-medium tracking-wide">
              More Treatment
              <span className="btn-fill-white"></span>
            </button>
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
                 L30 15 L40 15 L43 5 L46 25 L49 5 L52 25 L55 15 L70 15
                 L80 15 L83 5 L86 25 L89 5 L92 25 L95 15 L110 15
                 L120 15 L123 5 L126 25 L129 5 L132 25 L135 15 L150 15
                 L160 15 L163 5 L166 25 L169 5 L172 25 L175 15 L190 15
                 L200 15 L203 5 L206 25 L209 5 L212 25 L215 15 L230 15
                 L240 15 L243 5 L246 25 L249 5 L252 25 L255 15 L270 15
                 L280 15 L283 5 L286 25 L289 5 L292 25 L295 15 L310 15
                 L320 15 L323 5 L326 25 L329 5 L332 25 L335 15 L350 15
                 L360 15 L363 5 L366 25 L369 5 L372 25 L375 15 L390 15
                 L400 15 L403 5 L406 25 L409 5 L412 25 L415 15 L430 15
                 L440 15 L443 5 L446 25 L449 5 L452 25 L455 15 L470 15
                 L480 15 L483 5 L486 25 L489 5 L492 25 L495 15 L510 15
                 L520 15 L523 5 L526 25 L529 5 L532 25 L535 15 L550 15
                 L560 15 L563 5 L566 25 L569 5 L572 25 L575 15 L590 15
                 L600 15 L603 5 L606 25 L609 5 L612 25 L615 15 L630 15
                 L640 15 L643 5 L646 25 L649 5 L652 25 L655 15 L670 15
                 L680 15 L683 5 L686 25 L689 5 L692 25 L695 15 L710 15
                 L720 15 L723 5 L726 25 L729 5 L732 25 L735 15 L750 15
                 L760 15 L763 5 L766 25 L769 5 L772 25 L775 15 L790 15 L1200 15"
                stroke="#0097A7"
                strokeWidth="0.7"
                fill="none"
                strokeDasharray="1200"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="heartbeat-path"
              />
              <path
                d="M0 15 
                 L30 15 L40 15 L43 5 L46 25 L49 5 L52 25 L55 15 L70 15
                 L80 15 L83 5 L86 25 L89 5 L92 25 L95 15 L110 15
                 L120 15 L123 5 L126 25 L129 5 L132 25 L135 15 L150 15
                 L160 15 L163 5 L166 25 L169 5 L172 25 L175 15 L190 15
                 L200 15 L203 5 L206 25 L209 5 L212 25 L215 15 L230 15
                 L240 15 L243 5 L246 25 L249 5 L252 25 L255 15 L270 15
                 L280 15 L283 5 L286 25 L289 5 L292 25 L295 15 L310 15
                 L320 15 L323 5 L326 25 L329 5 L332 25 L335 15 L350 15
                 L360 15 L363 5 L366 25 L369 5 L372 25 L375 15 L390 15
                 L400 15 L403 5 L406 25 L409 5 L412 25 L415 15 L430 15
                 L440 15 L443 5 L446 25 L449 5 L452 25 L455 15 L470 15
                 L480 15 L483 5 L486 25 L489 5 L492 25 L495 15 L510 15
                 L520 15 L523 5 L526 25 L529 5 L532 25 L535 15 L550 15
                 L560 15 L563 5 L566 25 L569 5 L572 25 L575 15 L590 15
                 L600 15 L603 5 L606 25 L609 5 L612 25 L615 15 L630 15
                 L640 15 L643 5 L646 25 L649 5 L652 25 L655 15 L670 15
                 L680 15 L683 5 L686 25 L689 5 L692 25 L695 15 L710 15
                 L720 15 L723 5 L726 25 L729 5 L732 25 L735 15 L750 15
                 L760 15 L763 5 L766 25 L769 5 L772 25 L775 15 L790 15 L1200 15"
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
            <source src="/videos/heartvideo.webm" type="video/webm"/>
            <source src="/videos/video6.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
