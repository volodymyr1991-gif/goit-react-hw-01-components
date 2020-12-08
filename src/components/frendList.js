import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FrendsKard = styled.li`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 10px;
  font-family: "Roboto";
  font-size: 25px;
`;

const FrendsAvatar = styled.img`
  margin-right: 20px;
`;

const IsInOnline = styled.span`
  margin-right: 20px;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${(props) => (props.inStock ? "green" : "red")};
`;

function FrendList({ frends }) {
  return (
    <ul>
      {frends.map((frends) => (
        <FrendsKard key={frends.id}>
          <IsInOnline inStock={frends.isOnline}></IsInOnline>
          <FrendsAvatar src={frends.avatar} alt={frends.name} width="48" />
          <p>{frends.name}</p>
        </FrendsKard>
      ))}
    </ul>
  );
}

FrendList.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FrendList.propTypes = {
  frends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default FrendList;
