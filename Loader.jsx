import React, { useEffect, useState } from "react";
// import { Container, ProgressBar } from "react-bootstrap";

const Loader = () => {
  const [now, setNow] = useState(0);

  useEffect(() => {
    now <= 95 && setTimeout(() => setNow(now + 10), [100]);
  }, [now]);

  return (
    <>
      <div className="preloader">
        <div className="loader">
          <div className="pre-shadow"></div>
          <div className="pre-box"></div>
        </div>
      </div>
      {/*
          <div style={{ height: "100vh" }}>
        <Container className="mt-5 text-center">
          {" "}
          <div className="loader d-flex justify-content-center align-items-center">
            <div>
              {" "}
              <img alt="loader" src="images/loader.gif" />
              <p className="fs-4 mt-3">Loading...</p>
            </div>
          </div><ProgressBar
            animated
            now={now}
            label={`${now}%`}
            style={{ height: "2px", color: "#000" }}
          />  </Container>
      </div>
    */}
    </>
  );
};

export default Loader;
