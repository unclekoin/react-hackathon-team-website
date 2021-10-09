import React from "react";
import styled from "styled-components";

{/* <Button
type="secondary"
text="Add"
size={10}
disabled={false}
icon={"imgUrl"}
shape="round"
/>
<MemberCard /> */}

const PrimaryButton = styled.button`
  color: #fff;
  background-color: cadetblue;
  border-color: lightblue;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  border-radius: 20%;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
`;

const Button = (props) => {
  return <PrimaryButton>{props.text}</PrimaryButton>;
};

export default Button;
