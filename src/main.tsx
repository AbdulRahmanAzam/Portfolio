import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Set the app element for react-modal
Modal.setAppElement('#root');

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
