import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const footerLinks = {
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Medical Tourism', url: '#' },
        { name: 'Healthcare Providers', url: '#' },
        { name: 'Treatment Options', url: '#' },
        { name: 'Travel Assistance', url: '#' },
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Documentation', url: '#' },
        { name: 'Guides', url: '#' },
        { name: 'FAQs', url: '#' },
        { name: 'Contact', url: '#' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', url: '#' },
        { name: 'Blog', url: '#' },
        { name: 'Partners', url: '#' },
        { name: 'Careers', url: '#' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy', url: '#' },
        { name: 'Terms', url: '#' },
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Travo Health+</h2>
          <p>Making quality healthcare accessible globally through medical tourism.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-links-container">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="footer-links-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Travo Health+. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
