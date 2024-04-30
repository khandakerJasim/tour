import React from "react";
import Hero from "./../Home/hero/Hero";
import Service from "./service/Service";
import Mservice from "./Medical service/Mservice";
import Features from "./Feature/Features";
import Fag from "../Faqs/Fag";
import Testimonial from "./Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Mservice />
      <Features />
      <Fag />
      <Testimonial />
    </div>
  );
}
