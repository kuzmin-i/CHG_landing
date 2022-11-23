import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Space, Grid as AntGrid, Form as AntForm } from "antd";
import { Lead, SectionTitle } from "../common/__styles";
import Grid from "../grid/grid";
import { Content, HalfOpacity, Left, WhitePlash } from "./__styles";
import { Form } from "./__styles";
import emailjs from "@emailjs/browser";
import axios from "axios";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const { useBreakpoint } = AntGrid;

const BlockFooter = () => {
  const { xl } = useBreakpoint();
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const [error, setError] = useState(null);

  const [logId, setLogId] = useState(uuidv4());

  useEffect(() => {
    setLoading(false);
    setDone(false);
    setError(false);
  }, [logId]);

  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);

    emailjs
      .sendForm(
        "service_t7o6usd",
        "template_7mdo4qd",
        e.target,
        "k4HkxTWZuhLXBRoYN"
      )
      .then(
        (result) => {
          setLoading(false);
          setDone(true);
        },
        (error) => {
          setLoading(false);
          setError(true);
        }
      );
  };

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

          <Form
            ref={form}
            key={`log:${logId}`}
            onSubmit={sendEmail}
            layout="vertical"
            id={"get_success"}
          >
            {(loading || done || error) && (
              <WhitePlash>
                {loading && (
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 56 }} spin />
                    }
                  />
                )}

                {done && (
                  <Space direction="vertical" align="center">
                    <SectionTitle>Successfully!</SectionTitle>
                    <Button
                      onClick={() => setLogId(uuidv4())}
                      style={{ color: "white !important" }}
                      type="primary"
                    >
                      Send another
                    </Button>
                  </Space>
                )}

                {error && <SectionTitle>Error!</SectionTitle>}
              </WhitePlash>
            )}
            <AntForm.Item
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
            >
              <Input name="name" placeholder="Name" />
            </AntForm.Item>

            <AntForm.Item
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
            >
              <Input name="email" placeholder="Email" />
            </AntForm.Item>

            <AntForm.Item
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
            >
              <Input name="phone" placeholder="Phone" />
            </AntForm.Item>

            <AntForm.Item>
              <Input name="organization" placeholder="Organization" />
            </AntForm.Item>

            <AntForm.Item>
              <Button type="primary" htmlType="submit">
                Get access
              </Button>
            </AntForm.Item>
          </Form>
        </Content>
      </Grid>
    </>
  );
};

export default BlockFooter;
