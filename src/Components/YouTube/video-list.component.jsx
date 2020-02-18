import React, {Component} from 'react';
import './video-list.styles.scss';

class VideoList extends Component {
  render(){
    const allVids = this.props.videos.map((vid, i) => {
      const vidId = vid.id.videoId;
      const vidTitle = vid.snippet.title;
      const embedUrl = `https://www.youtube.com/embed/${vidId}`;
      return (
        <div className="video-wrapper">
          <iframe key={i} src={embedUrl} title={vidTitle}></iframe>
        </div>
      )
    })

    return (
      <div className="video-group">
        {allVids}
      </div>
    )
  }
}

export default VideoList;