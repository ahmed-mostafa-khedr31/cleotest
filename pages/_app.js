import "./globals.css";
import "./app.css";
import "./home.css";

import WaterDropCursor from "@/WaterDropCursor";

export default function App({ Component, pageProps }) {
  return (
    <>
      <WaterDropCursor />
      <Component {...pageProps} />
    </>
  );
}
