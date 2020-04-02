import React from 'react';

import './podcast.styles.scss';

function Podcast(){
  return (
    <div className="podcast-container">
        <iframe title="The Working Capital Real Estate Podcast" src="///html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/87A93A/" height="auto" width="100%" scrolling="no"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
        {/* <iframe style="border: none" src="//html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/87A93A/" height="360" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe> */}
    </div>
  )
}

export default Podcast;