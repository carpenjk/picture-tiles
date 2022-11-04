import React from 'react';
import StyledContainer from './styled/StyledContainer';
import StyledSpinner from './styled/StyledSpinner';

const InlineSpinner = ({ isOpen }) => (
  <StyledContainer className={isOpen ? 'isOpen' : ''}>
    <StyledSpinner style={!isOpen ? { display: 'none' } : undefined}>
      <div className="ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledSpinner>
  </StyledContainer>
);

export default InlineSpinner;
