import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const ProjectWrapper = styled.div`
  ${tw`container flex flex-col text-brand-9 lg:flex-row lg:justify-between mb-24`}
`;

const StyledHeading = styled.h1`
  ${tw`font-bold mb-4 text-5xl lg:text-6xl`}
`;

const StyledBody = styled.p`
  ${tw`lg:w-2/3 text-2xl`}
`;

export default function ProjectInfo({ name, info }) {
  return (
    <ProjectWrapper>
      <StyledHeading>{name}</StyledHeading>
      <StyledBody>{info}</StyledBody>
    </ProjectWrapper>
  );
}

ProjectInfo.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};
