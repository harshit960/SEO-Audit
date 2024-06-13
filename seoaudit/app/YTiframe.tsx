import React from 'react';

const YouTubeIframe = ({ videoId }: { videoId: string }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default YouTubeIframe;
