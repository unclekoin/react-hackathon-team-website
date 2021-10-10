import React from 'react';
import { useParams } from 'react-router';

const Member = () => {
  const params = useParams();
  const { memberId } = params;
  console.log(memberId)
  
  return (
    <div className='container member-wrapper'>
      <h1>Member</h1>
    </div>
  );
};

export default Member;
