import React, { useRef } from 'react';
import Marks from './marks';

const TimeLine = () => {
  const timeLineRef = useRef(null);

  return (
    <div ref={timeLineRef} id="timeLine">
      <Marks timeLineRef={timeLineRef} />
    </div>
  );
};

export default TimeLine;
