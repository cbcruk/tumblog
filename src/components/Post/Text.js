import React from 'react';

const Text = ({ body }) => (
  <div
    className="Text"
    dangerouslySetInnerHTML={{ __html: body }}
  />
);

export default Text;
