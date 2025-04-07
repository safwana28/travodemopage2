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
      title: (
        <>
          Empowering Global
          <br />
          Patients Through
          <br />
          <span>Indian Medical Excellence</span>
        </>
      ),
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
      content: 'we are more than a medical facilitator — we are your trusted health partner across borders.We specialize in connecting international patients with India’s top hospitals, renowned doctors, and personalized treatment plans. From your very first inquiry to post-treatment recovery, we ensure a seamless, compassionate journey that blends world-class healthcare with cultural warmth.'
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
