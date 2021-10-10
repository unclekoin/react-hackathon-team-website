import React from "react";
import { useParams } from "react-router";
import MemberCard from "../components/member-card/member-card";

const Member = () => {
  const params = useParams();
  const { memberId } = params;
  console.log(memberId);

  return (
      <div className="container member-wrapper">
        <MemberCard memberId={memberId} />
      </div>
  );
};

export default Member;
