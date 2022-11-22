import { Button, Input, Space, Grid as AntGrid } from "antd";
import { Lead, SectionTitle } from "../common/__styles";
import Grid from "../grid/grid";
import { Content, HalfOpacity, Left } from "./__styles";
import { Form } from "./__styles";

const { useBreakpoint } = AntGrid;

const BlockFooter = () => {
  const { xl } = useBreakpoint();

  return (
    <>
      <Grid>
        <Space direction="vertical">
          <SectionTitle>what city want</SectionTitle>
        </Space>
        <Content>
          <Left>
            <Lead>
              A platform for collecting and analyzing citizens’ requests for
              architects, developers and administrations
            </Lead>

            <Space direction="vertical">
              <Lead>Moscow, Bersenevskiy lane, 2 b.1, 119072, Russia</Lead>
              <HalfOpacity>
                <Lead>© ”What cities want” LLC, 2022</Lead>
              </HalfOpacity>
            </Space>
          </Left>

          <Form layout="vertical" id={"get_success"}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
              name="name"
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
              name="email"
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
              name="phone"
            >
              <Input placeholder="Phone" />
            </Form.Item>

            <Form.Item name="organization">
              <Input placeholder="Organization" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Get access
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Grid>
    </>
  );
};

export default BlockFooter;
