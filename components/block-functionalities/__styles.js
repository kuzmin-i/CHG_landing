import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 12px;
  column-gap: 12px;

  @media (max-width: 992px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
