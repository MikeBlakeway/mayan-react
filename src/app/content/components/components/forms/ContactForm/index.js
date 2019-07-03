import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import sendGrid from "@sendgrid/mail";

export default class ContactForm extends Component {
  render() {
    return <RouterForm />;
  }
}
const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

const InnerForm = props => {
  const { values, errors, touched, isSubmitting, handleSubmit } = props;
  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <div className="message-container">
        <Field name="message" component="textarea" rows="3" required />
        <label htmlFor="message" className="label-name">
          <span className="content-name">How can I help you?</span>
        </label>
        {touched.message && errors.message && (
          <div className="error-message">{errors.message}</div>
        )}
      </div>
      <div className="field-container">
        <Field type="text" name="fname" required />
        <label htmlFor="fname" className="label-name">
          <span className="content-name">First Name</span>
        </label>
        {touched.fname && errors.fname && (
          <div className="error-message">{errors.fname}</div>
        )}
      </div>
      <div className="field-container">
        <Field type="text" name="lname" required />
        <label htmlFor="lname" className="label-name">
          <span className="content-name">Last Name</span>
        </label>
        {touched.lname && errors.lname && (
          <div className="error-message">{errors.lname}</div>
        )}
      </div>
      <div className="field-container">
        <Field type="email" name="email" required />
        <label htmlFor="email" className="label-name">
          <span
            className={
              "content-name" + (values.email.length > 0 ? " validating" : "")
            }
          >
            Email
          </span>
        </label>
        {touched.email && errors.email && (
          <div className="error-message">{errors.email}</div>
        )}
      </div>
      <div className="field-container">
        <Field type="tel" name="phone" required />
        <label htmlFor="phone" className="label-name">
          <span className="content-name">Phone</span>
        </label>
        {touched.phone && errors.phone && (
          <div className="error-message">{errors.phone}</div>
        )}
      </div>
      <button type="submit" className="submit-button">
        {isSubmitting ? "SENDING" : "SUBMIT"}
      </button>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues: ({ fname, lname, email, phone, message }) => ({
    fname: fname || "",
    lname: lname || "",
    email: email || "",
    phone: phone || "",
    message: message || ""
  }),
  validationSchema: Yup.object().shape({
    message: Yup.string()
      .min(3, "You can do better than that!")
      .required("Please enter a message"),
    lname: Yup.string().required("Please enter your last name"),
    fname: Yup.string()
      .min(3, "Please enter your full name!")
      .required("Please enter your first name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    phone: Yup.number()
      .typeError("Phone numbers cannot contain letters")
      .positive("A phone number can't start with a minus")
      .required("Please add your phone number")
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const mailContent = {
      to: values.email,
      from: "hello@mayanwebstudio.co.uk",
      subject: "I got your message!",
      text: "Some random text that I will add later...",
      html: "<strong>Hey look! HTML!!</strong>"
    };
    sendGrid.send(mailContent);

    // props.history.push("/");
    setSubmitting(false);
  }
})(InnerForm);

const RouterForm = withRouter(FormikForm);
