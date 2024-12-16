import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoBg from './VideoBg'; // Импортируем компонент с видеофоном

ReactDOM.render(
  <React.StrictMode>
    <>
      {/* <VideoBg /> */}
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
