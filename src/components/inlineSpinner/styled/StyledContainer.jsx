import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  opacity: 75%;
  transition: background ease-in 1s;
  z-index: -1;
  &.isOpen {
    z-index: 1;
    display: flex;
    background: #b9bcbb;
  }
`;
