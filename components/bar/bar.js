import { Button, Space, Grid as AntGrid } from "antd";
import Grid from "../grid/grid";
import { Wrapper, Logo, BtnGroup } from "./__styles";

const { useBreakpoint } = AntGrid;

const Bar = () => {
  const { md } = useBreakpoint();

  return (
    <>
      <Grid>
        <Wrapper>
          <Logo />

          <BtnGroup>
            {md && (
              <>
                <Button type="secondary">Решения для бизнеса</Button>
                <Button type="secondary">Ru</Button>
                <Button type="primary">Get access</Button>
              </>
            )}

            {!md && (
              <>
                <Button type="secondary">Ru</Button>
              </>
            )}
          </BtnGroup>
        </Wrapper>
      </Grid>
    </>
  );
};

export default Bar;
