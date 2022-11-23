import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 12px;
  row-gap: 12px;

  @media (max-width: 992px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const El = styled.div`
  width: 366px;
  height: 805px;
  background: url("/icons/el_1.svg");
  background-position: center;
  background-size: cover;

  transform: translate(calc(-100% - 200px), -50px) scale(.9);

  position: absolute;
`;
