import React from 'react';

const TimeDisplay = ({ value }) => {
  return (
    <div className={'countdown'}>
      <p>{value}</p>
    </div>
  );
};

export default TimeDisplay;