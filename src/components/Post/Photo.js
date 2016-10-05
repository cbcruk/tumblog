import React from 'react';

const Photo = ({ photos, caption }) => {
  const photo = photos[0].alt_sizes[3];

  return (
    <div className="photo">
      <figure className="photo__figure">
        <img
          src={photo.url}
          alt=""
          width={photo.width}
          height={photo.height}
        />
        <figcaption
          className="photo__caption"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      </figure>
    </div>
  );
};

export default Photo;
