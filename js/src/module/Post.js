import React from 'react';

class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <figure className="photo__figure">
          <img src={this.props.photos} alt="" />
          <figcaption className="photo__caption" dangerouslySetInnerHTML={{__html: this.props.caption}} />
        </figure>
      </div>
    );
  }
}

class Text extends React.Component {
  rawMarkup() {
    return { __html: this.props.body };
  }
  render() {
    return (
      <div className="text" dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
}

class Links extends React.Component {
  render() {
    return (
      <div className="link">
        <a href={this.props.url} className="link__box">
          <div className="link__meta">
            <span className="link__name">{this.props.title}</span>
            <span className="link__host">{this.props.publisher}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default {
  photo: Photo,
  links: Links,
  text: Text
};
