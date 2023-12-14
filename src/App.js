import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;

// index.js or App.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then((reg) => {
        console.log('Service Worker registered!', reg);
      })
      .catch((err) => {
        console.log('Service Worker registration failed:', err);
      });
  });
}
