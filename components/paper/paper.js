import { Wrapper } from "./__styles";

const Paper = ({ children, ...props }) => {
  return (
    <>
      <Wrapper {...props}>{children}</Wrapper>
    </>
  );
};

export default Paper;
