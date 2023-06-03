import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{backgroundColor: '#292b2c', color: 'white', paddingTop: '35px', marginTop: '35px'}}>
        <Container style={{height: '125px'}}>
            <Row >
                <Col>
                    <p>&copy;{new Date().getFullYear()} Fill Your Basket, Inc.</p>
                </Col>
                <Col>
                    <Row><h5><NavLink to="/privacy-policy" style={{color: 'white', textDecoration: 'none'}}>Privacy Policy</NavLink></h5></Row>
                    <Row><h5><NavLink to="/cookie-policy" style={{color: 'white', textDecoration: 'none'}}>Cookie Policy</NavLink></h5></Row>
                </Col>
                <Col>
                    <Row><h5><NavLink to="/faqs" style={{color: 'white', textDecoration: 'none'}}>FAQ</NavLink></h5></Row>
                    <Row><h5><NavLink to="/customer-care" style={{color: 'white', textDecoration: 'none'}}>Customer Care</NavLink></h5></Row>
                </Col>
                <Col>
                    <h5>Connect with Us</h5>
                    <h3>
                        <a href='https://twitter.com/' style={{color: 'white'}}><BsTwitter /></a>&nbsp;&nbsp;
                        <a href='https://www.instagram.com/' style={{color: 'white'}}><BsInstagram /></a>&nbsp;&nbsp;
                        <a href='https://www.facebook.com/' style={{color: 'white'}}><BsFacebook /></a>
                    </h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer