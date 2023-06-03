import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CaraouselComp from '../layout/CaraouselComp';
import CardComp from '../layout/CardComp';

const Home = () => {
  return (
    <>
    <Container className='mt-3' style={{paddingTop: '70px'}}>
      <Row>
        <h1 style={{ textAlign: 'center' }}>New Arrivals</h1>
        <hr />
        <CaraouselComp />
      </Row>
      <Row className='mt-4'>
        <h2>Best Sellling Smartphones</h2>
        <hr />
        <CardComp />
      </Row>
    </Container>
    </>
  )
}

export default Home