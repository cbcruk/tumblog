import React from 'react';

import './Photo.css';

const Photo = ({ photos, caption }) => {
  const photo = photos[0].alt_sizes[3];

  return (
    <div className="Photo">
      <figure className="Photo-figure">
        <img
          src={photo.url}
          alt=""
          width={photo.width}
          height={photo.height}
        />
        <figcaption
          className="Photo-caption"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      </figure>
    </div>
  );
};

export default Photo;
