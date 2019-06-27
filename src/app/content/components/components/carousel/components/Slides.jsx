import React from "react";
import * as PageIcon from "../../../../components/icons/PageIcons/PageIcons";

const priceTag = {
  fontFamily: "Futura",
  color: "#369ba1",
  fontStyle: "Italic",
  textTransform: "lowercase",
  display: "block",
  fontSize: "1.4rem"
};

// PACKAGE SNIPPETS
export const BasicSnippet = ({ ...props }) => (
  <div>
    <PageIcon.Basic />
    <h4 className="text-center mt-1 mb-2" style={{ color: "black" }}>
      Basic
      <span style={priceTag}>from &pound;199</span>
    </h4>

    <p className="text-justify pb-3">
      This is the essentials of a website and nothing less. You get the choice
      of a number of standard layouts, a brief design consultation to confirm
      your branding and three pages. All designs are fully mobile responsive as
      standard.
    </p>
  </div>
);

export const StaticSnippet = ({ ...props }) => (
  <div>
    <PageIcon.Static />
    <h4 className="text-center mt-1 mb-2" style={{ color: "black" }}>
      Static
      <span style={priceTag}>from &pound;499</span>
    </h4>

    <p className="text-justify pb-3">
      DIY is great, but after a month or two of tweaking and changing it can
      become bloated and ugly. We create specific brand guideline to ensure your
      site looks great no matter how much you choose to add to it down the line.
    </p>
  </div>
);

export const DynamicSnippet = ({ ...props }) => (
  <div>
    <PageIcon.Dynamic />
    <h4 className="text-center mt-1 mb-2" style={{ color: "black" }}>
      Dynamic
      <span style={priceTag}>from &pound;849</span>
    </h4>

    <p className="text-justify pb-3">
      What you need today may be simple, but as your company grows so too should
      your website. Our sites are designed to allow easy and painless
      scalability, which means adding new complex functionalities won’t require
      a costly redesign.
    </p>
  </div>
);

export const FullStackSnippet = ({ ...props }) => (
  <div>
    <PageIcon.FullStack />
    <h4 className="text-center mt-1 mb-2" style={{ color: "black" }}>
      Full Stack
      <span style={priceTag}>from &pound;1349</span>
    </h4>

    <p className="text-justify pb-3">
      We offer all of our websites with the option of hosting from our own
      suppliers, allowing us to quickly access your website and get straight to
      the problem should the worst happen and your site goes down. Or you could
      try maintaining it yourself?
    </p>
  </div>
);

// PACKAGE DETAILS
export const BasicPackage = ({ ...props }) => (
  <div>
    <h3 className="packages-title">BASIC WEBSITE PACKAGE</h3>
    <p className="mb-2 text-justify">
      This is the essentials of a website and nothing less. You get the choice
      of a number of standard layouts, a brief design consultation to confirm
      your branding and three pages. All designs are fully mobile responsive as
      standard.
    </p>
    <h5 className="mb-2 packages-subtitle">What’s included?</h5>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <ul className="mb-2 included-list">
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
);

export const StaticPackage = ({ ...props }) => (
  <div>
    <h3 className="packages-title">STATIC WEBSITE PACKAGE</h3>
    <p className="mb-2 text-justify">
      This is the essentials of a website and nothing less. You get the choice
      of a number of standard layouts, a brief design consultation to confirm
      your branding and three pages. All designs are fully mobile responsive as
      standard.
    </p>
    <h5 className="mb-2 packages-subtitle">What’s included?</h5>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <ul className="mb-2 included-list">
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
);

export const DynamicPackage = ({ ...props }) => (
  <div>
    <h3 className="packages-title">DYNAMIC WEBSITE PACKAGE</h3>
    <p className="mb-2 text-justify">
      This is the essentials of a website and nothing less. You get the choice
      of a number of standard layouts, a brief design consultation to confirm
      your branding and three pages. All designs are fully mobile responsive as
      standard.
    </p>
    <h5 className="mb-2 packages-subtitle">What’s included?</h5>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <ul className="mb-2 included-list">
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
);

export const FullStackPackage = ({ ...props }) => (
  <div>
    <h3 className="packages-title">FULL STACK WEBSITE PACKAGE</h3>
    <p className="mb-2 text-justify">
      This is the essentials of a website and nothing less. You get the choice
      of a number of standard layouts, a brief design consultation to confirm
      your branding and three pages. All designs are fully mobile responsive as
      standard.
    </p>
    <h5 className="mb-2 packages-subtitle">What’s included?</h5>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <ul className="mb-2 included-list">
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    <p className="mb-2 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
);
