import React from 'react';

const Text = ({ body }) => (
  <div
    className="text"
    dangerouslySetInnerHTML={{ __html: body }}
  />
);

export default Text;
