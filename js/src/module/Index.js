import React from 'react';
import Article from './Article.js';

class Index extends React.Component {
  render = () => {
    return (
      <div id="page" className="page page--index">
        {
          this.props.data.map((post, index) => {
            let props = {
              key: index,
              attrs: post
            };
            if (post.type.indexOf(this.props.filterText) === -1) {
              return false;
            } else {
              return (
                <Article {...props} />
              );
            }
          })
        }
      </div>
    );
  }
}

export default Index;
