import React from 'react';
import { Links, Photo, Text } from '../Post/';

const Content = ({ attrs }) => {
  const { type } = attrs;

  let content;
  switch (type) {
    case 'link': content = <Links {...attrs} />; break;
    case 'photo': content = <Photo {...attrs} />; break;
    case 'text': content = <Text {...attrs} />; break;
    default: content = null;
  }

  return (
    <div className="article__content">
      {content}
    </div>
  );
};

export default Content;
