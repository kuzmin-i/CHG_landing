import styled from "styled-components";
import { Typography } from "antd";
import { colors } from "./__cfgs";

const { Paragraph, Title, Text } = Typography;

export const Lead = styled(Paragraph)`
  && {
    line-height: calc(48 / 32);
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 0px;
    padding-bottom: 30px;

    ${({ small }) =>
      small
        ? `
      & {
        font-size: 1.5rem;
      }   
    `
        : ``}
  }

  &,
  & * {
    color: ${colors.grey};
  }

  ${({ title }) =>
    title
      ? `
    &&&&&& {
      margin-bottom: 0px;
      font-weight: 500;
      color: ${colors.blue};
      padding-bottom: 0px;
    }
  `
      : ``}

  ${({ white }) =>
    white
      ? `
        &&&&&&&&& {
          color: white;
        }
      `
      : ``}
`;

export const LeadNumber = styled(Text)`
  && {
    left: -96px;
    transform: translateY(8px);
    font-weight: 600;
    font-size: 4rem;
    line-height: 1;
    color: ${colors.blue};

    position: absolute;

    @media (max-width: 992px) {
      & {
        position: relative;
        left: 0px;
        transform: translate(0, 0);
      }
    }
  }
`;

export const CoverTitle = styled(Title)`
  &&& {
    margin-top: 0px;
    font-weight: 600;
    font-size: 5.25rem;
    line-height: calc(119 / 112);
  }

  &&&,
  &&& * {
    color: ${colors.blue};
  }
`;

export const SectionTitle = styled(Title)`
  && {
    margin-top: 0px;
    font-weight: 600;
    font-size: 4rem;
    line-height: calc(119 / 112);
  }

  &&&,
  &&& * {
    color: ${colors.grey};
  }
`;

export const KPI = styled(Text)`
  font-weight: 500;
  font-size: 6rem;
  line-height: calc(119 / 96);
`;
