import React from "react";
import Link from "next/link";

export const Beach = () => {
  return (
    <section>
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="true"
        className="vc_row wpb_row vc_row-fluid vc_custom_1499075715831 vc_row-has-fill d-flex flex-column flex-lg-row align-items-center"
        style={{
          backgroundImage: `url(/beach-section.jpg)`,
          backgroundSize: "100% 100% ",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          left: "0px",
          boxSizing: "border-box",
          width: "unset",
          maxWidth: "unset",
          height: "80vh",
          paddingLeft: "230px",
          paddingRight: "230px",
          right: "auto",
        }}
      >
        <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                id="sc_action_847449838"
                className="sc_action color_style_default scheme_dark sc_action_default"
              >
                <h2 className="sc_item_title sc_action_title sc_align_center sc_item_title_style_default">
                  <i> Unwind on Cleopark&apos;s</i>
                  <br />
                </h2>
                <div className="sc_action_content sc_item_content">
                  <div className="sc_action_item sc_action_item_default sc_action_item_mc">
                    {/* Content here */}
                  </div>
                </div>
              </div>
              <div
                className="vc_empty_space height_small"
                style={{ height: "32px" }}
              >
                <span className="vc_empty_space_inner"></span>
              </div>
              <div className="sc_item_button sc_button_wrap sc_align_center">
                <Link
                  href="/beach"
                  passHref
                  className="sc_button color_style_default sc_button_alternative sc_button_size_large sc_button_icon_left sc_button_hover_slide_left sc_button_hover_style_inverse px-5 py-3"
                >
                  <span className="sc_button_title">view More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
