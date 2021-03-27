import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


// import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import roti1 from "../images/roti1.jpg"
import roti2 from "../images/roti2.jpg"
import roti3 from "../images/roti3.jpg"
import roti4 from "../images/roti4.jpg"
import { Container } from "react-bootstrap";


const Btcarousel = () => (
  <Container >
      <Carousel
        showArrows="true"
        controls="true"
        justify-self="end"
        align-self="center"
        control-prev-icon-color="invert(100%)"
        control-next-icon-color="invert(100%)"
        >
                <Carousel.Item>
                  <img className="d-block w-70" src={roti1} alt="canopy roti" />
                  <Carousel.Caption>
                    <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      Canopy Roti</h3>
                    <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Get the Roti, get the life</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={roti2}
                    alt="super roti"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      Super roti</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Fulfil your destiny, get roti</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={roti3}
                    alt="life roti"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      life roti</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Be complete, live your life, eat roti</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={roti4}
                    alt="happy roti"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      Happy roti</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Live laugh eat roti</p>
                  </Carousel.Caption>
                </Carousel.Item>
      </Carousel>
      cheese
  </Container>
)




const SecondPage = () => (
    <Layout>
        <SEO title="MY ROTI" />
        <h1>I LOVE ROTI</h1>
        <p>ROTI IS THE BEST</p>

        {Btcarousel()}
        hello

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
