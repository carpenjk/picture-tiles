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

  &.isLoaded {
    background: none;
    z-index: 0;
    transition: background ease-in 0.45s;
  }
`;
