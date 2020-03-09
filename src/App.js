import React, { Component } from 'react';
import butter from './butter-client';
import Header from './Components/Header/header.component';
import Media from './Components/Media/media.component';
import Contact from './Components/Contact/contact.component';
import Footer from './Components/Footer/footer.component';
import './Elements/elements-list.component';
import './App.css';

class App extends Component {
  state = {
    data: {
      fields: {
        articles: [],
        featured: []
      }
    }
  }

  async componentDidMount () {
    const resp = await butter.page.retrieve('*', 'homepage')
    this.setState(resp.data)
  }
  
  render() {
    const articles = this.state.data.fields.articles;
    const featured = this.state.data.fields.featured;
    
    return (
      <div>
        <Header />
        <Media 
          articles={articles}
          featured={featured}
        />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;