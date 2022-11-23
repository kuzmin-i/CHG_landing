import { Space } from "antd";
import { KPI, Lead } from "../common/__styles";
import { CoverWrapper, KPIS } from "../cover/__styles";
import Grid from "../grid/grid";
import Paper from "../paper/paper";
import { Sp } from "./__styles";

const KPISBlock = () => {
  return (
    <>
      <Grid>
        <Paper align="center">
          <CoverWrapper align="center">
            <KPIS>
              <Sp direction="vertical">
                <KPI>400+</KPI>
                <Lead style={{ paddingBottom: "16px" }}>cities in the CIS</Lead>
              </Sp>

              <Sp direction="vertical">
                <KPI>75000+</KPI>
                <Lead style={{ paddingBottom: "16px" }}>ideas processed</Lead>
              </Sp>

              <Sp direction="vertical">
                <KPI>600+ </KPI>
                <Lead style={{ paddingBottom: "16px" }}>projects</Lead>
              </Sp>
            </KPIS>
          </CoverWrapper>
        </Paper>
      </Grid>
    </>
  );
};

export default KPISBlock;
