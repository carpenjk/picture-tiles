import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffff;
  width: 100%;
  height: 100%;
  opacity: 100%;
  z-index: 1;

  &.isLoaded {
    background: none;
    z-index: 0;
    transition: background ease-in 0.45s, z-index 0 0.45s;
  }
`;
