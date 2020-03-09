import React from 'react';

import './podcast.styles.scss';

function Podcast(){
  return (
    <div className="podcast-container">
        <iframe title="The Working Capital Real Estate Podcast" src="//html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/legacy/thumbnail/yes/direction/backward/no-cache/true/" height="360" width="100%" scrolling="no"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
    </div>
  )
}

export default Podcast;