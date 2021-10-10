import React, { useState } from "react";
import members from "../../db/api.members";
import PropTypes from "prop-types";

const MemberCard = ({ memberId }) => {
    const [member] = useState(members.find((item) => item._id === memberId));
    console.log("member:", member);

    return (
        <>
            {member && (
                <div>
                    <img src={member.photo} alt="" />
                    <h1>{`${member.firstName} ${member.lastName}`}</h1>
                    <h2>{`ege: ${
                        new Date().getFullYear() -
                        new Date(member.dateOfBirth).getFullYear()
                    }`}</h2>
                    <h2>about:</h2>
                    <h3>{member.about}</h3>
                    <h2>hard skills:</h2>

                    {Object.keys(member.technologies).map((item, i) => (
                        <h3
                            key={i}
                        >{`${member.technologies[item].name}: ${member.technologies[item].lavel}, `}</h3>
                    ))}

                    <h2>soft skills:</h2>
                    {Object.entries(member.socialLinks).map((item, i) => (
                        <h3 key={i}>{`${item[0]}: ${item[1]}, `}</h3>
                    ))}
                    <h2>{member.role.text}:</h2>
                    {member.role.componets.map((component, i) => (
                        <h3 key={i}>{component},</h3>
                    ))}
                </div>
            )}
        </>
    );
};

MemberCard.propTypes = {
    memberId: PropTypes.string
};

export default MemberCard;
