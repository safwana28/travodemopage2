import React, { useState } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const [activeBox, setActiveBox] = useState(null);

  const boxes = [
    {
      id: 1,
      title: 'Who we are',
      content: 'Leading healthcare facilitators with a mission to provide exceptional medical care and support to patients worldwide.'
    },
    {
      id: 2,
      title: 'What we do',
      content: 'Connect patients with world-class healthcare facilities and specialists, ensuring seamless medical journey and personalized care.'
    },
    {
      id: 3,
      title: (
        <>
          Who
          <br />
          we are & what
          <br />
          we do
        </>
      ),
      content: 'To bridge global healthcare gaps by providing accessible, high-quality medical solutions with compassion and expertise.'
    },
    {
      id: 4,
      title: 'Our Vision',
      content: 'To be the most trusted name in international healthcare facilitation, transforming lives through excellence in medical care.'
    }
  ];

  const handleBoxHover = (id) => {
    setActiveBox(id);
  };

  const handleBoxLeave = () => {
    setActiveBox(null);
  };

  return (
    <section className="about-section">
      <div className="about-grid">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`about-box ${activeBox === box.id ? 'active' : ''}`}
            onMouseEnter={() => handleBoxHover(box.id)}
            onMouseLeave={handleBoxLeave}
          >
            <div className="content-wrapper">
              <h2 className="box-title">{box.title}</h2>
              <p className="box-content">{box.content}</p>
            </div>
            <div className="hover-fill"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
