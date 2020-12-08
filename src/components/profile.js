import React from "react";
import styled from "styled-components";
import PropTipe from "prop-types"
const ImgAva = styled.img`
  border-radius: 50%;
`;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
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
background-color:teal;
width:100px;
border:  1px solid;
padding-top:10px;
padding-bottom:10px;

`;

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

Profile.defaultProps={
avatar:
'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',

};

Profile.PropTipe = {
  name:PropTipe.string.isRequired,
  tag:PropTipe.string.isRequired,
  location:PropTipe.string.isRequired,
  stats:PropTipe.string.isRequired,
}

export default Profile;
