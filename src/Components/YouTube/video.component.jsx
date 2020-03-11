import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { ReactComponent as Play } from '../../Assets/icons/play.svg';
import './video.styles.scss';

class Video extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    const wrapperStyles = {
      backgroundImage: `url('${this.props.vidImg}')`
    }

    return (
      <div className="video-wrapper" key={this.props.key} style={wrapperStyles}>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.vidId} onClose={() => this.setState({isOpen: false})} />
        <button className="open-video" onClick={this.openModal}>
          <div className="play">
            <Play />
          </div>
        </button>
      </div>
    )
  }
}

// const Video = ({ key, vidId, vidTitle }) => (
//   <div className="video-wrapper" key={key}>
//     <iframe src={`https://www.youtube.com/embed/${vidId}`} title={vidTitle}></iframe>
//   </div>
// )

export default Video;