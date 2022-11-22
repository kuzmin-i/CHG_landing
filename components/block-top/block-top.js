import { useRef, useState } from "react";
import { Lead, SectionTitle } from "../common/__styles";
import Grid from "../grid/grid";
import Paper from "../paper/paper";
import {
  Content,
  Left,
  Line,
  Link,
  LinkPanel,
  Nav,
  Right,
  Scroll,
  SiteScreen,
  Slide,
} from "./__styles";
import { ArrowRightOutlined } from "@ant-design/icons";
import Li from "next/link";

import { Carousel, Space, Grid as AntGrid } from "antd";

const { useBreakpoint } = AntGrid;

const BlockTop = () => {
  const carouselRef = useRef();

  const { xl } = useBreakpoint();

  const [slide, setSlide] = useState(0);

  const handleGoTo = (i) => {
    //carouselRef.current.goTo(i);
    setSlide(i);
  };

  return (
    <>
      <Grid>
        <Paper nopadding blue>
          <Content>
            <Left>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SectionTitle>top projects</SectionTitle>

                <Scroll>
                  <Line>
                    <Nav active={slide === 0}>
                      <ArrowRightOutlined />
                      <Lead small white title onClick={() => handleGoTo(0)}>
                        all-Russian touristic crowdsourcing
                      </Lead>
                    </Nav>
                    <Nav active={slide === 1}>
                      <ArrowRightOutlined />
                      <Lead small white title onClick={() => handleGoTo(1)}>
                        from Moscow to Snt. Petersbutg
                      </Lead>
                    </Nav>
                    <Nav active={slide === 2}>
                      <ArrowRightOutlined />
                      <Lead small white title onClick={() => handleGoTo(2)}>
                        the Russian Far East
                      </Lead>{" "}
                    </Nav>
                    <Nav active={slide === 3}>
                      <ArrowRightOutlined />
                      <Lead small white title onClick={() => handleGoTo(3)}>
                        what Krasnoyarsk wants
                      </Lead>
                    </Nav>
                  </Line>
                </Scroll>
              </div>
            </Left>

            <Right>
              {slide === 0 && (
                <Slide>
                  <Space direction="vertical">
                    <Lead white title>
                      all Russian touristic crowdsoursing
                    </Lead>
                    <Lead small>
                      Tourist attractiveness of a territory increases the
                      development of local businesses and communities. It leads
                      to economic growth and improves the quality of the urban
                      environment. The crowdsourcing platform can capture the
                      opinions of all parties.
                    </Lead>
                  </Space>

                  <LinkPanel wrap>
                    <Li href="/" target={"_blank"}>
                      <Link>Visit website</Link>
                    </Li>
                  </LinkPanel>
                  <SiteScreen url={1}></SiteScreen>
                </Slide>
              )}

              {slide === 1 && (
                <Slide>
                  <Space direction="vertical">
                    <Lead white title>
                      from Moscow to st. Petersburg
                    </Lead>
                    <Lead small>
                      A crowdsourcing within the development of a tourism master
                      plan of 8 Russian subjects as one macro-region is
                      currently underway. Its results will form the basis of a
                      document that aims to expand travel infrastructure, make
                      familiar vacation spots more engaging and comfortable, and
                      diversify the tourist experience.
                    </Lead>
                  </Space>

                  <LinkPanel wrap>
                    <Li href="/" target={"_blank"}>
                      <Link>Visit website</Link>
                    </Li>
                  </LinkPanel>
                  <SiteScreen url={2}></SiteScreen>
                </Slide>
              )}

              {slide === 2 && (
                <Slide>
                  <Space direction="vertical">
                    <Lead white title>
                      The Russian Far East
                    </Lead>
                    <Lead small>
                      Residents of Petropavlovsk-Kamchatsky, Yelizovo,
                      Khabarovsk, Chita, Vladivostok, Artyom, and
                      Blagoveshchensk shared their ideas on what spaces and
                      services they lack. These ideas will form the basis for
                      developing master plans for cities and agglomerations.
                    </Lead>
                  </Space>

                  <LinkPanel wrap size={16}>
                    <Li href="/" target={"_blank"}>
                      <Link>Khabarovsk</Link>
                    </Li>

                    <Li href="/" target={"_blank"}>
                      <Link>Vladivostok</Link>
                    </Li>

                    <Li href="/" target={"_blank"}>
                      <Link>Petropavlovsk-Kamchatsky</Link>
                    </Li>

                    <Li href="/" target={"_blank"}>
                      <Link>Chita</Link>
                    </Li>

                    <Li href="/" target={"_blank"}>
                      <Link>Blagoveschensk </Link>
                    </Li>
                  </LinkPanel>
                  <SiteScreen url={3}></SiteScreen>
                </Slide>
              )}

              {slide === 3 && (
                <Slide>
                  <Space direction="vertical">
                    <Lead white title>
                      what Krasnoyarsk whants
                    </Lead>
                    <Lead small>
                      Krasnoyarsk citizens left more than 400 suggestions on how
                      to make life in the city more comfortable and interesting.
                      All ideas were taken into account in the development of
                      the Strategic Master Plan for the city, initiated by the
                      Yenisei Siberia Development Corporation with the support
                      of the Government of the Krasnoyarsk Territory and the
                      administration of the city of Krasnoyarsk.
                    </Lead>
                  </Space>

                  <SiteScreen url={4}></SiteScreen>
                </Slide>
              )}
            </Right>
          </Content>
        </Paper>
      </Grid>
    </>
  );
};

export default BlockTop;
