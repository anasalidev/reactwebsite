import React from "react";
import imgweb from "../src/img/0.jpg"
import Common from "./Common";

const Home = () => {

    return (
        <>
            <Common
                name="Grow your bussines with"
                imgsrc={imgweb}
                btname="Get Started"
                visit="/about"

            />
        </>
    )

}

export default Home;

