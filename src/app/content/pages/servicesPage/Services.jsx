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
          <h1 className="text-center block mb-2">
            WEBSITE DEVELOPMENT SERVICES
          </h1>
        </Row>
        <Row>
          <Col xs={12} md={6} className="lead mb-4">
            <p>
              Designing your site to look great is often where people who build
              their own websites get it wrong. You can spend hours staring at
              template after template on build tools like Wix or Squarespace
              without ever really considering the most important question… “What
              problem am I trying to solve?”
            </p>
            <HeroButton linkTo="/packages" content="View Web Packages" />
          </Col>
          <Col xs={12} md={6}>
            <p className="copy">
              What makes a great website? If you were to ask the average person
              their thoughts on this question you will probably hear quite a
              wide range of opinions. Like a lot of things in life, whether your
              website is good or bad comes down to taste and there is no one
              size that fits all. If you focus entirely on building something
              that everyone can agree looks like a great website then you are
              not being very realistic.
            </p>
            <p className="copy">
              Any web development professional that has been working longer than
              5 minutes in the business will tell you that the first problem to
              solve when building a successful website is “Identify the
              problem”. Focus on what you actually need, not what you think you
              need. It might sound a little patronising, but it’s not as easy to
              do as you might think.
            </p>
            <p className="copy">
              The biggest difficulty is that we don’t know what we don’t know,
              or we think we know when in fact we don’t. Getting professional
              support is a vital part of building any great website - they can
              help you to think more strategically as well as identify the
              potential pitfalls and missed opportunities that you may never
              have been able to envision on your own. That insight is what makes
              the difference between a great website and a website that just
              looks great.
            </p>
            <p className="copy">
              Here are just a few things that you might want to consider before
              jumping straight in to building your website. We offer all of
              these services and more at very reasonable prices.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <h3 className="mt-2 mb-1">SERVICES</h3>
            <div className="icons--small">{/* <!-- icons here --> */}</div>
            <p>
              There’s a lot to consider when it comes to building a website that
              works well and looks beautiful. It can be tempting to put design
              ahead of functionality, but often this can result in poor
              performance and long hours spent trying to maintain the look and
              feel of your site as it grows beyond your control. Mayan Web
              Studio offers a complete development solution along with ongoing
              aftercare and support to ensure that your website and overall
              digital strategy remains as robust and efficient as your business
              should be. Here are just a few things that we like to consider
              before jumping straight in to building your website.
            </p>
          </Col>
        </Row>

        <Row className="text-center p-1">
          <Col xs={12} md={6} className="feature">
            <PageIcon.Responsive />
            <h4>Responsive Design</h4>
            <p className="feature--copy">
              Smart phones and tablets come in an ever increasing variety of
              shapes and sizes. There are big ones, little ones, wide ones, thin
              ones - all of which need to render your website well if you are to
              convert our visitors effectively.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Interface />
            <h4>Animation</h4>
            <p className="feature--copy">
              It’s often an after thought in web design, but animation is
              essential to keeping your website visitors interested in the
              message you are trying to deliver. From simple page transitions to
              eye catching special effects. It all counts.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Vision />
            <h4>UI / UX</h4>
            <p className="feature--copy">
              Imagine being handed a fork to eat your soup with. It’d be pretty
              frustrating to say the least, right? Now imagine landing on a
              website and not knowing how to get around or what to read first.
              You’d probably just leave I think. This is bad UI/UX.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Funnel />
            <h4>Ecommerce</h4>
            <p className="feature--copy">
              Online sales is a minefield of its own. A lot of thought needs to
              go into how your website is structured. Your visitors will need to
              be able to get from “I’m looking for” to “Look what I bought” with
              minimal thought involved.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Algorithm />
            <h4>Development</h4>
            <p className="feature--copy">
              There are so many options available to you when it comes to
              choosing your development technology. Choosing one might not seem
              important - until it stops working. You’ll need to pick wisely if
              you want to avoid headaches later on.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Social />
            <h4>User Accounts</h4>
            <p className="feature--copy">
              If you’re looking to provide an online service then you are going
              to need some way for your users to identify who they are before
              the start interacting with it. This is what a user account is for,
              and it will require an expert to set up properly.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.HostingServers />
            <h4>Hosting</h4>
            <p className="feature--copy">
              So how does your website actually get served to visitors? This is
              where web hosting comes in to play. There are a lot of options,
              but none of them are aimed at beginners and there is no room for
              error.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Architecture />
            <h4>Database Architecture</h4>
            <p className="feature--copy">
              Any larger scale website is going to require a database in order
              to record the information your users are giving you. Getting
              everything ready to receive your data is no small task and
              requires plenty of preparation.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
