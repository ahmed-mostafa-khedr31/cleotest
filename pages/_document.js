import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="format-detection" content="telephone=no" />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY="
            crossOrigin="anonymous"
          />

          <meta name="robots" content="noindex, nofollow" />
          <link rel="dns-prefetch" href="fonts.googleapis.com" />

          <link
            property="stylesheet"
            rel="stylesheet"
            id="playa-font-google_fonts-css"
            href="https://fonts.googleapis.com/css?family=Khand%3A400%2C500%2C700%7COswald%3A400%2C500%2C600%7CPlayfair+Display%3A400%2C400i%2C700%2C700i&amp;subset=latin%2Clatin-ext&amp;ver=6.4.1&display=optional"
            type="text/css"
            media="all"
          />
        </Head>
        <body className="home page-template-default page page-id-110 theme-playa frontpage woocommerce-no-js tribe-no-js page-template-playa body_tag scheme_default blog_mode_front body_style_wide is_stream blog_style_excerpt sidebar_hide expand_content remove_margins header_style_header-custom-26 header_position_default menu_style_top no_layout wpb-js-composer js-comp-ver-7.1 vc_responsive">
          <Main />
          <NextScript />

          <a
            href="#"
            className="trx_addons_scroll_to_top trx_addons_icon-up"
            title="Scroll to top"
          ></a>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof revslider_showDoubleJqueryError === "undefined") {
                  function revslider_showDoubleJqueryError(sliderID) {
                    console.log(
                      "You have some jquery.js library include that comes after the Slider Revolution files js inclusion."
                    );
                    console.log("To fix this, you can:");
                    console.log(
                      "1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
                    );
                    console.log("2. Find the double jQuery.js inclusion and remove it");
                    return "Double Included jQuery Library";
                  }
                }
              `,
            }}
          ></script>

          <script src="/js/index.js" id="swv-js" async></script>
          <script src="/js/index2.js" id="contact-form-7-js" async></script>
          <script
            src="/js/swiper.jquery.min.js"
            id="swiperslider-js"
            async
          ></script>
          <script
            src="/js/jquery.magnific-popup.min.js"
            id="magnific-popup-js"
            async
          ></script>
          <script src="/js/superfish.js" id="superfish-js" async></script>
          <script src="/js/__scripts.js" id="playa-init-js" async></script>
          <script
            src="/js/js_composer_front.min.js"
            id="wpb_composer_front_js-js"
            async
          ></script>
          <script
            src="/js/esg.min.js"
            id="esg-essential-grid-script-js"
            async
          ></script>
          <script src="/js/esgbox.min.js" id="esg-tp-boxext-js" async></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
