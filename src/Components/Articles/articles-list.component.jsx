import React, { Component } from 'react';
import butter from '../../butter-client';

import './articles-list.styles.scss';
import Article from './article.component';

class ArticlesList extends Component {
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

  render(){
    console.log(this.state)

    return (
      <div className="articles-container">
        <div className="articles-group">
          {
            this.state.data.fields.articles.map((article,i) => (
              <Article
                key={i}
                title={article.title}
                description={article.description}
                link={article.link}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default ArticlesList;