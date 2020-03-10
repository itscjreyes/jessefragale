import React, { Component } from 'react';
import butter from './butter-client';
import Header from './Components/Header/header.component';
import Banner from './Components/Banner/banner.component';
import Media from './Components/Media/media.component';
import Contact from './Components/Contact/contact.component';
import Footer from './Components/Footer/footer.component';
import './Elements/elements-list.component';
import './App.css';
import About from './Components/About/about.component';

class App extends Component {
  state = {
    data: {
      fields: {
        about_me_image: "",
        about_me: "",
        articles: [],
        featured_work: []
      }
    }
  }

  async componentDidMount () {
    const resp = await butter.page.retrieve('*', 'homepage')
    this.setState(resp.data)
  }
  
  render() {
    const about_img = this.state.data.fields.about_me_image;
    const about = this.state.data.fields.about_me;
    const articles = this.state.data.fields.articles;
    const featured = this.state.data.fields.featured_work;
    
    return (
      <div>
        <Header />
        <Banner />
        <About
          image={about_img}
          content={about}
        />
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