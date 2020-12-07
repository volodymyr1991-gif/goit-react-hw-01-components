import React from "react";
import styled from "styled-components";

const ImgAva = styled.img`
  border-radius: 50%;
`;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  font-size: 25px;
  font-family: "Roboto";
  margin: 0;
`;

const ProfileList = styled.ul`
padding: 0;
display: flex;
justify-content:space-between;
`;

const ProfileListItem = styled.li`
display: flex;
flex-direction:column;
align-items:center;
`

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Container>
      <BoxTitle>
        <ImgAva src={avatar} alt={name} width="300" />
        <Name>{name}</Name>
        <p>{tag}</p>
        <p>{location}</p>
      </BoxTitle>
      <ProfileList>
        <ProfileListItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </ProfileListItem>
        <ProfileListItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </ProfileListItem>
        <ProfileListItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </ProfileListItem>
      </ProfileList>
    </Container>
  );
}

export default Profile;
