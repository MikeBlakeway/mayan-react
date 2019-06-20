import React, { Component } from "react";
import Glyphs from "../../components/icons/Glyphs/Glyphs";
import { Grid, Row, Col } from "react-flexbox-grid";
import HeroButton from "../../components/utils/buttons/HeroButton";
import * as PageIcon from "../../components/icons/PageIcons/PageIcons";

export default class ServicesPage extends Component {
  render() {
    return (
      <Grid id="services">
        <Glyphs />
        <Row>
          <small className="text-center block mt-3 mb-1">MAYAN STUDIO</small>
          <h1 className="text-center block mb-2">WEBSITE PACKAGES</h1>
        </Row>
        <Row>
          <Col xs={12} md={6} className="lead mb-4">
            <p>
              We all like structure don’t we? Getting the most for our money is
              an important part of any deal we consider taking seriously.
              Websites can be awkward to find a common price for. Nonetheless,
              we strive to make things as clear as possible here at Mayan Web
              Studio.
            </p>
            <HeroButton linkTo="/contact" content="Get In Touch" />
          </Col>
          <Col xs={12} md={6}>
            <p className="copy">
              We all like structure don’t we? Getting the most for our money is
              an important part of any deal we consider taking seriously.
            </p>
            <p className="copy">
              Websites can be awkward to find a common price for, so it’s pretty
              typical of most development teams to quote based on your
              requirements rather than offering something ‘off the shelf’.
            </p>
            <p className="copy">
              Nonetheless, we strive to make things as clear as possible here at
              Mayan Web Studio so putting together a solid guide as to just how
              much your budget is going to get you seemed only right.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <h3 className="mt-2 mb-1">PACKAGES</h3>
            <div className="icons--small">{/* <!-- icons here --> */}</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
        </Row>

        <Row className="text-left p-1">
          <Col xs={12} lg={6} className="packages carousel">
            <div className="packages--container">
              <PageIcon.Basic />
              <h4 className="text-left">
                Basic<span>from &pound;199</span>
              </h4>

              <p className="feature--copy text-left">
                This is the essentials of a website and nothing less. You get
                the choice of a number of standard layouts, a brief design
                consultation to confirm your branding and three pages. All
                designs are fully mobile responsive as standard.
              </p>
            </div>

            <div className="packages--container">
              <PageIcon.Static />
              <h4 className="text-left">
                Static<span>from &pound;499</span>
              </h4>

              <p className="feature--copy">
                DIY is great, but after a month or two of tweaking and changing
                it can become bloated and ugly. We create specific brand
                guideline to ensure your site looks great no matter how much you
                choose to add to it down the line.
              </p>
            </div>
            <div className="packages--container">
              <PageIcon.Dynamic />
              <h4 className="text-left">
                Dynamic<span>from &pound;849</span>
              </h4>

              <p className="feature--copy">
                What you need today may be simple, but as your company grows so
                too should your website. Our sites are designed to allow easy
                and painless scalability, which means adding new complex
                functionalities won’t require a costly redesign.
              </p>
            </div>
            <div className="packages--container">
              <PageIcon.FullStack />
              <h4 className="text-left">
                Full Stack<span>from &pound;1349</span>
              </h4>

              <p className="feature--copy">
                We offer all of our websites with the option of hosting from our
                own suppliers, allowing us to quickly access your website and
                get straight to the problem should the worst happen and your
                site goes down. Or you could try maintaining it yourself?
              </p>
            </div>
          </Col>

          <Col xs={12} lg={6} className="feature package--price">
            <div className="price--container">
              <h3>BASIC WEBSITE PACKAGE</h3>
              <span>from &pound;199</span>
              <p>
                This is the essentials of a website and nothing less. You get
                the choice of a number of standard layouts, a brief design
                consultation to confirm your branding and three pages. All
                designs are fully mobile responsive as standard.
              </p>
              <h5>What’s included?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <ul className="prices--included">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div className="price--container">
              <p className="feature--copy">static</p>
            </div>
            <div className="price--container">
              <p className="feature--copy">dynamic</p>
            </div>
            <div className="price--container">
              <p className="feature--copy">full stack</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
