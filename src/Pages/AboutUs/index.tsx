import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container } from "./styles";


const AboutUs: React.FC = () => {
    return (
        <Container>
            <Header />                     
            <Footer />
        </Container>
    );
};

export default AboutUs;