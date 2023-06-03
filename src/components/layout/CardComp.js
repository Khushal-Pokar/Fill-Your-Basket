import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CardComp = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
        <Container style={{marginTop: '20px'}}>
          <Row md={{cols:5}}>
            {
              products.map((element, index)=>{
                return (
                  <Col key={element.id}>
                    <Card className='text-center h-100'>
                      <div className='d-flex align-content-center h-50'>
                        <CardImg src={element.thumbnail} />
                      </div>
                      <div className='card-body'>
                        <h3 className='card-title h-50'>{element.title}</h3>
                        {/* <p className='card-text'>Ratings: {element.rating}/5</p> */}
                        <br />
                        <h4 className='card-text'>$ {element.price}.00</h4>
                      </div>
                      <div className='card-footer bg-transparent'>
                        <NavLink to={`product/${element.id}`}><Button variant='dark'>Buy Now</Button></NavLink>
                      </div>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
        {/* <h1>Card Component</h1> */}
    </div>
  )
}

export default CardComp