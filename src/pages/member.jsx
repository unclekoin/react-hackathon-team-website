import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import members from '../db/api.members';
import MemberCard from '../components/member-card/member-card';

const Member = ({ onFavorite }) => {
  const params = useParams();
  const { memberId } = params;
  const isMember = members.find((member) => member._id === memberId);

  return (
    <div className="container member-wrapper">
      {isMember ? <MemberCard memberId={memberId} onFavorite={onFavorite} /> : <Redirect to="/404" /> }
          
    </div>
  );
};

export default Member;
