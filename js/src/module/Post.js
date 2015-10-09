import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const { photos, caption } = this.props;

    return (
      <div className="photo">
        <figure className="photo__figure">
          <img src={photos} alt="" data-action="zoom" />
          <figcaption className="photo__caption" dangerouslySetInnerHTML={{__html: caption}} />
        </figure>
      </div>
    );
  }
}

class Text extends Component {
  rawMarkup() {
    return { __html: this.props.body };
  }
  render() {
    return (
      <div className="text" dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
}

class Links extends Component {
  render() {
    const { url, title, publisher } = this.props;

    return (
      <div className="link">
        <a href={url} className="link__box">
          <div className="link__meta">
            <span className="link__name">{title}</span>
            <span className="link__host">{publisher}</span>
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
