import React from 'react';
import { useParams } from 'react-router';
import MemberCard from '../components/member-card/member-card';

const Member = ({ onFavorite }) => {
  const params = useParams();
  const { memberId } = params;

  return (
    <div className="container member-wrapper">
      <MemberCard memberId={memberId} onFavorite={onFavorite} />
    </div>
  );
};

export default Member;
