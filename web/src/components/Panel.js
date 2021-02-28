import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// import { Link } from 'gatsby';

const Section = styled.section`
  ${tw`container flex flex-col justify-center max-w-prose pt-80 pb-40`}

  p {
    font-size: 1.777rem;
  }

  @media screen and (max-width: 450px) {
    //padding: 0 1rem;
    padding: ${props => (props.isTitle ? `5rem 1rem 1rem` : `0 1rem`)};
  }
`;

const P = styled.p`
  ${tw`max-w-3xl`}
`;

// const StyledLink = styled(Link)`
//   align-self: flex-end;
//   color: #4e5859;
//   font-size: 1.333rem;
//   padding: 3rem 0;
//   text-align: left;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const StyledHeading = styled.h1`
  padding: ${props => (props.isTitle ? `4rem 1rem rem` : `0`)};
`;

export default function Panel({ header, body, link, isTitle }) {
  return (
    <Section isTitle={isTitle}>
      {header && isTitle ? (
        <StyledHeading className="h1">{header}</StyledHeading>
      ) : (
        <h2 className="h1">{header}</h2>
      )}
      {body && <P>{body}</P>}
      {/* {link && <StyledLink to="#">{link}</StyledLink>} */}
    </Section>
  );
}
