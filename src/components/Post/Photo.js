import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Photo = ({ photos, caption }) => {
  const photo = photos[0].alt_sizes[3];

  return (
    <div className="Photo">
      <Figure>
        <Img
          src={photo.url}
          alt=""
          width={photo.width}
          height={photo.height}
        />
        <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
      </Figure>
    </div>
  );
};

export default Photo;
