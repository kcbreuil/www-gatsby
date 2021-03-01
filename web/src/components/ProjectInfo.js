import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const ProjectWrapper = styled.div`
  ${tw`container flex flex-col lg:flex-row flex-auto justify-between mb-24`}
`;

const StyledHeading = styled.div`
  ${tw`font-bold text-5xl lg:text-5xl`}
`;

const StyledBody = styled.div`
  ${tw`w-7/12	text-2xl`}
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
