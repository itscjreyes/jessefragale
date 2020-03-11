import React, { Component } from 'react';
import butter from './butter-client';
import Header from './Components/Header/header.component';
import Banner from './Components/Banner/banner.component';
import About from './Components/About/about.component';
import Media from './Components/Media/media.component';
import Contact from './Components/Contact/contact.component';
import Footer from './Components/Footer/footer.component';
import './Elements/elements-list.component';
import './App.scss';

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
    const fields = this.state.data.fields;
    const about_img = fields.about_me_image;
    const about = fields.about_me;
    const articles = fields.articles;
    const featured = fields.featured_work;
    
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