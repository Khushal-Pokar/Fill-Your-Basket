import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

const CookiePolicy = () => {
  return (
    <Container className="mt-3" style={{ paddingTop: "70px" }}>
      <Row>
        <h1 style={{textAlign: 'center'}}>CookiePolicy</h1>
      </Row>
      <hr />
      <Row>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>In Simple Words</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  FillYourBasket.com is made only for Educational purpose as an
                  project.
                </li>
                <li>
                  As a visitor/user you can use this website only for its
                  intented purpose, i.e just viewing/experiencing website.
                </li>
                <li>
                  Developer/Owner doesn't intents to and doesn't collects,
                  stores or gathers data about its user only as minimum as
                  possible data required only for purpose of serving data is
                  gathered & later instantly discarded.
                </li>
                <li>
                  Developer/Owner doesn't intents to and doesn't sells any kind
                  of data.
                </li>
                <li>
                  Data like website related preferences(Currency/Region) are
                  stored on local storage of browser, which gets destroyed by
                  browser once it's closed. Cookies are not stored.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}

export default CookiePolicy