import React from "react";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function BaseLayout(props) {
  return (
    <>
      <FadeIn>
        <NavBar />
        <section className="container-fluid">{props.children}</section>
        <Footer />
        <Particles />
      </FadeIn>
    </>
  );
}