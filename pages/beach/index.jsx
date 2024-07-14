import React, { useRef } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beachImg from "./beach.jpg";

import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
const createTiltHandler = (tiltRef) => {
  return {
    handleMove: (e) => {
      const el = tiltRef.current;
      const height = el.clientHeight;
      const width = el.clientWidth;

      const xVal = e.nativeEvent.offsetX;
      const yVal = e.nativeEvent.offsetY;

      const yRotation = 30 * ((xVal - width / 2) / width);
      const xRotation = -30 * ((yVal - height / 2) / height);

      const transformString = `perspective(1000px)  rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1,1,1)`;
      el.style.transform = transformString;
    },

    handleMouseOut: () => {
      const el = tiltRef.current;
      el.style.transform =
        "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
    },

    handleMouseDown: () => {
      const el = tiltRef.current;
      el.style.transform =
        "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
    },

    handleMouseUp: () => {
      const el = tiltRef.current;
      el.style.transform =
        "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
    },
  };
};
const Beach = () => {
  const tiltRef1 = useRef(null);

  const tiltHandler1 = createTiltHandler(tiltRef1);

  return (
    <>
      <Head>
        <title>Beach</title>
      </Head>
      <Layout>
        <section>
          <div className="vc_row wpb_row vc_row-fluid vc_custom_1502376432008 vc_row-has-fill sc_layouts_row sc_layouts_row_type_normal sc_layouts_hide_on_frontpage scheme_dark">
            <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div
                    id="sc_content_1271549084"
                    className="sc_content color_style_default sc_content_default sc_content_width_1_1 sc_float_center"
                  >
                    <div className="sc_content_container">
                      <div className="sc_layouts_item">
                        <div
                          id="sc_layouts_title_520295187"
                          className="sc_layouts_title with_content"
                        >
                          <div className="sc_layouts_title_content">
                            <div className="sc_layouts_title_title">
                              <Bounce headShake duration={2000}>
                                <h1 className="sc_layouts_title_caption">
                                  Beach
                                </h1>
                              </Bounce>
                              <ul className="breadcrumb">
                                <Fade direction="up" duration={2000}>
                                  <li>
                                    <Link href="/">Home</Link>
                                  </li>

                                  <li>Beach</li>
                                </Fade>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginTop: "12vh" }} id="welcome-section ">
          <div className=" bg-light py-5">
            <Container>
              <article className="py-5 my-5">
                <Fade cascade direction="up" duration={1000} delay={0}>
                  {" "}
                  <h6 className="sc_item_subtitle sc_services_subtitle sc_align_center sc_item_title_style_default mb-3">
                    Unwind on Cleopark&apos;s Sandy Beach at <br />
                  </h6>
                  <h2 className="sc_item_title sc_services_title sc_align_center sc_item_title_style_default sc_item_title_tag mb-5">
                    Fayrouz Resort!
                  </h2>
                </Fade>
                {/*R1 */}

                <div className="col-11 col-lg-10 mx-auto d-flex flex-column flex-lg-row justify-content-between align-items-center py-lg-5   ">
                  <div
                    className="col-11 col-lg-6"
                    ref={tiltRef1}
                    onMouseMove={tiltHandler1.handleMove}
                    onMouseOut={tiltHandler1.handleMouseOut}
                    onMouseDown={tiltHandler1.handleMouseDown}
                    onMouseUp={tiltHandler1.handleMouseUp}
                    style={{ transition: "none" }}
                  >
                    <Fade direction="left" duration={1500} delay={100}>
                      <Image src={beachImg} alt="Beach" />
                    </Fade>
                  </div>
                  <div className="col-11 col-lg-6 py-4 ps-lg-5 pe-lg-2">
                    <Fade direction="right" duration={1000} delay={100}>
                      <div className="wpb_text_column wpb_content_element py-4 ps-3 pe-5">
                        <div className="wpb_wrapper">
                          <p className="text-left pt-2  px-5 fs-3 lh-base">
                            Come and enjoy the beautiful sandy crystal water
                            beach at Fayrouz Resort! It is the perfect place to
                            relax and soak up the sun. Our beach has something
                            for everyone. Book your ticket now and experience
                            the ultimate beach only for $10.
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </article>
            </Container>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Beach;
