import React, {Component} from 'react';
import './video-list.styles.scss';

class VideoList extends Component {
  render(){
    const allVids = this.props.videos.map((vid, i) => {
      const vidId = vid.id.videoId;
      const vidTitle = vid.snippet.title;
      const embedUrl = `https://www.youtube.com/embed/${vidId}`;
      return (
        <div className="video-wrapper" key={i}>
          <iframe src={embedUrl} title={vidTitle}></iframe>
        </div>
      )
    })

    return (
      <div className="videos-container">
        <div className="videos-group">
          {allVids}
        </div>
        <div className="center-btn">
          <a href="https://www.youtube.com/user/JesseFragale/videos" className="btn btn-hollow">View All</a>
        </div>
      </div>
    )
  }
}

export default VideoList;