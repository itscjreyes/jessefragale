import React, { Component } from 'react';
import VideoList from './Components/YouTube/video-list.component';
import './Elements/elements-list.component';
import './App.css';
const key = process.env.REACT_APP_GOOGLE_API_KEY;
const channelID = 'UCNrawkC_bE67IG8SaJpQMgw';

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    let url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.search = new URLSearchParams({
      part: 'snippet',
      key: key,
      type: 'video',
      channelId: channelID,
      maxResults: 6
    })

    fetch(url)
      .then(data => data.json())
      .then(response => {
        this.setState({ videos: response.items })
      })
      .catch(err => console.error(err));
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <VideoList videos={videos} />
      </div>
    )
  }
}

export default App;