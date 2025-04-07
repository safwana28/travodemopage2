import React, { useEffect, useRef } from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;

    const handleScroll = () => {
      if (!section || !gallery) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top / window.innerHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        gallery.style.setProperty('--scroll', scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    {
      id: 1,
      src: '/images/Treatments/Cardiology.webp',
      alt: 'Cardiology',
      className: 'gallery-image image-1'
    },
    {
      id: 2,
      src: '/images/Treatments/Orthopedic.webp',
      alt: 'Orthopedic',
      className: 'gallery-image image-2'
    },
    {
      id: 3,
      src: '/images/Treatments/Oncology.webp',
      alt: 'Oncology',
      className: 'gallery-image image-3'
    },
    {
      id: 4,
      src: '/images/aboutus.webp',
      alt: 'About US',
      className: 'gallery-image image-4 expanding-image'
    },
    {
      id: 5,
      src: '/images/Treatments/cosmeticsurgery.webp',
      alt: 'Cosmetic Surgery',
      className: 'gallery-image image-5'
    }
  ];

  return (
    <section ref={sectionRef} className="gallery-section">

      <div ref={galleryRef} className="gallery-container">
        {images.map((image) => (
          <div key={image.id} className={image.className}>
            <div className="image-wrapper">
              <img src={image.src} alt={image.alt} />
              <div className="image-overlay">
                <h3>{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
