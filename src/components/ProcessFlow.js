import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/ProcessFlow.css';

const ProcessFlow = () => {
  const controls = useAnimation();

  const steps = [
    {
      id: 1,
      title: 'Upload Reports',
      icon: 'fa-file-medical',
      screen: 'upload-screen',
      description: 'Share your medical reports securely'
    },
    {
      id: 2,
      title: 'Doctor Review',
      icon: 'fa-user-doctor',
      screen: 'review-screen',
      description: 'Get expert opinion from top doctors'
    },
    {
      id: 3,
      title: 'Treatment Plan',
      icon: 'fa-clipboard-list',
      screen: 'plan-screen',
      description: 'Receive detailed treatment recommendations'
    },
    {
      id: 4,
      title: 'Travel & Treatment',
      icon: 'fa-plane-departure',
      screen: 'travel-screen',
      description: 'End-to-end travel & treatment support'
    }
  ];

  useEffect(() => {
    const animateFlow = async () => {
      await controls.start('visible');
    };
    animateFlow();
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="process-flow">
      <div className="process-content">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Your Journey to Better Health</h2>
          <p>Simple 4-step process to world-class healthcare</p>
        </motion.div>

        <motion.div
          className="flow-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="phones-container">
            <div className="phone left-phone">
              <img src="/images/mob1.webp" alt="Upload Medical Records" />
            </div>

            <div className="connection-line">
              <motion.div 
                className="dot"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    "0 0 15px rgba(0, 136, 163, 0.3)",
                    "0 0 20px rgba(0, 136, 163, 0.6)",
                    "0 0 15px rgba(0, 136, 163, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="center-logo">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: 360
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <i className="fas fa-heartbeat"></i>
              </motion.div>
            </div>

            <div className="phone right-phone">
              <img src="/images/mob2.webp" alt="Treatment Update" />
            </div>
          </div>

          <motion.div className="steps-container">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="step-item"
                variants={itemVariants}
              >
                <div className="step-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;
