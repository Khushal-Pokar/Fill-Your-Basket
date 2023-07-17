import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Grid } from 'react-loader-spinner'

const Categories = () => {

    const [url, setUrl] = useState("https://dummyjson.com/products?limit=100")
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setProducts(json.products);
          setLoading(false);
        })
        .catch((err) => console.log(err));

      fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .then((json) => {
            setCategories(json)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }, [url]);
    // console.log(data)
    const Loading = () => {
      return (
        <>
        <Row>
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
          </Row>
        </>
      );
    }

    const ShowProduct = () => {
        return (
          <>
            <Row>
              <Col md={3}>
                <Button
                  variant="secondary"
                  className="w-100 mb-2"
                  onClick={() =>
                    setUrl("https://dummyjson.com/products?limit=100")
                  }
                >
                  All
                </Button>
                {categories.map((category, index) => {
                  return (
                    <Button
                      variant="secondary"
                      key={index}
                      className="w-100 mb-2"
                      onClick={() =>
                        setUrl(
                          `https://dummyjson.com/products/category/${category}`
                        )
                      }
                    >
                      {category}
                    </Button>
                  );
                })}
                {/* <Button variant='dark' className='m-2' onClick={()=>filterProducts('motorcycle')}>motorcycle</Button> */}
              </Col>
              <Col md={9}>
                {/* <h3>Browsing {products[0].category}</h3> */}
                {loading ? (
                  <Loading />
                ) : (
                  <Row>
                    {products.map((element) => {
                      return (
                        <Col md={4} className="mt-4" key={element.id}>
                          <Card className="text-center h-100">
                            <div className="d-flex align-content-center">
                              {/* <CardImg src={element.thumbnail} /> */}
                              <img
                                src={element.thumbnail}
                                class="card-img-top"
                                alt={element.title}
                                height="250px"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="card-title h-50" style={{textTransform:"capitalize"}}>
                                {element.title}
                              </h3>
                              {/* <p className="card-text">
                                Ratings: {element.rating}/5
                              </p> */}
                              <br />
                              <h4 className="card-text">
                                $
                                {(
                                  element.price -
                                  (element.price * element.discountPercentage) /
                                    100
                                ).toFixed(2)}
                              </h4>
                            </div>
                            <div className="card-footer bg-transparent">
                              <Button variant="lg light">
                                <NavLink to={`product/${element.id}`}>
                                  <Button variant="dark">Buy Now</Button>
                                </NavLink>
                              </Button>
                            </div>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                )}
              </Col>
            </Row>
          </>
        );
    }

  return (
    <div>
      <Container className="mt-3" style={{ paddingTop: "70px" }}>
        <h1 style={{ textAlign: "center" }}>Our Products</h1>
        <hr />
        <ShowProduct />
      </Container>
    </div>
  );
}

export default Categories
