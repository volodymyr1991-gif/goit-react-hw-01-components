import React from "react";
import styled from "styled-components";
import PropTipes from "prop-types"

const List = styled.ul`
display:flex;
justify-content:space-between;
padding: 0;
width:400px;
margin: 0 auto;
font-size:25px;
`;

const ListItem = styled.li`
display: flex;
flex-direction:column;
width:78px;
border:1px solid green;
background-color: palegoldenrod;
color: #fff;
`;

const ListItemSpan = styled.span`

text-align: center;
`;


function Statistic({statistic}) {
  return (
    <List>
      {statistic.map((statistic) => (
        <ListItem key={statistic.id}>
          <ListItemSpan>{statistic.label}</ListItemSpan>
          <ListItemSpan>{statistic.percentage}</ListItemSpan>
        </ListItem>
      ))}
    </List>
  );
}

Statistic.propTipes = {
    statistic:PropTipes.arrayOf(
        PropTipes.exact({
            id: PropTipes.number.isRequired,
            label: PropTipes.string.isRequired,
            percentage:PropTipes.number.isRequired
        })
    ).isRequired
}


export default Statistic;
