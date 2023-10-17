// QuantumBackground.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveParticles = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const Particle = styled.div`
  width: 2px;
  height: 2px;
  background-color: #00ffcc;
  position: absolute;
  bottom: 100%;
  z-index:1;
  animation: ${moveParticles} 10s linear infinite;
`;

const QuantumBackground = () => {
  const particles = Array.from({ length: 100 }, (_, index) => (
    <Particle key={index} style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 5 + 2}s` }} />
  ));

  return <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>{particles}</div>;
};

export default QuantumBackground;
