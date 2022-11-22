import { Lead, SectionTitle } from "../common/__styles";
import { Row, Space } from "antd";
import Grid from "../grid/grid";
import { Table } from "./__styles";
import Paper from "../paper/paper";

const BlockFunctionalities = () => {
  return (
    <>
      <Grid>
        <Row>
          <SectionTitle>platform functionalities </SectionTitle>
        </Row>

        <Table>
          <Paper>
            <Space direction="vertical">
              <Lead title>diverse communication channels</Lead>
              <Lead>landing pages, chatbots, and groups in social media</Lead>
            </Space>
          </Paper>

          <Paper>
            <Space direction="vertical">
              <Lead title>main digital engagement formats</Lead>
              <Lead>polls, surveys, and crowdsourcing</Lead>
            </Space>
          </Paper>

          <Paper>
            <Space direction="vertical">
              <Lead title>natural language processing</Lead>
              <Lead>
                topic modeling, problems detection and classification, sentiment
                analysis
              </Lead>
            </Space>
          </Paper>

          <Paper>
            <Space direction="vertical">
              <Lead title>one-click report</Lead>
              <Lead>
                socio-demographic statistics, message analysis, page visits
                dynamics
              </Lead>
            </Space>
          </Paper>
        </Table>
      </Grid>
    </>
  );
};

export default BlockFunctionalities;
