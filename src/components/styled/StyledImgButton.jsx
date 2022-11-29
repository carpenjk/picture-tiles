import { getProp, breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { MAX_BREAKPOINT } from '../../globals';

export default styled.button`
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  ${breakpoint([0, MAX_BREAKPOINT])`
    display: ${getProp('display')};  
  `}
`;
