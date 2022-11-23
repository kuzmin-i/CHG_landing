import Grid from "../grid/grid";
import { Button, Space } from "antd";
import Paper from "../paper/paper";

import { CoverWrapper, KPIS, Thumb } from "./__styles";
import { Lead, CoverTitle, KPI } from "../common/__styles";

const Cover = () => {
  return (
    <Grid>
      <Paper>
        <CoverWrapper type="cover">
          <CoverTitle>The all-in-one citizen engagement platform</CoverTitle>
          <Lead style={{ maxWidth: "1360px" }}>
            A digital platform for bottom-up communication between city
            residents and local governments streamlines community engagement and
            generates insights to make informed decisions.
          </Lead>

          <Button
            type="primary"
            onClick={() => {
              document.getElementById("get_success").scrollIntoView();
            }}
          >
            Get access
          </Button>
        </CoverWrapper>

        <Thumb />
      </Paper>
    </Grid>
  );
};

export default Cover;
