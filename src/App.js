import React, { Component } from 'react';
import butter from './butter-client';
import VideoList from './Components/YouTube/video-list.component';
import ArticlesList from  './Components/Articles/articles-list.component';
import './Elements/elements-list.component';
import './App.css';

class App extends Component {
  state = {
    data: {
      fields: {
        articles: []
      }
    }
  }

  async componentDidMount () {
    const resp = await butter.page.retrieve('*', 'homepage')
    this.setState(resp.data)
  }
  
  render() {
    const articles = this.state.data.fields.articles;
    
    return (
      <div>
        {/* <VideoList /> */}
        <ArticlesList 
          articles={articles}
        />
        {/* <iframe title="The Working Capital Real Estate Podcast" src="//html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/legacy/thumbnail/yes/direction/backward/no-cache/true/" height="360" width="100%" scrolling="no"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe> */}
      </div>
    );
  }
}

export default App;