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

export const ImgBlock = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

  @media (max-width: 768px) {
    height: 230px;

    &.l2 {
      height: 280px;
    }
  }

  display: flex;
  justify-content: flex-end;
`;

export const L1 = styled.div`
  position: absolute;
  width: 527px;
  height: 180px;
  background: url("/cards/1.png");
  background-size: cover;
  right: 0px;
  bottom: 0px;
`;

export const L2 = styled.div`
  position: absolute;
  width: 400px;
  height: 318px;
  background: url("/cards/2.png");
  background-size: cover;
  right: 0px;
  bottom: 0px;
`;

export const L3 = styled.div`
  position: absolute;
  width: 342px;
  height: 278px;
  background: url("/cards/3.png");
  background-size: cover;
  right: 0px;
  bottom: 0px;
`;

export const L4 = styled.div`
  position: absolute;
  width: 278px;
  height: 256px;
  background: url("/cards/4.png");
  background-size: cover;
  right: 0px;
  bottom: 0px;
`;
