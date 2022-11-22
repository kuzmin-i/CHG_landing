import { Button, Space, Grid as AntGrid } from "antd";
import Link from "next/link";
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
                <Link
                  href="https://chego-hochet-gorod.com/bis/"
                  target={"_blank"}
                >
                  <Button type="secondary">Решения для бизнеса</Button>
                </Link>
                <Link href="https://chego-hochet-gorod.com/" target={"_blank"}>
                  <Button type="secondary">Ru</Button>
                </Link>
                <Button
                  onClick={() => {
                    document.getElementById("get_success").scrollIntoView();
                  }}
                  type="primary"
                >
                  Get access
                </Button>
              </>
            )}

            {!md && (
              <>
                <Link href="https://chego-hochet-gorod.com/" target={"_blank"}>
                  <Button type="secondary">Ru</Button>
                </Link>
              </>
            )}
          </BtnGroup>
        </Wrapper>
      </Grid>
    </>
  );
};

export default Bar;
