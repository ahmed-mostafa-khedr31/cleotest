import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import logoImg from "./images/CleoPark_Logo.svg";
import ModalComponent from "./Modal";
import Loader from "../Loader";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImg from "./images/footer2.png";
import topArrowImg from "./images/arrow-up.gif";
import { useMediaQuery } from "@mui/material";

import SvgLogo from "./SvgLogo";
import { useRouter } from "next/router";
import Image from "next/image";
const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery("( maxWidth: 768 )");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setIsButtonVisible(router.asPath.includes("/contact-us"));
  }, [router.asPath]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tiltRef = useRef(null);

  const handleMove = (e) => {
    const el = tiltRef.current;
    const height = el.clientHeight;
    const width = el.clientWidth;

    const xVal = e.nativeEvent.offsetX;
    const yVal = e.nativeEvent.offsetY;

    const yRotation = 50 * ((xVal - width / 2) / width);
    const xRotation = -50 * ((yVal - height / 2) / height);

    const transformString = `perspective(1000px)  rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1,1,1)`;
    el.style.transform = transformString;
  };

  const handleMouseOut = () => {
    const el = tiltRef.current;
    el.style.transform =
      "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  const handleMouseDown = () => {
    const el = tiltRef.current;
    el.style.transform =
      "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  const handleMouseUp = () => {
    const el = tiltRef.current;
    el.style.transform =
      "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="body_wrap">
          <div className="page_wrap">
            {/* Header Start */}
            <header
              id="main_header"
              className="top_panel top_panel_custom top_panel_custom_26 top_panel_custom_header-fullwidth without_bg_image scheme_default"
            >
              <div
                style={{
                  position: "fixed",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                }}
                className="vc_row wpb_row vc_row-fluid vc_custom_1502376686179 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex sc_layouts_row sc_layouts_row_type_compact sc_layouts_row_fixed mobile-header"
              >
                <div className="wpb_column vc_column_container vc_col-sm-3 sc_layouts_column sc_layouts_column_align_left sc_layouts_column_icons_position_left logo-mobile">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div
                        className="sc_layouts_item"
                        ref={tiltRef}
                        id="tilt"
                        onMouseMove={handleMove}
                        onMouseOut={handleMouseOut}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                      >
                        <Link
                          href="/"
                          className="sc_layouts_logo sc_layouts_logo_default"
                        >
                          <SvgLogo
                            width={isMobile ? 60 : 75}
                            height={isMobile ? 60 : 75}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-6 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left icon-mobile">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="sc_layouts_item">
                        <nav className="sc_layouts_menu sc_layouts_menu_default menu_hover_fade hide_on_mobile">
                          <ul
                            id="menu-main-menu"
                            className="sc_layouts_menu_nav"
                          >
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-113">
                              <Link
                                href="/"
                                onClick={() => {
                                  scrollToSection("never-section");
                                }}
                              >
                                <span>About us</span>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                              <Link
                                onClick={() => setLoading(true)}
                                href="membership"
                              >
                                <span>Membership</span>
                              </Link>
                            </li>
                            {/*  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                              <Link
                                onClick={() => setLoading(true)}
                                href="attractions"
                              >
                                <span>Attractions</span>
                              </Link>
                            </li> */}
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                              <Link
                                onClick={() => setLoading(true)}
                                href="facilities"
                              >
                                <span>Facilities</span>
                              </Link>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-117">
                              <Link
                                onClick={() => setLoading(true)}
                                href="/gallery"
                              >
                                <span>Gallery</span>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-117">
                              <Link
                                onClick={() => setLoading(true)}
                                href="water-slides"
                              >
                                <span>Water Slides</span>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-117">
                              <Link
                                onClick={() => setLoading(true)}
                                href="food-and-drinks"
                              >
                                <span>Food & Drink</span>
                              </Link>
                            </li>

                            <li
                              id="menu-item-109"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"
                            >
                              <Link
                                onClick={() => setLoading(true)}
                                href="contact-us"
                              >
                                <span>Contact us</span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        <div className="sc_layouts_iconed_text sc_layouts_menu_mobile_button">
                          <Link
                            className="sc_layouts_item_link sc_layouts_iconed_text_link"
                            href="/"
                            onClick={() => setOpenMenu(true)}
                          >
                            <span className="sc_layouts_item_icon sc_layouts_iconed_text_icon trx_addons_icon-menu"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-3 vc_hidden-sm vc_hidden-xs sc_layouts_column sc_layouts_column_align_right sc_layouts_column_icons_position_left">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="sc_layouts_item sc_layouts_hide_on_mobile sc_layouts_hide_on_tablet">
                        <div className="sc_layouts_iconed_text hide_on_tablet hide_on_mobile on-hover">
                          <Link
                            onClick={() => setLoading(true)}
                            href="tel:+20693603040"
                            className="sc_layouts_item_link sc_layouts_iconed_text_link "
                          >
                            <span className="sc_layouts_item_icon sc_layouts_iconed_text_icon icon-icon_phone"></span>
                            <span className="sc_layouts_item_details sc_layouts_iconed_text_details">
                              <span className="sc_layouts_item_details_line1 sc_layouts_iconed_text_line1 hover">
                                Call us
                              </span>
                              <span className="sc_layouts_item_details_line2 sc_layouts_iconed_text_line2">
                                +20693603040
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="sc_layouts_item sc_layouts_hide_on_mobile">
                        <div className="sc_layouts_cart hide_on_mobile">
                          <ModalComponent
                            btn={
                              <Link
                                href="#."
                                style={{
                                  height: "106px",
                                  width: "100px",
                                  lineHeight: "112px",
                                  textAlign: "center",
                                  transition: "ease all .3s",
                                  color: "#fff",
                                  backgroundColor: "#00516f",
                                }}
                                className="sc_layouts_item_icon  "
                                onClick={handleShow}
                              >
                                Book Now
                              </Link>
                            }
                            handleClose={handleClose}
                            handleShow={handleShow}
                            show={show}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div
              className="menu_mobile_overlay"
              style={{ display: openMenu ? "block" : "none" }}
            ></div>
            <div
              className={`menu_mobile menu_mobile_fullscreen scheme_dark  ${
                openMenu ? "opened" : ""
              }`}
            >
              <div className="menu_mobile_inner">
                <Link
                  href="#."
                  onClick={() => setOpenMenu(false)}
                  className="menu_mobile_close icon-cancel"
                ></Link>
                <Link
                  onClick={() => setLoading(true)}
                  className="sc_layouts_logo"
                  href="/"
                >
                  <SvgLogo
                    width={isMobile ? 90 : 75}
                    height={isMobile ? 90 : 75}
                  />
                </Link>
                <hr
                  className="mx-auto mt-5 mb-0"
                  style={{
                    backgroundColor: "#fcfcfc",
                    borderColor: "#fcfcfc",
                    zIndex: 1111,
                    width: "65%",
                  }}
                />
                <nav
                  className="menu_mobile_nav_area "
                  onClick={() => setOpenMenu(false)}
                >
                  <ul id="menu_mobile-main-menu ">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104 ">
                      <Link onClick={() => setLoading(true)} href="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="menu-item    menu-item-113">
                      <Link
                        href="/"
                        onClick={() => {
                          scrollToSection("never-section");
                        }}
                      >
                        <span>About us</span>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                      <Link onClick={() => setLoading(true)} href="membership">
                        <span>Membership</span>
                      </Link>
                    </li>
                    {/*<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                      <Link
                        onClick={() => setLoading(true)}
                        href="attractions"
                      >
                        <span>Attractions </span>
                      </Link>
                    </li> */}
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                      <Link onClick={() => setLoading(true)} href="facilities">
                        <span>Facilities </span>
                      </Link>
                    </li>
                    {/* <li
                      id="menu_mobile-item-117"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-117"
                    >
                      <Link onClick={() => setLoading(true)} href="pricing">
                        <span>Pricing</span>
                      </Link>
                        </li> */}
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109">
                      <Link onClick={() => setLoading(true)} href="gallery">
                        <span>Gallery</span>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-107">
                      <Link
                        onClick={() => setLoading(true)}
                        href="water-slides"
                      >
                        <span>Water Slider</span>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                      <Link
                        onClick={() => setLoading(true)}
                        href="food-and-drinks"
                      >
                        <span>Food & Drink</span>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                      <Link onClick={() => setLoading(true)} href="contact-us">
                        <span>Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <hr
                  className="mx-auto my-5 mb-0"
                  style={{
                    backgroundColor: "#fcfcfc",
                    borderColor: "#fcfcfc",
                    zIndex: 1111,
                    width: "65%",
                  }}
                />
                <div className="mt-5">
                  <ModalComponent
                    btn={
                      <Link
                        href="#."
                        style={{
                          height: "60px",
                          width: "160px",
                          lineHeight: "60px",
                          textAlign: "center",
                          transition: "ease all .3s",
                          margin: "auto",
                          color: "#fff",
                          backgroundColor: "#00516f",
                        }}
                        className="sc_layouts_item_icon  "
                        onClick={handleShow}
                      >
                        Book Now
                      </Link>
                    }
                    handleClose={handleClose}
                    handleShow={handleShow}
                    show={show}
                  />
                </div>
                <hr
                  className="mx-auto mt-5 mb-0"
                  style={{
                    backgroundColor: "#fcfcfc",
                    borderColor: "#fcfcfc",
                    zIndex: 1111,
                    width: "65%",
                  }}
                />
                <div className="socials_mobile">
                  {/*  <Link
                    onClick={() => setLoading(true)}
                    href="https://twitter.com/CleoParkSharm"
                    target="_blank"
                    className="social_item  social_item_style_icons social_item_type_icons"
                  >
                    <span className="social_icon social_twitter-1">
                      <span className="icon-twitter-1"></span>
                    </span>
                  </Link> */}
                  <Link
                    onClick={() => setLoading(true)}
                    rel="noopener"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100094769816587"
                    className="social_item social_item_style_icons social_item_type_icons"
                  >
                    <span className="social_icon social_facebook">
                      <span className="icon-facebook"></span>
                    </span>
                  </Link>
                  <Link
                    onClick={() => setLoading(true)}
                    target="_blank"
                    href="https://www.instagram.com/cleowaterpark?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="social_item social_item_style_icons social_item_type_icons"
                  >
                    <span className="social_icon social_instagramm">
                      <span className="icon-instagramm"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Header End */}
            {/* Body Start*/}
            <main> {children} </main>
            {/* Body End */}
            <Link
              href="#"
              onClick={() => scrollToSection("main_header")}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                textAlign: "center",
                padding: "0px",

                position: "fixed",
                display: scrolled ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                bottom: "20px",
                right: "30px",
                zIndex: 999999,
                padding: "3px",
              }}
            >
              <Image
                src={topArrowImg}
                alt="to-top-arrow"
                style={{
                  widows: "100%",
                  height: "100%",
                  cursor: "pointer",
                  padding: "0px",

                  border: "1px solid #ffba00",

                  backgroundColor: "#fff",
                  borderRadius: "50%",
                }}
              />
            </Link>
            {/* Footer Start */}
            <footer className="footer_wrap footer_custom footer_custom_19 footer_custom_footer-with-coumpound-menu scheme_default">
              <div
                className="img-ladder"
                style={{ height: isButtonVisible && "0" }}
              >
                <Image src={footerImg} alt="footer" />
              </div>
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1544635100306 vc_row-has-fill sc_layouts_row sc_layouts_row_type_normal">
                <Container>
                  <div className="row px-lg-5 mx-5">
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0 text-center text-lg-start  pe-5">
                      <div className="contacts_logo  m-0 ms-2">
                        <SvgLogo
                          width={isMobile ? 60 : 85}
                          height={isMobile ? 60 : 85}
                          className="logo-white"
                        />
                      </div>
                      <p className="fs-4 pt-3 text-light  ">
                        There are plenty of fun activities and thrilling rides
                        to experience at Cleopark, ensuring you will never run
                        out of things to do.
                      </p>
                    </div>

                    <div className="menu-footer-menu-container col-12 col-lg-2">
                      <h6 className="text-light mt-0 pt-0 mb-3">Quick Links</h6>
                      <ul className=" menu  d-block">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-233">
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-chevron-right"
                            className="text-light fs-5"
                          />{" "}
                          <Link
                            onClick={() => setLoading(true)}
                            href="membership"
                          >
                            Membership
                          </Link>
                        </li>
                        {/*<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-229">
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-chevron-right"
                            className="text-light fs-5"
                          />{" "}
                          <Link
                            onClick={() => setLoading(true)}
                            href="attractions"
                          >
                            Attractions
                          </Link>
                        </li> */}
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-229">
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-chevron-right"
                            className="text-light fs-5"
                          />{" "}
                          <Link
                            onClick={() => setLoading(true)}
                            href="facilities"
                          >
                            Facilities
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235">
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-chevron-right"
                            className="text-light fs-5"
                          />{" "}
                          <Link onClick={() => setLoading(true)} href="gallery">
                            Gallery
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235">
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-chevron-right"
                            className="text-light fs-5"
                          />{" "}
                          <Link
                            onClick={() => setLoading(true)}
                            href="water-slides"
                          >
                            Water Slides
                          </Link>
                        </li>

                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-231">
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-chevron-right"
                            className="text-light fs-5"
                          />
                          <Link
                            onClick={() => setLoading(true)}
                            href="contact-us"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-footer-menu-container col-12 col-lg-3">
                      <h6 className="text-light mt-0 pt-0 mb-3">
                        Opening Hours
                      </h6>

                      <p className="text-light mb-0">
                        <span className="sc_icon_type_ icon-icon_clock pe-2"></span>
                        Everyday from [ 10 am till 16:00]
                      </p>

                      <p className="text-light pe-5 opacity-75 fs-5">
                        Experience the ultimate excitement of the
                        pharaonic-themed water slides at CleoPark in
                        Sharm El Sheikh.
                        <br />
                      </p>
                    </div>
                    <div className="col-12 col-lg-3">
                      <h6 className="text-light mt-0 pt-0 mb-3">Contact Us</h6>
                      <div className="sc_icons sc_icons_default sc_icons_size_small sc_align_left">
                        <div className="sc_icons_item sc_icons_item_linked">
                          <div className="sc_icons_icon sc_icon_type_ icon-icon_phone">
                            <span className="sc_icon_type_ icon-icon_phone"></span>
                          </div>
                          <h4 className="sc_icons_item_title text-light">
                            <span> +20693603040</span>
                          </h4>
                          <Link
                            href="tel:+201212876669"
                            className="sc_icons_item_link"
                          ></Link>
                        </div>

                        <div className="sc_icons_item sc_icons_item_linked">
                          <div className="sc_icons_icon sc_icon_type_ icon-icon_pin">
                            <span className="sc_icon_type_ icon-icon_pin"></span>
                          </div>
                          <h4 className="sc_icons_item_title text-light  fs-5">
                            <span>
                              Sharm Dreams Resort –<br /> Naama Bay, Sharm
                              el-Sheikh, Egypt
                            </span>
                          </h4>
                          <Link
                            href="https://maps.app.goo.gl/H8oRCavnUwKT8yEs9"
                            className="sc_icons_item_link"
                            target="_Blank"
                          ></Link>
                        </div>
                        <div className="sc_icons_item sc_icons_item_linked">
                          <div className="sc_icons_icon sc_icon_type_ icon-icon_envelope">
                            <span className="sc_icon_type_ icon-icon_envelope"></span>
                          </div>
                          <h4 className="sc_icons_item_title">
                            <span>
                              <Link
                                href="mailto:fo.sharmdreams@jazhotels.com"
                                className="__cf_email__ text-light fs-5"
                              >
                                fo.sharmdreams@jazhotels.com
                              </Link>
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="ms-lg-0 py-3 py-lg-0  text-center ">
                        {/* <Link
                          onClick={() => setLoading(true)}
                          target="_blank"
                          href="https://twitter.com/CleoParkSharm"
                          className="social_item social_item_style_icons social_item_type_icons "
                        >
                          <span className="social_icon social_twitter-1">
                            <span className="icon-twitter-1"></span>
                          </span>
                        </Link>  */}

                        <Link
                          onClick={() => setLoading(true)}
                          target="_blank"
                          href="https://www.facebook.com/profile.php?id=100094769816587"
                          className="social_item social_item_style_icons social_item_type_icons"
                        >
                          <span className="social_icon social_facebook">
                            <span className="icon-facebook"></span>
                          </span>
                        </Link>
                        <Link
                          onClick={() => setLoading(true)}
                          target="_blank"
                          href="https://www.instagram.com/cleowaterpark?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          className="social_item social_item_style_icons social_item_type_icons"
                        >
                          <span className="social_icon social_instagramm">
                            <span className="icon-instagramm"></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_wp_text wpb_content_element text-center mt-5 mx-auto d-lg-flex justify-content-between py-4"
                    style={{ borderTop: "1px solid #c7c7c7" }}
                  >
                    <div>
                      {" "}
                      <p className="text-light   mb-0">
                        © 2024 CleoPark. &nbsp; All Rights Reserved.
                      </p>
                    </div>
                    <div>
                      {" "}
                      <Link
                        className="privacy me-2"
                        onClick={() => setLoading(true)}
                        href="privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                      <span className="text-light fs-5">-</span>
                      <Link
                        className="privacy ms-2"
                        onClick={() => setLoading(true)}
                        href="terms-and-conditions"
                      >
                        Terms & Conditions
                      </Link>
                    </div>
                    <div>
                      <span className="text-light opacity-75">Powered By </span>
                      <Link
                        className="privacy ps-2"
                        onClick={() => setLoading(true)}
                        href="https://titegypt.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TITSolutions
                      </Link>
                    </div>
                  </div>
                </Container>
              </div>
            </footer>
            {/* Footer End */}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
