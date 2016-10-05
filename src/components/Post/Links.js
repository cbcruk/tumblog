import React from 'react';

const Links = ({ photos, url, title, publisher, excerpt }) => {
  const photo = photos && photos[0].alt_sizes[4];

  return (
    <div className="link">
      {
        photo
        ? <img src={photo.url} alt="" width={photo.width} height={photo.height} className="link__thumbnail" />
        : null
      }
      <a href={url} className="link__box">
        <div className="link__meta">
          <strong className="link__name">{title}</strong>
          <span className="link__host">{publisher}</span>
          <p className="link__excerpt">{excerpt}</p>
        </div>
      </a>
    </div>
  );
};

export default Links;
