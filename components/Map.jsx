import React from "react";
import mapImage from "./images/map.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import styles from "../pages/gallery.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getLocations } from "../data/mapSlice";
import { Image } from "next/image";
const Map = () => {
  const locations = useSelector((state) => state.map.locations);
  const dispatch = useDispatch();

  return (
    <section className="map1 position-relative z-3  ">
      <div className="sc_title color_style_default sc_title_default     pt-5">
        <Fade cascade direction="up" duration={1000}>
          <h6 className="sc_item_subtitle sc_title_subtitle sc_align_center sc_item_title_style_default mb-3 pt-5 ">
            Navigating the Water Wonderland
          </h6>
          <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag">
            <Link href="/" className={styles.titleLink}>
              CLEOPARK Explorer
            </Link>
          </h2>
        </Fade>
      </div>
      <Zoom delay={0} duration={1000}>
        <div className="map-container py-5  ">
          {" "}
          <Image src={mapImage} alt="Map" className="map-image" />
          {locations.map((location) => (
            <div
              key={location.id}
              className={`map-marker marker-${location.id} `}
              style={{
                left: location.left,
                top: location.top,
              }}
            >
              <FontAwesomeIcon
                className="marker-icon "
                icon={`fa-solid ${location.icon}`}
              />
              <div className="popup ">{location.text}</div>
            </div>
          ))}{" "}
        </div>
      </Zoom>
    </section>
  );
};

export default Map;
