import { Col, Row, Space } from "antd";
import { Lead, LeadNumber, SectionTitle } from "../common/__styles";
import Grid from "../grid/grid";
import Paper from "../paper/paper";
import { Content, El } from "./__styles";

const BlockHow = () => {
  return (
    <>
      <Grid>
        <Paper style={{ overflow: "hidden" }}>
          <Content>
            <div></div>

            <Col>
              <El />

              <SectionTitle>how it works</SectionTitle>

              <Space direction="vertical">
                <Space direction="vertical" style={{ position: "relative" }}>
                  <LeadNumber>01</LeadNumber>
                  <Lead title>launch engagement campaigns</Lead>
                  <Lead>
                    create surveys, polls, or crowdsourcing and invite citizens
                    to discuss urban problems and report incidents
                  </Lead>
                </Space>

                <Space direction="vertical" style={{ position: "relative" }}>
                  <LeadNumber>02</LeadNumber>
                  <Lead title>analyze ideas</Lead>
                  <Lead>{`define citizens' requests using AI technologies`}</Lead>
                </Space>

                <Space direction="vertical" style={{ position: "relative" }}>
                  <LeadNumber>03</LeadNumber>
                  <Lead title>make decisions</Lead>
                  <Lead>
                    address key needs and challenges, prioritize urban
                    development strategies
                  </Lead>
                </Space>
              </Space>
            </Col>
          </Content>
        </Paper>
      </Grid>
    </>
  );
};

export default BlockHow;
