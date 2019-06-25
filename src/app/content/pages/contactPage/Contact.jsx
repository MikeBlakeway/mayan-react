import React, { Component } from "react";
import ContactForm from "../../components/components/forms/ContactForm";
import { Grid, Row, Col } from "react-flexbox-grid";
import Glyphs from "../../components/icons/Glyphs/Glyphs";

export default class ContactPage extends Component {
  render() {
    return (
      <Grid className="py-3">
        <Glyphs type="icons-container" />
        <Row>
          <small className="text-center block mt-3 mb-1">MAYAN STUDIO</small>
          <h1 className="text-center block mb-2">Let's Talk</h1>
        </Row>
        <Row className="px-3">
          <Col xs={12} md={6} className="lead mb-4">
            <p>
              If you’re ready to take the next step then all you need to do is
              get in touch via your preferred contact method below. We respond
              to all form submissions within a couple of hours (typically
              quicker during working hours). We can’t wait!
            </p>
          </Col>
        </Row>

        <Row className="px-3 pb-3">
          <Col md={6}>
            <h3 className="icons-inline--title">
              CONTACT
              <Glyphs
                type="icons-inline"
                width="50px"
                height="50px"
                opacity="0.15"
              />
            </h3>

            <p className="mb-5">07738 151 767</p>
            <p className="mb-5">hello@mayanwebstudio.co.uk</p>
          </Col>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}
