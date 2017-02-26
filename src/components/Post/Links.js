import React from 'react';
import styled from 'styled-components';

const Box = styled.a`
  display: block;
  padding: ${16/16}rem;
  background-color: #f2f2f2;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Thumbnail = styled.img`
  display: block;
`;

const Meta = styled.div`
  font-size: ${12/16}rem;
`;

const Name = styled.strong`
  background-color: transparent;
  font-size: ${16/16}rem;
  transition: 0.5s background-color;

  &:hover { background-color: rgba(255,255,0, 0.5); }
  &:after { content: " >"; }
`;

const Host = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.3);
`;

const Excerpt = styled.p`
  margin-top: ${16/16}rem;
`;

const Links = ({ photos, url, title, publisher, excerpt }) => {
  const photo = photos && photos[0].alt_sizes[4];

  return (
    <div className="Links">
      {
        photo
        ? <Thumbnail src={photo.url} alt="" width={photo.width} height={photo.height} />
        : null
      }
      <Box href={url}>
        <Meta>
          <Name>{title}</Name>
          <Host>{publisher}</Host>
          <Excerpt>{excerpt}</Excerpt>
        </Meta>
      </Box>
    </div>
  );
};

export default Links;
