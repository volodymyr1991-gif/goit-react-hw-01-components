import React from "react"
import styled from "styled-components";
import PropTipe from "prop-types"

const SectionTitle = styled.h2`
text-transform:uppercase;
text-align: center;
`;

const Section = styled.section`
font-family: "Roboto";
/* max-width:400px; */
margin: 0 auto;
`;

function Panel ({title, children}){
    return(
        <Section>
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
        </Section>
    )
}



Section.defaultProps = {
    title:""
};

Panel.PropTipe = {
    title:PropTipe.string.isRequired
}

export default Panel