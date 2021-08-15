import React, { useState } from 'react';
import './style.css';

const webSeries = {
  Netflix: [
    { name: 'Money Heist', imdb: '8.3' },
    { name: 'Peaky Blinders', imdb: '8.8' },
    { name: 'Vikings ', imdb: '8.5' },
    { name: 'Sacred Games ', imdb: '8.6' }
  ],
  'Amazon Prime': [
    { name: 'Mirzapur ', imdb: '8.4' },
    { name: 'Family Man', imdb: '8.8' },
    { name: 'Super Girl', imdb: '6.2' }
  ],
  'HBO Max': [
    { name: 'Game of Thrones', imdb: '9.3' },
    { name: 'Silicon Valley ', imdb: '8.5' },
    { name: 'Westworld', imdb: '8.6' }
  ]
};

const images = {
  Netflix: 'https://img.icons8.com/ios/50/000000/netflix--v2.png',
  'Amazon Prime':
    'https://img.icons8.com/wired/64/000000/amazon-prime-video.png',
  'HBO Max': 'https://img.icons8.com/ios-filled/50/000000/hbo.png'
};

export default function App() {
  const [platforms, setPlatforms] = useState('Netflix');

  const handleCLick = key => {
    setPlatforms(key);
  };
  return (
    <div className="container">
      <h2> 🎬 My favorite web series and their platforms</h2>
      <span>Choose from below</span>
      <div>
        {Object.keys(webSeries).map((key, index) => {
          return (
            <span
              className="platform"
              key={key}
              onClick={() => handleCLick(key)}
            >
              <img src={images[key]} />
            </span>
          );
        })}
      </div>
      <hr />

      <div className="content-block">
        {webSeries[platforms].map(platform => {
          return (
            <div key={platform.name} className="content">
              {platform.name}
              <br />
              <span> IMDB rating :{platform.imdb}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
