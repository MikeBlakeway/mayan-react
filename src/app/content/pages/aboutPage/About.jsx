import React, { Component } from "react";
import Glyphs from "../../components/icons/Glyphs/Glyphs";
import { Grid, Row, Col } from "react-flexbox-grid";
import HeroButton from "../../components/components/buttons/HeroButton";
import * as PageIcon from "../../components/icons/PageIcons/PageIcons";

export default class AboutPage extends Component {
  render() {
    return (
      <Grid id="about">
        <Glyphs />
        <Row>
          <small className="text-center block mt-3 mb-1">MAYAN STUDIO</small>
          <h1 className="text-center block mb-2">
            DON’T SACRIFICE YOUR WEBSITE
          </h1>
        </Row>
        <Row>
          <Col xs={12} md={6} className="lead mb-4">
            <p>
              There is no getting around it. These days, if you’re growing a
              successful business in the 21st century, you’ll need a solid
              online presence to stand any chance of surviving. You might last
              for a short while without one, but one thing is certain - your
              competition is already working on theirs…
            </p>
            <HeroButton linkTo="/services" content="View Web Services" />
          </Col>
          <Col xs={12} md={6}>
            <p className="copy">
              In an age where the Internet is king and Google knows all, getting
              hold of information is as easy as asking your phone. Need
              directions? Google. Want to know how to boil an egg? Google. Need
              a plumber? You guessed it… Google. It’s the today’s standard, and
              it’ll still be here tomorrow whether you like it or not.
            </p>
            <p className="copy">
              With the Internet now firmly rooted into our daily lives and
              businesses becoming more and more aware of the need to get online
              if they want to survive (remember Toys ‘R’ Us? HMV? Blockbuster?),
              the internet is becoming incredibly competitive, demanding ever
              more glamorous and interactive websites that fit on every device
              just as a basic.
            </p>
            <p className="copy">
              The problem is that most of us just don’t know enough about this
              digital space to provide even a tenth of the quality that is
              expected. Building a website on your own is much like building
              your own office. You might think you’re pretty handy, but lets
              face it - the stakes are high and there’s a good chance you’re
              going to overlook something important that results in the whole
              thing coming down on you and your customers!
            </p>
            <p className="copy">
              With so much of today’s modern technology ruling the smallest
              details of our lives, getting your website and digital strategy
              right is just too important to be done in half measures. Thinking
              you can get away with something you put together in 20 minutes
              will pay you back the same respect you gave it. Done properly
              however, a professional website will easily return its investment
              many times over. There’s a lot to consider, but getting the right
              help is the hardest part - now that you’re here of course, the
              hard part is over…
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <h3 className="mt-2 mb-1">ABOUT US</h3>
            <div className="icons--small">{/* <!-- icons here --> */}</div>
            <p>
              Mayan web Studio was set up to offer sole traders and SME
              businesses a cost effective way to get online in a way that allows
              your business to scale with you as you grow. It is designed to be
              a step above the usual DIY website approach that many businesses
              adopt when first starting out. Often these solutions can lead to
              significant complications as your business grows, meaning that you
              are then taken away from running the day to day operation of your
              business in order to service your digital space instead of
              servicing the results you should be yielding from it. Here are
              just a few points that we aim to overcome when we begin your
              website development project.
            </p>
          </Col>
        </Row>

        <Row className="text-center p-1">
          <Col xs={12} md={6} className="feature">
            <PageIcon.Strategy />
            <h4>Online Strategy</h4>
            <p className="feature--copy">
              If you want the best out of your website and overall digital
              space, then you need to know what you are doing. For most of us
              this is a bit of a minefield, which is why we offer online
              strategy advice with every website - on the house!
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Web />
            <h4>Protection</h4>
            <p className="feature--copy">
              DIY is great, but after a month or two of tweaking and changing it
              can become bloated and ugly. We create specific brand guideline to
              ensure your site looks great no matter how much you choose to add
              to it down the line.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Cloud />
            <h4>Integration</h4>
            <p className="feature--copy">
              Got a CRM, ticket desk, payment gateway or any other kind of third
              party tool that you use to help with running your business? We can
              integrate it all within your website so that everything
              communicates seamlessly from one source.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Puzzle />
            <h4>Scalability</h4>
            <p className="feature--copy">
              What you need today may be simple, but as your company grows so
              too should your website. Our sites are designed to allow easy and
              painless scalability, which means adding new complex
              functionalities won’t require a costly redesign.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Communication />
            <h4>Simple Contact</h4>
            <p className="feature--copy">
              There’s nothing worse than being passed from pillar to post every
              time you need help from your provider. We only have one point of
              contact for your queries and problems, which means it is dealt
              with in one call - not 20.
            </p>
          </Col>

          <Col xs={12} md={6} className="feature">
            <PageIcon.Computer />
            <h4>Site Analysis</h4>
            <p className="feature--copy">
              There’s no support on DIY platforms when it comes to how well your
              site is performing or improving conversions. We work closely with
              our customers to track performance and improve your site wherever
              possible.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
