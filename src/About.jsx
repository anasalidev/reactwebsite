import React from "react";
import Common from "./Common";
import imgweb from "../src/img/people-using-aumented-reality-smartphones_23-2148789355 (Small).jpg"


const About = () => {
 return(
  <>
    <Common
        name="Welcome to About page with"
        imgsrc={imgweb}
        visit="/contact"
        btname="Contact Now"
    />
  </>
 ) 
 
}

export default About;

