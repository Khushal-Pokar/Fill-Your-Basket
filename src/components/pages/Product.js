import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { Grid } from 'react-loader-spinner';
import { addCart } from '../../redux/action/cartActions'

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(0);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        setLoading(true)

        fetch(`https://dummyjson.com/products/${id}`)
          .then((response) => response.json())
          .then((json) => {
            setProduct(json);
            setImages(json.images)
            setLoading(false);
            // console.log(json.images)
          })
          .catch((err) => console.log(err));

    }, [])
    
    const Loading = () => {
      return (
        <>
            {/* <ReactLoading type={'spinningBubbles'} color={'black'} height={'10%'} width={'10%'} /> */}
            <Grid
            height="120"
            width="120"
            color="#292b2c"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="justify-content-center"
            visible={true}
          />
        </>
      )
    }

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    console.log(images)
    const ShowProduct = () => {
        return (
          <>
            <Col className="md-6">
              {/* <img src={product.thumbnail} alt={product.title} height='400px' width='400px' /> */}
              <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
                {images.map((image, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Item ${index+1}`}
                        style={{height: '600px', objectFit: 'contain'}}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            <Col className="md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder align-text-middle">
                Rating {product.rating}&nbsp;
                <FaStar />
              </p>
              <h3 className="display-6 fw-bold mt-2 mb-0">
                <span style={{ textDecoration: "line-through" }}>
                  ${product.price}
                </span>
                &nbsp;&nbsp;
                <span>
                  $
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </span>
                &nbsp;&nbsp;
              </h3>
              <h4 className="display-8 text-uppercase text-black-50 mt-0">
                <span>{product.discountPercentage}% off</span>
              </h4>
              <p className="lead mt-4">{product.description}</p>
              <Button variant="outline-dark" className="my-4" onClick={()=>addProduct(product)}>
                Add to Cart
              </Button>
              <NavLink to='/cart'>
              <Button variant="dark" className="m-4">
                Go to Cart
              </Button>
              </NavLink>
            </Col>
          </>
        );
    }
    
  return (
    <div>
      <Container className="mt-3" style={{ paddingTop: "70px" }}>
        <Row className='justify-content-center'>
            {loading ? <Loading /> : <ShowProduct />}
        </Row>
      </Container>
    </div>
  );
}

export default Product