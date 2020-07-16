import React from 'react';

const Link = props => (
  <a href={props.url} rel="noopener noreferrer">{props.children}</a>
);

export default Link;