import React from 'react';

import './Links.css';

const Links = ({ photos, url, title, publisher, excerpt }) => {
  const photo = photos && photos[0].alt_sizes[4];

  return (
    <div className="Links">
      {
        photo
        ? <img src={photo.url} alt="" width={photo.width} height={photo.height} className="Links-thumbnail" />
        : null
      }
      <a href={url} className="Links-box">
        <div className="Links-meta">
          <strong className="Links-name">{title}</strong>
          <span className="Links-host">{publisher}</span>
          <p className="Links-excerpt">{excerpt}</p>
        </div>
      </a>
    </div>
  );
};

export default Links;
