import React from 'react';
import './video.styles.scss';

const Video = ({ key, vidId, vidTitle }) => (
  <div className="video-wrapper" key={key}>
    <iframe src={`https://www.youtube.com/embed/${vidId}`} title={vidTitle}></iframe>
  </div>
)

export default Video;