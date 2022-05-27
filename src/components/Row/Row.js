import React from 'react';

const Row = (props) => {
  return <div className={`row ${props.rowColumns}`}>{props.children}</div>;
};

export default Row;
