import Carousel from 'react-bootstrap/Carousel';

function CaraouselComp() {
  return (
    <Carousel fade style={{height: '500px'}}>
      <Carousel.Item style={{height: '500px'}}>
        <img
          className="d-block w-100"
          src="https://cdn.mos.cms.futurecdn.net/sFSBqwusfUJXmD5H3jT9ZV.jpg"
          alt="First slide"
          style={{height: '500px', objectFit: 'cover'}}
        />
        <Carousel.Caption>
          <h1>Laptops</h1><br />
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '500px'}}>
        <img
          className="d-block w-100"
          src="https://wwd.com/wp-content/uploads/2021/09/Blason-Bag.jpg?w=1024"
          alt="Second slide"
          style={{height: '500px', objectFit: 'cover'}}
        />

        <Carousel.Caption>
          <h1>Bags</h1><br />
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '500px'}}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="Third slide"
          style={{height: '500px', objectFit: 'cover'}}
        />

        <Carousel.Caption>
          <h1>Perfumes</h1><br />
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaraouselComp;