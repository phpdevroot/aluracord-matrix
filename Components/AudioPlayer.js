import React from 'react';

const AudioPlayer = () => {
  return (
    <div>
      <audio
        src="https://aluracord-matrix-one-ivory.vercel.app/src/terminator.mp3"
        controls
        autoplay
      ></audio>
    </div>
  );
};

export { AudioPlayer };
