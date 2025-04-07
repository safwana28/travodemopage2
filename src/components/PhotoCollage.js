import React, { useEffect, useRef } from 'react';
import '../styles/PhotoCollage.css';

const PhotoCollage = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const images = imagesRef.current;

    const handleScroll = () => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 when section enters viewport, 1 when it leaves)
      const progress = Math.max(0, Math.min(1, 
        1 - (sectionTop + sectionHeight/2) / (windowHeight/2)
      ));

      // Apply transformations based on scroll progress
      images.forEach((img, index) => {
        if (!img) return;
        
        if (index === 4) { // Expanding image (fifth image)
          const scale = 1 + (progress * 2); // Scale up to 3x
          img.style.transform = `scale(${scale})`; // Remove translateX to expand equally
          img.style.zIndex = progress > 0.3 ? '10' : '1';
        } else {
          // Other images move outward and fade
          const direction = index < 4 ? -1 : 1;
          const translateX = progress * 200 * direction; // Increased movement to make room for expansion
          const scale = 1 - progress * 0.3;
          img.style.transform = `translateX(${translateX}%) scale(${scale})`;
          img.style.opacity = 1 - progress;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatments = [
    { 
      id: 1, 
      name: 'Cardiology', 
      image: '/images/Treatments/Cardiology.webp', 
      className: 'partial-hidden-left'
    },
    { 
      id: 2, 
      name: 'Orthopedic', 
      image: '/images/Treatments/Orthopedic.webp', 
      className: 'small-top'
    },
    { 
      id: 3, 
      name: 'Oncology', 
      image: '/images/Treatments/Oncology1.webp', 
      className: 'small-bottom'
    },

    { 
      id: 4, 
      name: 'Advanced Care', 
      image: '/images/Treatments/Oncology.webp', 
      className: 'expanding-image'
    },
    { 
      id: 5, 
      name: 'Spine Treatment', 
      image: '/images/Treatments/Oncology1.webp', 
      className: 'right'
    },
  ];

  return (
    <section ref={sectionRef} className="collage-section">
      <div className="collage-title">
        <h2>Medical Tourism Packages</h2>
        <p>World-class healthcare at your fingertips</p>
      </div>
      <div className="collage-container">
        <div className="collage-grid">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.id}
              ref={el => imagesRef.current[index] = el}
              className={`collage-item ${treatment.className}`}
            >
              <img src={treatment.image} alt={treatment.name} />
              <div className="image-overlay">
                <h3>{treatment.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage;
