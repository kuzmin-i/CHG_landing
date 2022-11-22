import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 48px;
  padding-right: 48px;

  @media (max-width: 768px) {
    & {
      padding-left: 30px;
      padding-right: 30px;

      @media (max-width: 768px) {
        & {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }
  }

  max-width: 1760px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
`;
