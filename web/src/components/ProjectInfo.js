import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const ProjectWrapper = styled.div`
  ${tw`container flex flex-col lg:flex-row mb-24`}
`;

const StyledHeading = styled.div`
  ${tw`font-bold mr-4 mb-4 text-5xl lg:text-6xl`}
`;

const StyledBody = styled.div`
  ${tw`w-auto	text-2xl`}
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
