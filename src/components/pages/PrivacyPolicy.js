import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

const PrivacyPolicy = () => {
  return (
    <Container className="mt-3" style={{ paddingTop: "70px" }}>
      <Row>
        <h1 style={{textAlign: 'center'}}>PrivacyPolicy</h1>
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
                  Developer/Owner doesn't intents to make this website as
                  commercial website, it is only an educational project to show
                  developers skills.
                </li>
                <li>
                  Developer/Owner doesn't intents to and doesn't collects,
                  stores or gathers data about its user only as minimum as
                  possible data required only for purpose of serving data is
                  gathered & later instantly discarded.
                </li>
                <li>
                  FillYourBasket.com is just an imaginary name used for this
                  educational website, developer didn't intented to Copy Name of
                  any existing website.
                </li>
                <li>
                  Developer/Owner doesn't intents to and doesn't sells any kind
                  of data.
                </li>
                <li>
                  We will disclose your personal information (when you use this
                  website server providing data to you will store your IP
                  address for serving data, if developer faces an attack by
                  hacker this IP address will help to find attacker) to law
                  enforcement and governmental entities if User/Visitor/You is
                  found to be misusing website, stealing confidential website
                  data which includes any part of Source Code, UI Design,
                  Resources or performing acts that cause
                  harm/trouble/inconvenience to Developer or other visitors etc.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Your Data</Accordion.Header>
            <Accordion.Body>
              <h5>
                What information is collected & What we do with the info we
                collect:
              </h5>
              <ul>
                <li>
                  Data that this website requires from user/visitor is very
                  minimum & only is as much as required for providing you data.
                </li>
                <li>
                  When user/visitor opens this website their IP Address is
                  logged/stored only for purpose of serving data/webpage by the
                  server.
                </li>
                <li>Data is not sold to anyone.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy