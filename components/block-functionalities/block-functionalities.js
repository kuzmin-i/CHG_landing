import { Lead, SectionTitle } from "../common/__styles";
import { Row, Space, Grid as AntGrid } from "antd";
import Grid from "../grid/grid";
import { ImgBlock, L1, L2, L3, L4, Table } from "./__styles";
import Paper from "../paper/paper";

const { useBreakpoint } = AntGrid;

const BlockFunctionalities = () => {
  const { md } = useBreakpoint();

  return (
    <>
      <Grid>
        <Row>
          <SectionTitle>platform functionalities </SectionTitle>
        </Row>

        <Table>
          <Paper vertical style={{ overflow: "hidden" }}>
            <Space direction="vertical">
              <Lead title>diverse communication channels</Lead>
              <Lead style={{ maxWidth: md ? "70%" : "100%" }}>
                landing pages, chatbots, and groups in social media
              </Lead>
            </Space>

            {true && (
              <ImgBlock>
                <L1 />
              </ImgBlock>
            )}
          </Paper>

          <Paper vertical style={{ overflow: "hidden" }}>
            <Space direction="vertical">
              <Lead title>main digital engagement formats</Lead>
              <Lead style={{ maxWidth: md ? "70%" : "100%" }}>
                polls, surveys, and crowdsourcing
              </Lead>
            </Space>

            {true && (
              <ImgBlock className="l2">
                <L2 />
              </ImgBlock>
            )}
          </Paper>

          <Paper vertical style={{ overflow: "hidden" }}>
            <Space direction="vertical">
              <Lead title>natural language processing</Lead>
              <Lead style={{ maxWidth: md ? "70%" : "100%" }}>
                topic modeling, problems detection and classification, sentiment
                analysis
              </Lead>
            </Space>

            {true && (
              <ImgBlock>
                <L3 />
              </ImgBlock>
            )}
          </Paper>

          <Paper vertical style={{ overflow: "hidden" }}>
            <Space direction="vertical">
              <Lead title>one-click report</Lead>
              <Lead style={{ maxWidth: md ? "70%" : "100%" }}>
                socio-demographic statistics, message analysis, page visits
                dynamics
              </Lead>
            </Space>

            {true && (
              <ImgBlock>
                <L4 />
              </ImgBlock>
            )}
          </Paper>
        </Table>
      </Grid>
    </>
  );
};

export default BlockFunctionalities;
