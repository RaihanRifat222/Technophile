import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const about = () => {
  return (
    <>
    <Container style={{marginTop: '50px'}}>
      <h1>About Us</h1>
        <p>Technophile is the most premium & multi-branded omnichannel retail in Bangladesh. The journey started with a single outlet in the year 2022, and now in a 10-years timeframe, there are 23 premium outlets of Technophile, all over Dhaka City. It's a renowned name to all, for their authenticity & top-notch quality. In 2021, Technophile started working as a tech e-commerce company.</p>
        <Row>
          <Col md={6}>
            <p>Technophile is a Hybrid now, as we are operating through a fully functioning e-commerce site, as well as the other online social media platforms: Facebook, WhatsApp, Instagram & LinkedIn.</p>
          </Col>
          <Col md={6}>
            <p>It has a wide range of international premium brands gadgets & accessories collections, starting from Apple, Samsung, OnePlus, Xiaomi, Vivo, Oppo, Huawei, Skull Candy, JBL, Bose, Edifier, DJI, Amazfit, Belkin, Spigen, SwitchEasy, etc.</p>
            </Col>

        </Row>
        <Row>
          <h1>Our Products</h1>
          <Col md={6}>Phone, Tablet, Speaker, True wireless, Memory card, Hard drive, Pendrive, Screen protector, Gimble, Action camera, AI security system, Charger, Adapter, Power Bank, Smart tracker - Gadget & Gear has it all.
          </Col>
          <Col md={6}>Technophile has turned into a trusted platform among tech-savvy people owing to different attributes, such as - a trusted online and offline shopping platform, a wide range of international brands, fast delivery service, genuine products only, and an official warranty facility, which ultimately ensures a phenomenal & premium experience.
          </Col>
         
          
        </Row>
        <Row>
        <h1>Our Vision</h1>
          <Col md={6}>Along the way, Technophile has earned domestic and global recognition for its experience and proven track record in a variety of electronics fields. Walton is the pioneer of developing state of the art designs and modern technology having leading market share specializing in Multi-Stored Refrigerators, Freezers, Air Conditioners, LED/ LCD televisions, Motorcycles, Smart Phones and Home Appliances.
          </Col>
          <Col md={6}>Technophile is working on carrying the flag of red and green into the global market presence from the present 40 countries to more than 200 countries to dominate Go Global and the top five Electronics Brand of the Globe within 2030.
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default about