import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./app/content/pages/homePage/Home";
import AboutPage from "./app/content/pages/aboutPage/About";
import PackagesPage from "./app/content/pages/packagesPage/Packages";
import ServicesPage from "./app/content/pages/servicesPage/Services";
import Navigation from "./app/content/components/includes/navigation/Navigation";

function App() {
  return (
    <main className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/packages" component={PackagesPage} />
        {/*
        <Route path="/contact" component={ContactPage} />
        */}
      </Router>
    </main>
  );
}

export default App;
