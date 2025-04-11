import React, { useState } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const [activeBox, setActiveBox] = useState(null);

  const boxes = [
    {
      id: 1,
      title: 'Empowering Global Patients Through Indian Medical Excellence',
      content: ''
    },
    {
      id: 2,
       title: 'Empowering Global Patients Through Indian Medical Excellence',
      content: ''
     
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
      content: ''
    },
    {
      id: 4,
      content: 'Our commitment extends beyond medical care. We understand the unique challenges of international healthcare journeys, and our dedicated team provides comprehensive support at every step. From visa assistance to accommodation arrangements, we ensure a worry-free experience for our global patients and their families.'
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
              {box.title && <h2 className="box-title">{box.title}</h2>}
              {box.content && <p className="box-content">{box.content}</p>}
            </div>
            <div className="hover-fill"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
