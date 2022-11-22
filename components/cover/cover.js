import Grid from "../grid/grid";
import { Button, Space } from "antd";
import Paper from "../paper/paper";

import { CoverWrapper, KPIS } from "./__styles";
import { Lead, CoverTitle, KPI } from "../common/__styles";

const Cover = () => {
  return (
    <Grid>
      <Paper align="center">
        <CoverWrapper>
          <CoverTitle>Revealing urban problems</CoverTitle>
          <Lead style={{ maxWidth: "1360px" }}>
            A digital platform for bottom-up communication between city
            residents and local governments. It streamlines citizen engagement
            in urban planning through AI-based data analysis tools and
            communication media.
          </Lead>

          <Button
            type="primary"
            onClick={() => {
              document.getElementById("get_success").scrollIntoView();
            }}
          >
            Get access
          </Button>

          <KPIS>
            <Space direction="vertical">
              <KPI>400+</KPI>
              <Lead>cities in the CIS</Lead>
            </Space>

            <Space direction="vertical">
              <KPI>75000+</KPI>
              <Lead>ideas processed</Lead>
            </Space>

            <Space direction="vertical">
              <KPI>600+ </KPI>
              <Lead>projects</Lead>
            </Space>
          </KPIS>
        </CoverWrapper>
      </Paper>
    </Grid>
  );
};

export default Cover;
