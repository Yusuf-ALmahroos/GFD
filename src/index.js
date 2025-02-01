import React from 'react';
import { createRoot } from 'react-dom/client';
import MainWindow from '../components/MainWindow';

const App = () => {
  return (
    <>
      <MainWindow/>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);