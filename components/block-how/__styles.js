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
  width: 694px;
  height: 798px;
  background: url("/icons/el.svg");
  background-position: center;
  background-size: cover;

  transform: translateX(calc(-100% - 100px)) scale(.8);

  position: absolute;
`;
