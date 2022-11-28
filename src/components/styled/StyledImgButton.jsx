import { getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';

export default styled.button`
  display: ${getProp('display')};
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
`;
